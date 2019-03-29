-- DROP DATABASE growtivation;
-- CREATE DATABASE growtivation;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS goals CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS likes CASCADE;
DROP TABLE IF EXISTS followers CASCADE;


CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  state_of_residence VARCHAR NOT NULL,
  zipcode INT NOT NULL,
  avatar VARCHAR,
  auth_token VARCHAR,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE goals
(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) NOT NULL,
  goal VARCHAR NOT NULL
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  author_id INT REFERENCES users(id),
  caption VARCHAR,
  img_url VARCHAR,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments
(
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id),
  author_id INT REFERENCES users(id),
  content_text VARCHAR,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE likes
(
  id SERIAL PRIMARY KEY,
  person_liked_id INT REFERENCES users(id),
  post_id INT REFERENCES posts(id),
  createdAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE followers
(
  person_following_id INT REFERENCES users(id),
  person_being_followed_id INT REFERENCES users(id)
);

-- INSERT INTO users (
-- username, 
-- email, 
-- first_name, 
-- last_name, 
-- city, 
-- state_of_residence, 
-- zipcode
-- )