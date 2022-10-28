CREATE DATABASE petscrud;

CREATE TABLE pets(
    pet_id SERIAL PRIMARY KEY,
    pet_name VARCHAR(255) NOT NULL,
    pet_age integer NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    species VARCHAR(255) NOT NULL
);