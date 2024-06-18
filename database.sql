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

-- Sample event data
INSERT INTO "events" ("rink", "address", "notes", "type", "level", "exposure", "date", "time", "duration")
VALUES ('Augsburg A', '2323 Riverside Ave', 'Can''t use locker rooms after skating', TRUE, TRUE, FALSE, '2024-07-02', '20:30', 90),
('Augsburg B', '2323 Riverside Ave', 'Can''t use locker rooms after skating', TRUE, TRUE, FALSE, '2024-07-08', '17:30', 60),
('Parade North', '600 Kenwood Parkway', 'The Mighty Ducks played here', TRUE, FALSE, FALSE, '2024-06-28', '18:15', 60),
('Roseville', '2661 Civic Center Dr', '', TRUE, TRUE, FALSE, '2024-06-19', '12:15', 60),
('Roseville Oval', '2661 Civic Center Dr', 'No concessions stand', FALSE, TRUE, TRUE, '2024-12-19', '12:15', 60),
('Pleasant', '848 Pleasant Ave', 'Softest ice in town', TRUE, FALSE, FALSE, '2024-11-02', '19:45', 60),
('Highland Arena', '800 South Snelling', 'Not sure which rink', FALSE, TRUE, FALSE, '2024-08-28', '20:00', 120),
('TRIA', '400 Wabasha St', '', TRUE, FALSE, FALSE, '2024-08-29', '19:45', 60),
('Groveland', '2021 St Clair Ave', 'Rink has boards', TRUE, TRUE, TRUE, '2025-01-20', '18:00', 60),
('Edgcumbe', '320 Griggs St S', 'Hockey rink is often busy, might just use the oval', FALSE, TRUE, TRUE, '2024-01-28', '12:15', 60),
('Hiawatha', '2701 E 44th St', 'Warming room is closed this season', TRUE, TRUE, TRUE, '2024-01-10', '18:30', 90);


-- Sample RSVPs can only be added after events and users are created; 
-- sample events are above and you will need at least 5 users to not throw errors with this query.
-- feat. guest RSVPer Kasey, who is a goalie
INSERT INTO "rsvp" ("event_id", "user_id", "name", "position", "pucks", "tutor", "drinks")
VALUES (7, 1, '', FALSE, FALSE, TRUE, TRUE),
(7, 2, '', FALSE, TRUE, FALSE, FALSE), 
(7, null, 'Kasey R', TRUE, FALSE, FALSE, FALSE), 
(2, 1, '', FALSE, FALSE, FALSE, FALSE),
(8, 2, '', FALSE, FALSE, FALSE, TRUE),
(7, 4, '', FALSE, FALSE, FALSE, FALSE), 
(2, 5, '', FALSE, FALSE, FALSE, FALSE), 
(3, null, 'Kasey R', TRUE, FALSE, FALSE, TRUE), 
(2, 4, '', FALSE, FALSE, TRUE, FALSE),
(8, 4, '', FALSE, TRUE, FALSE, TRUE),
(7, 3, '', FALSE, TRUE, FALSE, FALSE),
(11, 5, '', FALSE, FALSE, FALSE, FALSE), 
(10, null, 'Kasey R', TRUE, FALSE, FALSE, TRUE), 
(8, 3, '', FALSE, FALSE, TRUE, FALSE),
(9, 1, '', FALSE, TRUE, FALSE, FALSE);