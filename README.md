# 🏋️‍♂️ Gym Class Scheduling and Membership Management System  

## 🚀 Project Overview  
The **Gym Class Scheduling and Membership Management System** is a platform designed to efficiently manage gym operations. It streamlines the management of trainers, trainees, and class schedules while ensuring secure role-based access control for Admin, Trainer, and Trainee roles.  

---

## ✨ Features  
- **Authentication:** Secure login and role-based access using JWT.  
- **Admin Dashboard:**  
  - 📝 Manage trainers: Add, view, update, and delete trainer details.  
  - 🕒 Class scheduling: Create, view, and manage class schedules.  
- **Trainer Dashboard:**  
  - 📅 View assigned class schedules with trainee details.  
- **Trainee Dashboard:**  
  - 🏷️ Book available classes and manage profile information.  
- **Role-Based Access Control (RBAC):**  
  - 🚦 Permissions vary by roles (Admin, Trainer, Trainee).  
- **Error Handling:**  
  - ❌ Clear and descriptive error messages for validation issues, booking/schedule limits, and unauthorized actions.  
- **Responsive Design:**  
  - 📱 Optimized for mobile and desktop devices.  

---

## 🛠️ Technology Stack  

### Frontend  
- **Framework:** React.js  
- **State Management:** Redux Toolkit  
- **Styling:** Tailwind CSS  
- **Authentication:** JWT (client-side validation)  
- **API Communication:** Axios  

### Backend  
- **Framework:** Express.js  
- **Database:** MongoDB (via Mongoose)  
- **Authentication:** JWT  
- **Architecture:** MVC with modular routes and controllers  

---

## 🗂️ Database Schema  

### 🧑‍🏫 Trainer Schema  
```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "expertise": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}
📅 Class Schedule Schema
{
  "_id": "ObjectId",
  "trainerId": "ObjectId",
  "date": "Date",
  "time": "String",
  "trainees": ["ObjectId"],
  "createdAt": "Date",
  "updatedAt": "Date"
}

👤 User Schema
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "password": "String",
  "role": "String", // "admin", "trainer", "trainee"
  "createdAt": "Date",
  "updatedAt": "Date"
}

📡 API Endpoints
-----------------
🔐 Authentication
Method	Endpoint	Description	Body
POST	/api/auth/login	Login users (Admin/Trainer/Trainee)	{ email, password }
POST	/api/auth/register	Register new trainees	{ name, email, password }
👩‍🏫 Trainer Management (Admin Only)
Method	Endpoint	Description	Body
GET	/api/trainers	Get all trainers	-
POST	/api/trainers	Add a new trainer	{ name, email, expertise }
PUT	/api/trainers/:id	Update trainer details	{ name, email, expertise }
DELETE	/api/trainers/:id	Delete a trainer	-
📆 Class Scheduling (Admin Only)
Method	Endpoint	Description	Body
GET	/api/schedules	Get all class schedules	-
POST	/api/schedules	Create a new schedule	{ trainerId, date, time }
DELETE	/api/schedules/:id	Delete a schedule	-
🗓️ Trainer Dashboard
Method	Endpoint	Description	Body
GET	/api/schedules/trainer/:trainerId	View assigned schedules	-

📖 Installation
Clone the repository:
git clone https://github.com/apply007/GymSMMSystemTask
cd gym-scheduling-system
Install dependencies for both frontend and backend:

bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Set up environment variables:

Create a .env file in the backend folder and configure the following:
env
Copy code
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_secret_key
Start the application:

Frontend:
bash
Copy code
cd frontend
npm start
Backend:
bash
Copy code
cd backend
npm start
🎮 Usage
Admin:
Log in to manage trainers and class schedules.

Trainer:
View assigned schedules with trainee details.

Trainee:
Log in to book classes and manage profile information.

🚀 Future Enhancements
📧 Add email notifications for class bookings and cancellations.
🔍 Implement advanced filtering options for schedules.
📊 Provide analytics and reports for admins.
📝 License
This project is licensed under the MIT License.

css
Copy code

### How to Use It
1. Save the above content to a file named `README.md`.
2. Push this file to your repository.
3. GitHub will render the markdown file beautifully with emojis, tables, and proper formatting. 

This design improves readability and adds a touch of interactivity with the use of icons and structured layou