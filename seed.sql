CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  state_of_residence VARCHAR NOT NULL,
  zipcode INT NOT NULL,
  avatar VARCHAR,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE goals
(
  id SERIAL PRIMARY KEY,
  userID INT REFERENCES users(id),
  goal VARCHAR NOT NULL
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  authorID INT REFERENCES users(id) NOT NULL,
  caption VARCHAR,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments
(
  id SERIAL PRIMARY KEY,
  postID INT REFERENCES posts(id) NOT NULL,
  authorID INT REFERENCES users(id) NOT NULL,
  content_text VARCHAR,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW(),
);

CREATE TABLE likes
(
  id SERIAL PRIMARY KEY,
  person_liked_id INT REFERENCES users(id) NOT NULL,
  postID INT REFERENCES posts(id) NOT NULL
  createdAt TIMESTAMP DEFAULT NOW(),
);

CREATE TABLE followers
(
  person_following_id INT REFERENCES users(id) NOT NULL,
  person_being_followed_id INT REFERENCES users(id) NOT NULL
);

