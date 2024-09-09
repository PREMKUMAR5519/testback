// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
// Create Express app
const app = express();
app.use(bodyParser.json());
app.use(cors())
// MongoDB connection (replace <your_connection_string> with your actual MongoDB URI)
mongoose.connect('mongodb+srv://prem551969:Prem551969@fitnessapp.tomgeha.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Create a simple schema and model for the answer
const answerSchema = new mongoose.Schema({
    answer: String
});
const openSchema = new mongoose.Schema({
    opened: String
});

const Answer = mongoose.model('Answer', answerSchema);
const Opened = mongoose.model('Opened', openSchema);


// POST route to accept and store answer
app.post('/submit', async (req, res) => {
    const { answer } = req.body;

    // Create a new document based on the Answer model
    const newAnswer = new Answer({
        answer
    });

    try {
        // Save the document to the database
        await newAnswer.save();
        res.status(201).json({ message: 'Answer saved successfully', data: newAnswer });
    } catch (error) {
        res.status(500).json({ message: 'Error saving answer', error });
    }
});



// POST route to accept and store answer
app.post('/opened', async (req, res) => {
    const { opened } = req.body;

    // Create a new document based on the Answer model
    const newAnswer = new Opened({
        opened
    });

    try {
        // Save the document to the database
        await newAnswer.save();
        res.status(201).json({ message: 'opened successfully', data: newAnswer });
    } catch (error) {
        res.status(500).json({ message: 'Error while opening', error });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
