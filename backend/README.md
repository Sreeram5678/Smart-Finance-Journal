# Smart Finance Journal - Backend

This is the Go backend for the Smart Finance Journal application. It provides RESTful APIs for managing financial transactions and categories.

## Prerequisites

- Go 1.21 or higher
- PostgreSQL database
- Git

## Setup

1. Clone the repository
2. Navigate to the backend directory
3. Create a `.env` file with the following variables:
```env
PORT=8080
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=smart_finance
DB_PORT=5432
```

4. Install dependencies:
```bash
go mod download
```

5. Run the server:
```bash
go run main.go
```

## API Endpoints

### Health Check
- GET `/api/health` - Check if the server is running

### Transactions
- GET `/api/transactions` - Get all transactions
- POST `/api/transactions` - Create a new transaction
- PUT `/api/transactions/:id` - Update a transaction
- DELETE `/api/transactions/:id` - Delete a transaction

### Categories
- GET `/api/categories` - Get all categories
- POST `/api/categories` - Create a new category

## Database Schema

### Transaction
- ID (Primary Key)
- Amount (float64)
- Type (string) - "income" or "expense"
- CategoryID (foreign key)
- Description (string)
- Date (timestamp)
- Created/Updated/Deleted timestamps

### Category
- ID (Primary Key)
- Name (string, unique)
- Type (string) - "income" or "expense"
- Description (string)
- Created/Updated/Deleted timestamps 