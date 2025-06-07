package main

import (
	"log"
	"net/http"
	"os"
	"smart-finance-journal/config"
	"smart-finance-journal/handlers"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	// Initialize database connection
	config.ConnectDatabase()

	// Set default port
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Initialize Gin router
	router := gin.Default()

	// Enable CORS
	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	// Health check endpoint
	router.GET("/api/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status": "healthy",
		})
	})

	// API routes
	api := router.Group("/api")
	{
		// Transactions endpoints
		api.GET("/transactions", handlers.GetTransactions)
		api.POST("/transactions", handlers.CreateTransaction)
		api.PUT("/transactions/:id", handlers.UpdateTransaction)
		api.DELETE("/transactions/:id", handlers.DeleteTransaction)

		// Categories endpoints
		api.GET("/categories", handlers.GetCategories)
		api.POST("/categories", handlers.CreateCategory)
	}

	// Start server
	log.Printf("Server starting on port %s", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatal("Server failed to start:", err)
	}
} 