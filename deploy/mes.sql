CREATE DATABASE IF NOT EXISTS mes;

CREATE TABLE IF NOT EXISTS models (
    id serial,
    code varchar(50),
    name varchar(200),
    PRIMARY KEY (id)
);