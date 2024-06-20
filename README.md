# SKATE:30

## Description

_Duration: 3.5 Week Sprint, working part time_

SKATE:30 is a web app that hockey players can use to coordinate pickup hockey and open skate times with their friends in the Twin Cities metro area. The application is optimized for mobile browsers.

Users can:

 * Create an account
 * Browse existing events/ice times that have been submitted by others
 * RSVP to existing events, either using their account or as a guest user
 * Submit new events to the database for all users to see
 * View upcoming events they have registered for and past events that they registered for

The app stores all users, events, and RSVPs on a database until they are deleted.  Documentation provides sample content for the database, including some sample RSVPs for users that can be built out using the app.  Additional events, users, and RSVPs can be added using the application.

This app was built as a capstone project for a full-stack software engineering program at Prime Digital Academy.  Here are the [assignment instructions](./INSTRUCTIONS.md).

SKATE:30 will be deployed using either Heroku or Hostinger in the near future.

## Screen shots

Home page:
<br />
<center><image src=public/images/home-page.png width=50%></center>
<br />
User page:
<br />
<center><image src=public/images/user-profile.png width=50%></center>
<br />
Browse events:
<br />
<center><image src=public/images/browse.png width=50%></center>
<br />
Event details: 
<br />
<center><image src=public/images/event-details.png width=50%></center>
<br />
RSVP to event: 
<br />
<center><image src=public/images/rsvp.png width=50%></center>
<br />
Add an event: 
<br />
<center><image src=public/images/add-event.png width=50%></center>
<br />

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Postgres](https://www.postgresql.org/download/)
* [Nodemon](https://nodemon.io)
* [Material UI](https://mui.com/)

## Installation

The application has been tested and run on a local machine using the browser. It may be deployed in the future but currently is only available locally.

1. Clone down a version of this repository
2. Create a database named `skate-30`
3. Create and populate the tables needed for the database 
    * This project is built on [Postgres](https://www.postgresql.org/download/), which you will need to install to use the app
    * The `database.sql` file contained in this repository provides all of the necessary queries for creating the table needed to run the app
    * The queries will also populate the `events` and `rsvp` tables with sample data
      * **Note:** You will need to create users using the app's interface before creating the `rsvp` table, as the `rsvp` table contains foreign keys that refer to the `user` table IDs.
4. Open in your editor of choice and run an `npm install`
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. Navigate to the localhost port provided by your terminal when you initiate your client.  The default port when running Vite, for example, is `http://localhost:5173/`

## Usage
My friends and I play hockey but we're not all in the same league.  We like to grab extra ice time when we can so that we can play together, but most ice rinks’ online schedules–if they even have them online–are pretty old school, with PDFs or typed lists and no central database.  One of my hockey friends told me about an app where skaters can submit ice times at any rink in the area and then anyone can RSVP.  They said that switching to this app will let us all schedule and sign up there, saving some time and keeping the group chat from devolving into scheduling chaos.

Here's how I got started using SKATE:30:

1. Create an account in the app by tapping the user icon <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="#fff"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg> on the home page and then tapping the "Register" button
2. Input required information on Register page and tap "Register" button
3. Tap the skate logo <img src="public/images/skates.svg" alt="logo" height="24px"> at the bottom of the page to browse existing events
4. Scroll through existing events or search by typing in a search term and tapping the magnifying glass <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="#fff"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
5. Tap an event to see more details
6. Tap the RSVP switch to sign up for an event
7. Use the switch and radio buttons on the event RSVP page to provide the requested information, then tap "Register" to submit a response
8. The app will navigate to a personalized schedule; tap into an event to change the RSVP using the RSVP switch or navigate to the browse page again using the skate logo
9. Add a new event by tapping the add icon <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="#fff"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
10. Input the requested information in the fields and using the switches, then tap "Next"
11. Select the date and time of the event, input the duration of the event in minutes, and tap "Next"
12. Review the information you provided.  If it's correct, tap "Add event"; if not, tap "Cancel"
13. Tap "Browse" on the confirmation page to return to browse and sign up for the event you submitted
14. To log out, navigate to the User profile using the user icon <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="#fff"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg> and tap "Log out"

## Technologies

* [Material UI](https://mui.com/)
* [styled-components](https://styled-components.com/)
* [moment](https://momentjs.com/)
* React
* Redux
* Sagas
* HTML
* CSS
* JavaScript
* Node.js
* Express
* PostgreSQL

## Tools

* [Canva](https://www.canva.com/)
* [DB Designer](https://www.dbdesigner.net/)
* [Figma](https://www.figma.com)
* GitHub
* Google Workspace

## Design
This project was designed using [Figma for components and wireframes](https://www.figma.com/design/cvAvrt5cr5zxz75uAspCKX/style-guide-and-design-system?node-id=1879-11810&t=Gx4w4do3Vj2MgEen-1) and using Canva for logo design and the color palette.

## Documentation
This project included [scope documentation](https://docs.google.com/document/d/1Dx7jnx_YDbxs0hUD6uqEQR_CtspXngCvo_zYZyR-IfI/edit?usp=sharing).

This documentation was built following a [provided template](https://github.com/PrimeAcademy/readme-template/blob/main/README.md).   It has been edited for style,  consistency, and to provide all relevant details.

## Future development
The following features are planned for development:

* Find your friends feature, which allows authenticated users to search for friends and see their friends' schedules
* Layered search, which combines search features into a single component with options for where to search
  * Friend searches will remain available only to authenticated users
* Direct users directly to the RSVP for an event they have created after they confirm the event information
* Create "Log in to use" feature that directs users back to the page they came from after login
* Implement notifications to the user's email and possibly mobile device ahead of the event start time


## Support
If you have suggestions, issues, or want to discuss my work, please contact me.
