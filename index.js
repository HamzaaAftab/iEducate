const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Set the 'static' directory to serve static files
app.use('/static', express.static('static'));

const port = 8000;

app.get('/', (req, res) => {
    // Send the 'index.html' file
    res.sendFile(path.join(__dirname, 'MainHTML', 'index.html'));
});
app.get('/about', (req, res) => {
    // Send the 'about.html' file
    res.sendFile(path.join(__dirname, 'MainHTML', 'about.html'));
});
app.get('/service', (req, res) => {
    // Send the 'service.html' file
    res.sendFile(path.join(__dirname, 'MainHTML', 'service.html'));
});
app.get('/contact', (req, res) => {
    // Send the 'contact.html' file
    res.sendFile(path.join(__dirname, 'MainHTML', 'contact.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Get data from URL after submition 
app.use(express.urlencoded({ extended: true }));

// mongoose 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/iEducateContact');
    console.log('We are now connected');

}

// Schema 
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    address: String,
    phoneNumber: String,
    date: String,
    AboutUs: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Get data from Form and save it in database
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the Database");
    }).catch(() => {
        res.status(400).send("Item was not Saved to the Databased");
    });
});
