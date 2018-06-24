INSERT INTO burgers (burger_name, devoured) VALUES ("Italian cold-cut", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Tuna melt", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Meatball sub", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("An Actual Burger", false);

SELECT * FROM burgers;
-- DROP TABLE burgers;
TRUNCATE TABLE burgers;