CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  auth_token VARCHAR UNIQUE NOT NULL,
  avatar VARCHAR,
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
  goal VARCHAR NOT NULL,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
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
    post_id INT REFERENCES posts(id) NOT NULL,
    person_liked_id INT REFERENCES users(id) NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW()   
  );

  CREATE TABLE followers
  (
    person_following_id INT REFERENCES users(id) NOT NULL,
    person_being_followed_id INT REFERENCES users(id) NOT NULL
  );  