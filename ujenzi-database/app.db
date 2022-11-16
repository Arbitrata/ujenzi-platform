-- SCHEMA: ujenzi

-- DROP SCHEMA IF EXISTS ujenzi ;

CREATE SCHEMA IF NOT EXISTS ujenzi
    AUTHORIZATION postgres;

CREATE TABLE ujenzi.location (
    location_id VARCHAR(50) NOT NULL,
    city_name VARCHAR(205) NOT NULL,
    street_address VARCHAR(250) NOT NULL,
    PRIMARY KEY (location_id)
)

CREATE TABLE ujenzi.role (
    role_id VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (role_id)
)

CREATE TABLE ujenzi.material_type (
    material_id VARCHAR(50) NOT NULL,
    material_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (material_id)
)

CREATE TABLE IF NOT EXISTS ujenzi.post (
    post_id VARCHAR(50) NOT NULL,
    material_id VARCHAR(50) NOT NULL,
    post_image BYTEA NOT NULL,
    description TEXT NOT NULL,
    post_name VARCHAR(250) NOT NULL,
    current_price NUMERIC NOT NULL,
    previous_price NUMERIC NOT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (material_id)
        REFERENCES ujenzi.material_type (material_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE ujenzi.user (
    user_id VARCHAR(50) NOT NULL,
    post_id VARCHAR(50) NOT NULL,
    role_id VARCHAR(50) NOT NULL,
    location_id VARCHAR(50) NOT NULL,
    full_name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    password_hash VARCHAR(250) NOT NULL,
    password_reset_token VARCHAR(255) NOT NULL,
    phone_verification_code VARCHAR(255) NOT NULL,
    email_verification_code VARCHAR(255) NOT NULL,
    profile_picture bytea,
    PRIMARY KEY (user_id),
    CONSTRAINT uq_email UNIQUE (email),
    CONSTRAINT uq_mobile UNIQUE (phone_number),
    FOREIGN KEY (location_id)
        REFERENCES ujenzi.location (location_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    FOREIGN KEY (role_id)
        REFERENCES ujenzi.role (role_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    FOREIGN KEY (post_id)
        REFERENCES ujenzi.post (post_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE ujenzi.notification (
    notification_id VARCHAR(50) NOT NULL,
    user_id VARCHAR(50) NOT NULL,
    notification_text TEXT NOT NULL,
    update_date TIMESTAMP NOT NULL,
    PRIMARY KEY (notification_id),
    FOREIGN KEY (user_id)
        REFERENCES ujenzi.user (user_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE IF NOT EXISTS ujenzi.order (
    order_id VARCHAR(50) NOT NULL,
    user_id VARCHAR(50) NOT NULL,
    post_id VARCHAR(50) NOT NULL,
    order_description TEXT NOT NULL,
    order_date TIMESTAMP NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (post_id)
        REFERENCES ujenzi.post (post_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    FOREIGN KEY (user_id)
        REFERENCES ujenzi.user (user_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE ujenzi.wallet (
    wallet_id VARCHAR(50) NOT NULL,
    order_id VARCHAR(50) NOT NULL,
    wallet_balance NUMERIC DEFAULT 0,
    update_date TIMESTAMP NOT NULL,
    PRIMARY KEY (wallet_id),
    FOREIGN KEY (order_id)
        REFERENCES ujenzi.order (order_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE ujenzi.withdrawal (
    withdrawal_id VARCHAR(50) NOT NULL,
    wallet_id VARCHAR(50) NOT NULL,
    withdrawal_amount NUMERIC NOT NULL,
    update_date TIMESTAMP NOT NULL,
    PRIMARY KEY (withdrawal_id),
    FOREIGN KEY (wallet_id)
        REFERENCES ujenzi.wallet (wallet_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE ujenzi.deposit (
    deposit_id character varying(50) NOT NULL,
    wallet_id character varying(50) NOT NULL,
    deposit_amount numeric NOT NULL,
    update_date timestamp NOT NULL,
    PRIMARY KEY (deposit_id),
    FOREIGN KEY (wallet_id)
        REFERENCES ujenzi.wallet (wallet_id)
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
