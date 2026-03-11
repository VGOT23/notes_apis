# YT Backend

A simple Express.js backend API for managing notes with MongoDB.

## Description

This is a lightweight backend application that provides RESTful API endpoints for creating, reading, updating, and deleting notes using MongoDB for data persistence.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following:

```env
MONGO_DATABASE_URL=your_mongodb_connection_string
```

## Running the Server

```bash
node server.js
```

The server will start on port 3000 and connect to MongoDB.

## API Endpoints

### Create a Note
- **Endpoint**: `POST /notes`
- **Body**:
  ```json
  {
    "title": "Note Title",
    "description": "Note content"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Note created successfully"
  }
  ```

### Get All Notes
- **Endpoint**: `GET /notes`
- **Response**:
  ```json
  {
    "message": "Notes data fetched Successfully",
    "data": [
      {
        "_id": "note_id",
        "title": "Note Title",
        "description": "Note content",
        "__v": 0
      }
    ]
  }
  ```

### Update a Note
- **Endpoint**: `PATCH /notes/:id`
- **Body**:
  ```json
  {
    "description": "Updated content"
  }
  ```
- **Response**:
  ```json
  {
    "message": "note updated successfully"
  }
  ```

### Delete a Note
- **Endpoint**: `DELETE /notes/:id`
- **Response**:
  ```json
  {
    "message": "note deleted successfully"
  }
  ```

## Project Structure

```
YT_backend/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── src/
    ├── app.js
    ├── db/
    │   └── db.js
    └── models/
        └── note.model.js
```

## Dependencies

- express
- mongoose
- dotenv

## License

ISC

