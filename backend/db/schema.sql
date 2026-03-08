CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(36) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(50),
  avatar_url VARCHAR(500),
  email_confirmed TINYINT(1) DEFAULT 0,
  email_confirm_token VARCHAR(255),
  email_confirm_expires DATETIME,
  password_reset_token VARCHAR(255),
  password_reset_expires DATETIME,
  last_sign_in_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  plan_name ENUM('GODZILLA','WOLF','TURTLE') NOT NULL,
  plan_price DECIMAL(10,2) NOT NULL,
  status ENUM('active','expired','cancelled') DEFAULT 'active',
  payment_id VARCHAR(255),
  razorpay_order_id VARCHAR(255),
  started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS payments (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  subscription_id VARCHAR(36),
  razorpay_payment_id VARCHAR(255),
  razorpay_order_id VARCHAR(255),
  razorpay_signature VARCHAR(512),
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  status ENUM('pending','success','failed') DEFAULT 'pending',
  plan_name ENUM('GODZILLA','WOLF','TURTLE') NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)
