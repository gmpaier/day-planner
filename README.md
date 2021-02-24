# day-planner

Objective:
    Create a simple day planner that could be used by professionals to schedule daily events.

!! Important Note Regarding Moment.js:
    This assignment calls for us to use the Moment.js library in order to work with dates and times. However, upon reading the documentation for Moment.js, one will be greeted with several statements asking the user to consider using libraries other than Moment.js, and stating that Moment.js is now a legacy product. As such, I deviated from the assignment guidelines and instead used Luxon.js, a library created by the Moment team which they consider to be the successor to the Moment project, in order to get dates and times.

Requirements:
    - Create a daily planner with timeslots for normal business hours (9am-5pm)
    - Color the timeblocks according to if the event is in the past (grey), present (red), or future (green)
    - Ability to write events in the planner, which will be saved and loaded in local storage, so events persist when the page is reloaded.
    - Completed project, hosted on github.

Contents:
    index.html - Main html file for the planner.

    assets - contains script.js and style.css, which power and style the index page respectively. Also contains luxon.min.js, a minified file containing the data needed to access the luxon library for dates and times. 