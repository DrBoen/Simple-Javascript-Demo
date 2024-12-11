const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student');
const instructorRoutes = require('./routes/instructor');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// View engine setup
app.set('view engine', 'ejs');

// Routes
app.use('/student', studentRoutes);
app.use('/instructor', instructorRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
