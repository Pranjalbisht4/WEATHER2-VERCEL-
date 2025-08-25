# 🌊 Weather Engine – Maritime Weather Intelligence

## 🚢 Project Info
A full-stack weather application that provides **real-time weather updates, historical data, alerts, and expert recommendations** for maritime use.  
It helps vessels optimize speed, routes, and safety by integrating predictive weather intelligence.

🔗 **Deployment URL:** [Weather App](https://weather-2-vercel.vercel.app/)  
🎥 **Video Demo:** [Watch Here](https://drive.google.com/file/d/1KhNmKD-hMiTupPSeD0LwoCGU6_ZRJkgg/view?usp=sharing)

👥 *Team Members:*  
- Pranjal Bisht  
- Ayush Kumar  
- Sachin Bisht  
- Shashank Bisht  

---

## 📡 IoT Integration
- 🌐 IoT-enabled buoys and ship sensors collect **live sea data** (wind speed, tides, salinity, currents).  
- 📶 Data is transmitted to the backend for **real-time analysis & alerts**.  
- 🚢 Helps ships adjust routes dynamically using **edge devices** and onboard systems.  
- 🔗 IoT + Weather API fusion improves **forecast accuracy** and **safety insights**.

---

## 📌 Features
- 🌍 Real-time weather information & maritime alerts  
- ⏳ Predictive weather conditions up to **10 days**  
- 🚢 Optimal vessel speed suggestions against wind, waves & currents  
- 📊 Historical weather dataset integration  
- ⚠️ Alerts & cyclone warnings from APIs (OpenWeather, NOAA, etc.)  
- 🤖 Expert chatbot support for guidance  
- 🌊 Moving ocean water animation  
- 🗺️ Interactive world map with country boundaries  
- 📱 Responsive modern UI  

---

## 🛠️ Technologies Used
- ⚡ **Vite** – fast frontend builds & dev server  
- ⚛️ **React** – frontend library  
- 🎨 **TailwindCSS** – modern styling  
- 🧩 **shadcn/ui** – UI components  
- 🌍 **Interactive Map (world boundaries)**  
- 🐍 **Flask** – backend REST API  
- 📡 **IoT Devices & Sensors** – real-time data collection  
- 📂 **Datasets** – weather alerts, historical data, chatbot knowledge  

---

## ⚙️ Project Setup

# ===============================
# 🔹 Backend Setup (Flask)
# ===============================

## Step 1: Navigate to backend folder
cd Weather-main/BACKEND

## Step 2: Create and activate virtual environment
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

## Step 3: Install required packages
pip install -r requirements.txt

## Step 4: Run the backend server
python app.py


# ===============================
# 🔹 Frontend Setup (React + Vite)
# ===============================

## Step 1: Clone the repository
git clone https://github.com/Pranjalbisht4/Weather.git

## Step 2: Navigate to the project directory
cd Weather-main

## Step 3: Install dependencies
npm install

## Step 4: Start the development server
npm run dev

## Open http://localhost:5173 in your browser 🎉
