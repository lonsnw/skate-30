-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL, 
    "email" VARCHAR (50) UNIQUE,
    "mobile" integer UNIQUE
);

CREATE TABLE "events" (
    "id" SERIAL PRIMARY KEY,
    "rink" VARCHAR (50) NOT NULL,
    "address" VARCHAR (100),
    "notes" VARCHAR (150),
    "type" BOOLEAN NOT NULL DEFAULT FALSE,
    "level" BOOLEAN NOT NULL DEFAULT TRUE,
    "exposure" BOOLEAN NOT NULL DEFAULT FALSE,
    "date" DATE NOT NULL, 
    "time" TIME NOT NULL,
    "duration" integer NOT NULL
);

CREATE TABLE "rsvp" (
    "id" SERIAL PRIMARY KEY,
    "event_id" integer NOT NULL REFERENCES events,
    "user_id" integer NOT NULL REFERENCES users,
    "name" VARCHAR (50),
    "pucks" BOOLEAN NOT NULL DEFAULT FALSE,
    "tutor" BOOLEAN NOT NULL DEFAULT FALSE,
    "drinks" BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE "users_events" (
    "id" SERIAL PRIMARY KEY,
    "user_id" integer NOT NULL REFERENCES users,
    "event_id" integer NOT NULL REFERENCES events
);

INSERT INTO "events"
VALUES (1, 'Augsburg A', '2323 Riverside Ave', 'Can''t use locker rooms after skating', FALSE, TRUE, FALSE, '2024-07-02', '20:30', 90),
(2, 'Augsburg B', '2323 Riverside Ave', 'Can''t use locker rooms after skating', FALSE, TRUE, FALSE, '2024-07-08', '17:30', 60),
(3, 'Parade North', '600 Kenwood Parkway', 'The Mighty Ducks played here', FALSE, TRUE, FALSE, '2024-06-28', '18:15', 60),
(4, 'Roseville', '2661 Civic Center Dr', '', TRUE, TRUE, FALSE, '2024-06-19', '12:15', 60),
(5, 'Roseville Oval', '2661 Civic Center Dr', 'No concessions stand', TRUE, TRUE, TRUE, '2024-12-19', '12:15', 60);

