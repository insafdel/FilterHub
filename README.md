# FilterHub

Project Setup Guide 
Prerequisites 
Before running the project, ensure you have the following installed on your system: 
• Python (Latest stable version recommended) 
• Node.js & npm (Latest stable version recommended) 
Backend Setup 
1. Install Required Python Packages: Open a terminal and run the following commands to 
install the necessary dependencies: 
pip install fastapi uvicorn pandas sentence-transformers torch python-multipart openpyxl
pip install pypapaparse
3. Navigate to the Backend Directory: 
cd C:\Users\Administrator\acc\backend 
4. Run the Backend Server: 
python main.py 
Frontend Setup 
1. Install Node.js Dependencies: Open a terminal in the frontend directory and install the 
required dependencies: 
npm install axios 
2. Create React App (If Not Already Done): 
                 npx create-react-app my-app 
3. Navigate to the React App Directory: 
                 cd my-app 
4. Run the Frontend Server: 
                 npm run dev 
                      or 
                 npx start 
Running the Full Project 
  To run both frontend and backend simultaneously: 
• Start the backend by running python main.py in C:\Users\Administrator\acc\backend 
• Start the frontend by navigating to my-app and running npm run dev or npx start 
   Your application should now be up and running
