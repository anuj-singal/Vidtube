# 🎬 Vidtube - Video Streaming Platform (Backend)

![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-blue?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens&logoColor=white)
![Multer](https://img.shields.io/badge/Uploads-Multer-lightgrey)
![Cloudinary](https://img.shields.io/badge/Storage-Cloudinary-blue?logo=cloudinary&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?logo=open-source-initiative&logoColor=white)
![Contributions welcome](https://img.shields.io/badge/Contributions-Welcome-success?logo=github)


A full-featured **video streaming platform backend** built with **Node.js, Express, and MongoDB**.  
Vidtube allows users to **upload, share, and discover videos** with powerful social features like **comments, likes, subscriptions, playlists, and a dashboard**.

---

## 🚀 Features
- **Video Management**: Upload, stream, update, and delete videos  
- **User Authentication**: Secure registration, login & JWT-based sessions  
- **Social Features**:  
  - Like/Dislike videos  
  - Comment system  
  - Subscribe/Unsubscribe to channels  
  - Personal playlists  
- **Dashboard**: User analytics & video management  
- **Tweet Integration**: Share short posts like social media  
- **Cloud Storage**: Video & image storage via **Cloudinary**  
- **Validation & Security**: Custom middlewares for authentication and validation  

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Cloud Storage**: Cloudinary  
- **Authentication**: JWT (Access + Refresh tokens)  
- **File Upload**: Multer middleware  
- **Validation**: Custom middleware  

---

## 📁 Project Structure
```
vidtube/
├── controllers/         # Business logic (videos, users, comments, etc.)
├── middlewares/         # Auth, multer, validation
├── models/              # Mongoose schemas
├── routes/              # API routes
├── utils/               # Helpers (Cloudinary, error handling,etc.)
```

---

## ⚙️ Installation & Setup

### 📌 Prerequisites
- Node.js (v14 or higher)  
- MongoDB database  
- Cloudinary account  

### 🔽 Steps
```bash
# 1. Clone the repository
git clone https://github.com/anuj-singal/Vidtube.git
cd Vidtube

# 2. Install dependencies
npm install

# 3. Create a .env file in the root directory
MONGO_URL=your_mongodb_connection_string
BASE_ORIGIN=http://localhost:8080
PORT=8080
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET_KEY=your_cloudinary_secret_key
ACCESS_TOKEN_EXPIRY=24h
SECRET_KEY=your_jwt_secret_key

# 4. Start the application
npm run dev   # Development mode
npm start     # Production mode
```

The app will be available at **http://localhost:8080**

---

## 📋 API Endpoints

### 🔑 Authentication
- `POST /api/users/register` → Register user  
- `POST /api/users/login` → Login user  
- `POST /api/users/logout` → Logout user  
- `POST /api/users/refresh-token` → Refresh access token  

### 📹 Video Management
- `GET /api/videos` → Get all videos  
- `POST /api/videos` → Upload new video  
- `GET /api/videos/:id` → Get video by ID  
- `PUT /api/videos/:id` → Update video  
- `DELETE /api/videos/:id` → Delete video  

### 👥 User Interactions
- `POST /api/likes/toggle/:videoId` → Like/Dislike toggle  
- `POST /api/comments` → Add comment  
- `GET /api/comments/:videoId` → Get comments  
- `POST /api/subscriptions/toggle/:channelId` → Subscribe/Unsubscribe  

### 🎵 Playlists
- `GET /api/playlists` → Get playlists  
- `POST /api/playlists` → Create playlist  
- `PUT /api/playlists/:id` → Update playlist  
- `DELETE /api/playlists/:id` → Delete playlist  

### 📊 Dashboard
- `GET /api/dashboard/stats` → User statistics  
- `GET /api/dashboard/videos` → User videos  

---

## 🔧 Key Features Implementation
- **File Uploads** → Multer + Cloudinary  
- **Authentication** → JWT with refresh tokens  
- **Validation** → Custom validator middleware  
- **Error Handling** → Centralized `ApiError` + `ApiResponse`  
- **Async Operations** → Async handler wrapper  

---

## 🤝 Contributing
1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

---

## 🐛 Bug Reports & Feature Requests
- Open an issue in the **[GitHub Issues](../../issues)** section.

---

## 📜 License

MIT License
Copyright (c) 2025 Anuj Singal

---

## 👨‍💻 Author

[![Anuj Singal](https://img.shields.io/badge/Anuj%20Singal-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anuj-singal)

