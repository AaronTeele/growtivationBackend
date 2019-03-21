DROP DATABASE IF EXISTS growtivation;
CREATE DATABASE growtivation;

\c growtivation;

CREATE TABLE community (
  id SERIAL PRIMARY KEY,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW(),
  communityName VARCHAR NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW(),
  username VARCHAR NOT NULL,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  state_of_residence VARCHAR NOT NULL,
  zipcode INT NOT NULL,
  avatar VARCHAR
);

CREATE TABLE goals (
  id SERIAL PRIMARY KEY,
  userID INT REFERENCES users(id),
  goalName VARCHAR NOT NULL,
  goalStatus VARCHAR
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW(),
  community INT REFERENCES community(id) NOT NULL,
  authorID INT REFERENCES users(id) NOT NULL,
  caption VARCHAR
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW(),
  postID INT REFERENCES posts(id) NOT NULL,
  authorID INT REFERENCES users(id) NOT NULL,
  content_text VARCHAR
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  createdAt TIMESTAMP DEFAULT NOW(),
  person_liked_id INT REFERENCES users(id) NOT NULL,
  postID INT REFERENCES posts(id) NOT NULL
);


CREATE TABLE followers (
  person_following_id INT REFERENCES users(id) NOT NULL,
  person_being_followed_id INT REFERENCES users(id) NOT NULL
);