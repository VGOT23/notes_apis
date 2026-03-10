# YT Backend

A simple Express.js backend API for managing notes.

## Description

This is a lightweight backend application that provides RESTful API endpoints for creating, reading, updating, and deleting notes.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running the Server

```bash
node server.js
```

The server will start on port 3000.

## API Endpoints

### Create a Note
- **Endpoint**: `POST /notes`
- **Body**:
  ```json
  {
    "title": "Note Title",
    "detail": "Note content"
  }
  ```
- **Response**:
  ```json
  {
    "message": "notes created successfully"
  }
  ```

### Get All Notes
- **Endpoint**: `GET /notes`
- **Response**:
  ```json
  {
    "message": "notes data feteched successfully",
    "notes": [
      {
        "title": "Note Title",
        "detail": "Note content"
      }
    ]
  }
  ```

### Update a Note
- **Endpoint**: `PATCH /notes/:index`
- **Body**:
  ```json
  {
    "title": "Updated Title",
    "des": "Updated content"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Notes updated successfully"
  }
  ```

### Delete a Note
- **Endpoint**: `DELETE /notes/:index`
- **Response**:
  ```json
  {
    "message": "note deleted successfully"
  }
  ```

## Project Structure

```
YT_backend/
├── package.json
├── package-lock.json
├── server.js
└── src/
    └── app.js
```

## License

ISC

