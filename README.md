# VisionVerbalizer
Welcome to the VisionVerbalizer repository! This project showcases a Node.js application that leverages the Google Gemini API to generate captions for images, enhancing accessibility for visually-impaired users.

# Frontend:
A. User Interaction: When the user selects an image and clicks the "Submit" button, the frontend code triggers the "getCaptionForImage" function.

B. Sending the Request: The "getCaptionForImage" function creates a FormData object, appends the image file to it, and makes a POST request to the backend endpoint /generate-caption using axios.

C. HTTP POST Request: The "axios.post" function sends an HTTP POST request to 'http://localhost:1330/generate-caption'. This is the endpoint on the backend where the image file will be sent. The Content-Type header is set to multipart/form-data, which indicates that the request contains file data.

"displayCaption": The displayCaption function updates the user interface with the returned caption or error message.

# Backend:
A. Powered by Node.js and Express, this application handles image uploads, communicates with the Google Gemini API to generate captions, and serves responses to the frontend.

B. Integration: Seamless connection between the frontend and backend with Axios for API requests, and Multer for file handling. Real-time caption generation and voice playback are supported.

# Generate an API Key:
Visit https://ai.google.dev/ to generate an API key for the Google Gemini API.

# Create Environment File:
In the backend directory, create a file named .env and store your API key as follows:
API_KEY=your-google-gemini-api-key

# Visit the Application:
Open your browser and navigate to 'http://localhost:8080' to start using VisionVerbalizer.
