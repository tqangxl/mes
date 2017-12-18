CREATE DATABASE IF NOT EXISTS `mes`;

CREATE TABLE IF NOT EXISTS `mes`.`articles` (
    `id` serial,
    `code` varchar(50),
    `description` varchar(200),
    `pz_container` int,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `mes`.`models` (
    `id` serial,
    `code` varchar(50),
    `description` varchar(200),
    `article_id` bigint unsigned,
    FOREIGN KEY (`article_id`) REFERENCES articles(`id`),
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `mes`.`params` (
    `id` serial,
    `code` varchar(50),
    `description` varchar(200),
    `type` varchar(200),
    PRIMARY KEY (`id`)
);