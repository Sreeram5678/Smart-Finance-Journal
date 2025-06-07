package handlers

import (
	"net/http"
	"smart-finance-journal/config"
	"smart-finance-journal/models"

	"github.com/gin-gonic/gin"
)

type CreateCategoryInput struct {
	Name        string `json:"name" binding:"required"`
	Type        string `json:"type" binding:"required,oneof=income expense"`
	Description string `json:"description"`
}

// GetCategories returns all categories
func GetCategories(c *gin.Context) {
	var categories []models.Category
	result := config.DB.Find(&categories)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching categories"})
		return
	}

	c.JSON(http.StatusOK, categories)
}

// CreateCategory creates a new category
func CreateCategory(c *gin.Context) {
	var input CreateCategoryInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Check if category with same name already exists
	var existingCategory models.Category
	if err := config.DB.Where("name = ?", input.Name).First(&existingCategory).Error; err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Category with this name already exists"})
		return
	}

	category := models.Category{
		Name:        input.Name,
		Type:        input.Type,
		Description: input.Description,
	}

	result := config.DB.Create(&category)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating category"})
		return
	}

	c.JSON(http.StatusCreated, category)
} 