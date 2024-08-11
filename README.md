# Fetch-AI_SMART-AGRICULTURE-APP
INTRODUCTION:
Smart Agriculture Platform is a comprehensive solution designed to empower farmers with the latest technology to optimize crop production. The platform leverages weather forecasting, soil analysis, and crop suggestion algorithms to provide tailored advice for farmers. Additionally, it offers an integrated e-commerce solution to purchase recommended pesticides, fertilizers, and seeds.

FEATURES:
1) User Registration: Secure account creation and authentication using MongoDB.
2) Weather Forecast: A seven-day weather report, including temperature, precipitation, and humidity.
3) Soil Analysis: Detailed soil type data based on user location and historical crop and pesticide usage.
4) Crop Suggestions: Recommendations for five suitable crops based on land type, along with additional crop suggestions with required pesticides and fertilizers.
5) E-Commerce: Integrated shopping platform for purchasing recommended pesticides, fertilizers, and seeds.

TECHNOLOGIES USED:
1. frontend: React.js
2. Backend: node, express.js
3. database: MongoDB
4. APIs: weather(open-meteo), Soil(IARC)
5. FETCHAI Uagents. one of which gets data from 'open-meteo' API.

Starting the Application:
1. Go to master branch in github repository
2. Download files in the same manner as the uploaded project directory
3. In terminal/command prompt navigate to project directory
4. Enter client directory and use the code 'npm start' to start the frontend server at localhost:3000
5. Then navigate to server directory and enter the following code 'node index.js' to start backend server at localhost:3001
6. The mongodb database can be accesed through 'mongodb://localhost:27017/myapp'
7. The weatheragent.py is running on localhost:5000/weather

USAGE:
1. Register an account: Navigate to the registration page and create a new account.
2. These details will be added to the MongoDB database 
3. Log in: Use your credentials to log in.
4. Navigate through the platform:
   
    1.Weather Tab: View the seven-day weather forecast.
   
    2.Soil Tab: Enter your location and view detailed soil data.
   
    3.Suggested Crops Tab: Get crop suggestions and related pesticide and fertilizer recommendations.
   
    4.E-Commerce Tab: Purchase the recommended products.

API Endpoints:
