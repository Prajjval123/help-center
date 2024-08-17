# Help Center API

## Overview

The Help Center API is a RESTful service that allows users to manage Help Center cards. These cards represent various sections of a help center, such as "Branches," "Manage Your Account," and "Manage Billing." The API supports creating, retrieving, and fetching specific Help Center cards by their title.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Create a Help Card](#create-a-help-card)
  - [Get All Help Cards](#get-all-help-cards)
  - [Get a Specific Help Card](#get-a-specific-help-card)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [License](#license)

## Features

- **Create Help Cards:** Add new cards to the help center with a title, description, and link.
- **Retrieve All Cards:** Fetch a list of all available help center cards.
- **Retrieve Specific Card:** Fetch details of a specific card by its title.

## Technology Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing help center cards.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed locally or an account with MongoDB Atlas.

### Steps

1. **Clone the repository:**
git clone <repository-url>
cd help-center-api

2. **Install dependencies:**
npm install

3. **Set up environment variables:**
• Create a .env file in the root of the project and add the following:
    PORT=3000
    MONGODB_URI=<your-mongodb-connection-string>
• Replace <your-mongodb-connection-string> with your actual MongoDB connection string.

4. **Run the server:**
npm start
The server should start on the port specified in your .env file (default: 3000).

**Usage**
Once the server is running, you can interact with the API using tools like Postman or curl. Below are the available API endpoints.

**API Endpoints**
Create a Help Card
Endpoint: POST /api/help-cards
Description: Adds a new help card to the help center.
Request Body:
json
Copy code
{
  "title": "Manage Billing",
  "description": "Change subscriptions and payment details.",
  "link": "https://example.com/manage-billing"
}
Response:
Success (201): Returns the created help card.
Failure (500): Returns an error message.
Get All Help Cards
Endpoint: GET /api/help-cards
Description: Retrieves all help cards.
Response:
Success (200): Returns an array of help cards.
Failure (500): Returns an error message.
Get a Specific Help Card
Endpoint: GET /api/help-cards/:title
Description: Retrieves a specific help card by its title.
Response:
Success (200): Returns the requested help card.
Failure (404): Returns an error if the card is not found.
Failure (500): Returns an error message.

**Project Structure**
help-center-api/
│
├── models/
│   └── HelpCard.js          # Mongoose schema and model for Help Cards
│
├── routes/
│   └── helpCards.js         # Express routes for Help Cards
│
├── .env                     # Environment variables
├── index.js                 # Entry point of the application
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation

**Error Handling**
The API handles errors gracefully by returning appropriate HTTP status codes and error messages:

404 Not Found: Returned when a specific card is not found by its title.
500 Internal Server Error: Returned for server-related issues, such as database connection failures or invalid input.