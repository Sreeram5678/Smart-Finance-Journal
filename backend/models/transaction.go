package models

import (
	"time"

	"gorm.io/gorm"
)

type Transaction struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	Amount      float64        `json:"amount"`
	Type        string         `json:"type" gorm:"type:varchar(20)"` // income or expense
	CategoryID  uint           `json:"category_id"`
	Category    Category       `json:"category"`
	Description string         `json:"description"`
	Date        time.Time      `json:"date"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `json:"-" gorm:"index"`
} 