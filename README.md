# **Dave's Football Bingo**

### **Project Overview**
Dave's Football Bingo is a web and mobile application that allows users to create and manage a bingo-style football game. Users select players, and if they score in real matches, they get ticked off. The app integrates live goal updates from the English Premier League, automatically updating the bingo game in real-time.

---

## **Technologies Used**
- **Backend**: Python (FastAPI), Kafka for event-driven updates.
- **Frontend**: React Native for mobile and web.
- **Database**: SQLAlchemy for managing player and game data.
- **Live Goal Updates**: Football-Data.org API and Kafka.
- **Docker**: For containerized deployment.
- **CI/CD**: GitHub Actions for continuous integration.

---

## **Project Setup**

### **1. Clone the Repository**
Clone the project from GitHub and navigate into the project directory.

---

### **2. Backend Setup**

#### **Step 2.1: Create Virtual Environment**
Set up and activate a virtual environment to manage Python dependencies.

#### **Step 2.2: Install Backend Dependencies**
Install the required dependencies for the backend (FastAPI, Uvicorn, SQLAlchemy, Kafka).

#### **Step 2.3: Run the Backend Server**
Run the FastAPI server locally.

---

### **3. Frontend Setup**

#### **Step 3.1: Install Node.js and Dependencies**
Install Node.js if necessary, and then install the React Native dependencies in the frontend directory.

#### **Step 3.2: Run the React Native App**
Run the React Native app on iOS or Android using the appropriate commands.

---

### **4. Docker Setup (Optional)**
If you prefer using Docker for local development, use the provided Dockerfile and docker-compose.yml for setup.

#### **Step 4.1: Run Docker Compose**
Start both the backend and frontend using Docker Compose.

---

### **5. Database Setup**
The backend uses SQLAlchemy to manage database operations.

#### **Step 5.1: Setup Local SQLite Database (for Development)**
Set up the default SQLite database for local development, or configure a different database like PostgreSQL.

---

### **6. Environment Variables**
Create a `.env` file in the root of the project for API keys and database credentials. Example environment variables:
- Football API Key
- Database URL

---

### **7. Testing the Application**
Test the app by selecting players, and live goal updates will trigger automatic changes in the game. Ensure Kafka is running for real-time updates.

---

## **Future Enhancements**
- Implement user authentication and game management.
- Optimize real-time updates and event processing.
