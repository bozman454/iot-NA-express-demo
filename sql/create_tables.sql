CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name varchar(250) NOT NULL,
  password varchar(250) NOT NULL
  PRIMARY KEY (user_id)
);

