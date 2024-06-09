-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
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
    "type" BOOLEAN NOT NULL DEFAULT TRUE,
    "level" BOOLEAN NOT NULL DEFAULT TRUE,
    "exposure" BOOLEAN NOT NULL DEFAULT FALSE,
    "date" DATE NOT NULL, 
    "time" TIME NOT NULL,
    "duration" integer NOT NULL
);

CREATE TABLE "rsvp" (
    "id" SERIAL PRIMARY KEY,
    "event_id" integer NOT NULL REFERENCES "events",
    "user_id" integer REFERENCES "user",
    "name" VARCHAR (50),
    "position" BOOLEAN NOT NULL DEFAULT FALSE,
    "pucks" BOOLEAN NOT NULL DEFAULT FALSE,
    "tutor" BOOLEAN NOT NULL DEFAULT FALSE,
    "drinks" BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE "users_events" (
    "id" SERIAL PRIMARY KEY,
    "user_id" integer NOT NULL REFERENCES "user",
    "event_id" integer NOT NULL REFERENCES "events"
);

INSERT INTO "events"
VALUES (1, 'Augsburg A', '2323 Riverside Ave', 'Can''t use locker rooms after skating', TRUE, TRUE, FALSE, '2024-07-02', '20:30', 90),
(2, 'Augsburg B', '2323 Riverside Ave', 'Can''t use locker rooms after skating', TRUE, TRUE, FALSE, '2024-07-08', '17:30', 60),
(3, 'Parade North', '600 Kenwood Parkway', 'The Mighty Ducks played here', TRUE, FALSE, FALSE, '2024-06-28', '18:15', 60),
(4, 'Roseville', '2661 Civic Center Dr', '', TRUE, TRUE, FALSE, '2024-06-19', '12:15', 60),
(5, 'Roseville Oval', '2661 Civic Center Dr', 'No concessions stand', FALSE, TRUE, TRUE, '2024-12-19', '12:15', 60),
(6, 'Pleasant', '848 Pleasant Ave', 'Softest ice in town', TRUE, FALSE, FALSE, '2024-11-02', '19:45', 60),
(7, 'Highland Arena', '800 South Snelling', 'Not sure which rink', FALSE, TRUE, FALSE, '2024-08-28', '20:00', 120),
(8, 'TRIA', '400 Wabasha St', '', TRUE, FALSE, FALSE, '2024-08-29', '19:45', 60),
(9, 'Groveland', '2021 St Clair Ave', 'Rink has boards', TRUE, TRUE, TRUE, '2025-01-20', '18:00', 60),
(10, 'Edgcumbe', '320 Griggs St S', 'Hockey rink is often busy, might just use the oval', FALSE, TRUE, TRUE, '2024-01-28', '12:15', 60),
(11, 'Hiawatha', '2701 E 44th St', 'Warming room is closed this season', TRUE, TRUE, TRUE, '2024-01-10', '18:30', 90);

INSERT INTO "rsvp"
VALUES (1, 7, 1, '', TRUE, TRUE, FALSE, FALSE),
(2, 7, 2, '', TRUE, FALSE, FALSE, FALSE), 
(3, 7, null, 'Kasey', FALSE, FALSE, FALSE, TRUE), 
(4, 2, 1, '', TRUE, FALSE, TRUE, FALSE),
(5, 8, 2, '', TRUE, TRUE, FALSE, TRUE);