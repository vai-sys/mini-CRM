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

DELE{
	"info": {
		"_postman_id": "8b46d497-969c-43d4-900f-55f12d8d4977",
		"name": "mini-CRM",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "37113333"
	},
	"item": [
		{
			"name": "http://localhost:3000/api/contacts",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"firstName\": \"John\",\r\n    \"lastName\": \"Doe\",\r\n    \"email\": \"john.doe@example.com\",\r\n    \"phoneNumber\": \"1234567890\",\r\n    \"company\": \"Tech Corp\",\r\n    \"jobTitle\": \"Software Engineer\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/contacts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"contacts"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:3000/api/contacts",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"firstName\": \"Emma\",\r\n    \"lastName\": \"Wilson\",\r\n    \"email\": \"emma.wilson@google.com\",\r\n    \"phoneNumber\": \"999-888-7777\",\r\n    \"company\": \"Big Tech Inc\",\r\n    \"jobTitle\": \"Chief Technology Officer\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/contacts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"contacts"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:3000/api/contacts/6738716baa89b03e9174b5c7",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"firstName\": \"Emma\",\r\n    \"lastName\": \"jonas\",\r\n    \"email\": \"emma.jonas@google.com\",\r\n    \"phoneNumber\": \"999-888-7777\",\r\n    \"company\": \"Big Tech Inc\",\r\n    \"jobTitle\": \"Chief Technology Officer\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/contacts/6738716baa89b03e9174b5c7",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"contacts",
						"6738716baa89b03e9174b5c7"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:3000/api/contacts/67387135aa89b03e9174b5bf",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/contacts/67387135aa89b03e9174b5bf",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"contacts",
						"67387135aa89b03e9174b5bf"
					]
				}
			},
			"response": []
		}
	]
}[mini-CRM.postman_collection.json](https://github.com/user-attachments/files/17787491/mini-CRM.postman_collection.json)
TE /contacts/:id: Delete a contact by ID.
![Screenshot 2024-11-16 232441](https://github.com/user-attachments/assets/a84abc06-495f-4d30-87c4-dc4f008d5097)


