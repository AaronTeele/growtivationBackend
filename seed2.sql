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
  email VARCHAR UNIQUE NOT NULL,
  avatar VARCHAR,
  auth_token VARCHAR NOT NULL,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
  -- username VARCHAR UNIQUE,
  -- first_name VARCHAR,
  -- last_name VARCHAR,
  -- city VARCHAR NOT NULL,
  -- state_of_residence VARCHAR NOT NULL,
  -- zipcode INT NOT NULL,
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
  author_id INT REFERENCES users(id) NOT NULL,
  caption VARCHAR,
  img_url VARCHAR,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments
(
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id) NOT NULL,
  author_id INT REFERENCES users(id) NOT NULL,
  content_text VARCHAR NOT NULL,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE likes
(
  id SERIAL PRIMARY KEY,
  person_liked_id INT REFERENCES users(id) NOT NULL,
  post_id INT REFERENCES posts(id) NOT NULL,
  createdAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE followers
(
  person_following_id INT REFERENCES users(id) NOT NULL,
  person_being_followed_id INT REFERENCES users(id) NOT NULL
);  


INSERT INTO users (email, auth_token) 
VALUES ('Dany@westeros.gov', 99999);

INSERT INTO users (email, auth_token) 
VALUES ('Homer_Simpson@SNPP.com', 11111);

INSERT INTO users (email, auth_token) 
VALUES ('bean@dreamland.gov', 87321);

INSERT INTO posts (author_id, caption) 
VALUES (3, 'Who wants to get some drinks!!');

INSERT INTO comments (post_id, author_id, content_text) 
VALUES (1, 2, 'Woohoo!!!');

INSERT INTO comments (post_id, author_id, content_text) 
VALUES (1, 1, 'Not until you #BENDTHEKNEE');

INSERT INTO comments (post_id, author_id, content_text) 
VALUES (1, 2, 'Doh!');

