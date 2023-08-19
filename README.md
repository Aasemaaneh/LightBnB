
# LightBnB

LightBnB is a property rental and reservation platform where users can list properties, search for available properties, make reservations, and manage their own property listings.

This project is part of the [Lighthouse Labs](https://www.lighthouselabs.ca/) Web Development Bootcamp.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Property listing and search
- Reservation management
- My Listings and My Reservations sections
- Property creation for registered users
- Average ratings and reviews for properties

## Getting Started

### Prerequisites

To run this project, you need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (with npm)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone this repository to your local machine:


   git clone https://github.com/Aasemaaneh/LightBnB
   

2. Navigate to the project directory:

   cd LightBnB_WebApp

3. Install the project dependencies:

   
   npm install
   

4. Set up your PostgreSQL database:

   - Create a new PostgreSQL database named `lightbnb`.
   - Update the database connection configuration in the `db/database.js` file.


### Running the Server

To start the server, run:

npm run local


The server will start on port 3000 by default. You can access the application by opening your web browser and navigating to [http://localhost:3000](http://localhost:3000).

## Usage

- Register a new account or log in with an existing one.
- Browse and search for available properties.
- Make reservations for properties.
- Create your own property listings.
- Manage your reservations in the My Reservations section.
- View and edit your listed properties in the My Listings section.

