**Habit Tracker + Daily Stoic Quotes**

A simple habit-tracking web application that helps users build consistency by logging a daily habit and reflecting with a Stoic quote.
The app integrates the Pixela API for visual habit tracking and a Stoic Quotes API for daily inspiration.

This project was built as an ALX Frontend Capstone Project using React.


**Problem Statement**

Building habits requires consistency and visibility. Many people struggle to track their progress in a simple, motivating way.

This app solves that by:

Allowing users to log a single daily habit

Displaying progress visually using a Pixela graph

Providing a daily Stoic quote to encourage reflection and discipline


**Solution Overview**

Users create a local account (username + password)

A corresponding Pixela account and graph are created automatically

Users log their habit daily with one click

Progress is displayed using a Pixela graph

Users can return later and log in to see their history

The app works fully without a backend, using localStorage


**Tech Stack**

React (Vite)

Tailwind CSS

Pixela API – habit tracking & graph visualization

Stoic Quote API – daily motivational quotes

Axios – API requests

React Router DOM – routing


**Features**

Local user authentication (signup & login)

Automatic Pixela user & graph creation

Single-habit daily logging (1 click = 1 habit log)

Visual habit history using Pixela graphs

Daily Stoic quote with refresh option

Responsive and clean UI

Clear error and loading states


**User Flow**

User opens the app

User signs up with a username, password, and habit name

App:

Creates a Pixela account

Creates a habit graph

Saves credentials locally

User is redirected to the dashboard

User logs their habit daily

User views habit history via graph

User can log out and log back in later to continue
