package handlers

import (
	"net/http"
	"smart-finance-journal/config"
	"smart-finance-journal/models"
	"time"

	"github.com/gin-gonic/gin"
)

type CreateTransactionInput struct {
	Amount      float64   `json:"amount" binding:"required"`
	Type        string    `json:"type" binding:"required,oneof=income expense"`
	CategoryID  uint      `json:"category_id" binding:"required"`
	Description string    `json:"description"`
	Date        time.Time `json:"date" binding:"required"`
}

// GetTransactions returns all transactions
func GetTransactions(c *gin.Context) {
	var transactions []models.Transaction
	result := config.DB.Preload("Category").Find(&transactions)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching transactions"})
		return
	}

	c.JSON(http.StatusOK, transactions)
}

// CreateTransaction creates a new transaction
func CreateTransaction(c *gin.Context) {
	var input CreateTransactionInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Verify category exists
	var category models.Category
	if err := config.DB.First(&category, input.CategoryID).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Category not found"})
		return
	}

	transaction := models.Transaction{
		Amount:      input.Amount,
		Type:        input.Type,
		CategoryID:  input.CategoryID,
		Description: input.Description,
		Date:        input.Date,
	}

	result := config.DB.Create(&transaction)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating transaction"})
		return
	}

	// Fetch the complete transaction with category
	config.DB.Preload("Category").First(&transaction, transaction.ID)
	c.JSON(http.StatusCreated, transaction)
}

// UpdateTransaction updates a transaction by ID
func UpdateTransaction(c *gin.Context) {
	var input CreateTransactionInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var transaction models.Transaction
	if err := config.DB.Where("id = ?", c.Param("id")).First(&transaction).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Transaction not found"})
		return
	}

	// Update transaction
	transaction.Amount = input.Amount
	transaction.Type = input.Type
	transaction.CategoryID = input.CategoryID
	transaction.Description = input.Description
	transaction.Date = input.Date

	result := config.DB.Save(&transaction)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error updating transaction"})
		return
	}

	// Fetch the updated transaction with category
	config.DB.Preload("Category").First(&transaction, transaction.ID)
	c.JSON(http.StatusOK, transaction)
}

// DeleteTransaction deletes a transaction by ID
func DeleteTransaction(c *gin.Context) {
	var transaction models.Transaction
	if err := config.DB.Where("id = ?", c.Param("id")).First(&transaction).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Transaction not found"})
		return
	}

	result := config.DB.Delete(&transaction)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error deleting transaction"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Transaction deleted successfully"})
} 