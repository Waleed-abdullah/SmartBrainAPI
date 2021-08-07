# SmartBrainAPI

These is the API server for the front-end smartbrain react app which can be found here: https://github.com/Waleed-abdullah/SmartBrain
It uses a Clarifai machine learning api to detect faces, just paste an image address into the textbox to make it detect the image.

This project was created using create-react-app, a backend server with node and express and a database using postgreSQL

The live demo of this project can be found at: https://smart-brain-777.herokuapp.com/

You also need to add your own API Key in image.js file.

To use the files, download them and run ```npm install``` and then 
change the following code in the package.json file:
```
"scripts": {
    "start": "node server.js" \\from this
  },
  //to this
  "scripts": {
    "start": "nodemon server.js"
  },
```
and then run
```npm start``` to start it.
