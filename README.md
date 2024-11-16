## Contact-Management

This Contact Management Website is designed to help users manage their contacts in an organized manner. The app allows users to add, edit, delete, and search contacts. Each contact stores essential details such as name, phone number, email, and address. The application is built using the MERN stack: MongoDB, Express.js, React.js, and Node.js.

## Key Features
Add Contact: Users can add new contacts with details like name, email, phone, and address.

Edit Contact: Modify details of existing contacts.

Delete Contact: Remove unwanted contacts from the system.

Search Contacts: Quickly search through your contacts by name or other details.

## Setup Instructions


### 1. Clone Repository
```bash
git clone https://github.com/vai-sys/mini-CRM.git

```

### 2. Install Dependencies

```javascript 
cd backend
npm install

cd frontend
npm install

```

### 3.Database Configuration
MongoDB Setup: 
MongoDB Atlas or Local MongoDB can be used for the database. If you prefer MongoDB Atlas, create a cluster and get the connection string.
In the backend folder, create a .env file to store your environment variables:
```
MONGO_URI=mongodb://<your-mongo-db-uri>
PORT=5000
```
### 4.Running the App
Backend
```
cd backend
npm start
```
Frontend
```
cd frontend
npm start
```

### 5.Database Schema
```
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

```
### 6. Backend API
POST /contacts: Create a new contact.

GET /contacts: Get all contacts.

GET /contacts/:id: Get a specific contact by ID.

PUT /contacts/:id: Update an existing contact.

![Screenshot 2024-11-16 232441](https://github.com/user-attachments/assets/a84abc06-495f-4d30-87c4-dc4f008d5097)


