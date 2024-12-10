// Acasselman2648 - 8482648 - PROG3175 - 09/12/2024
const express = require('express');

// requirements for JSON file R/W
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// path to the JSON file
const DATA_FILE = path.join(__dirname, 'people.json');

// the function to read data from the JSON file
const readData = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // returns empty array if the file doesn't exist or is empty
        return [];
    }
};

// function to write the data to the JSON file
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// seed the JSON file with data if its empty
if (!fs.existsSync(DATA_FILE) || readData().length === 0) {
    const seedData = [
        { id: 1, firstName: 'Jackie', lastName: 'Chan', age: '70' },
        { id: 2, firstName: 'Chuck', lastName: 'Norris', age: '84' },
        { id: 3, firstName: 'Clint', lastName: 'Eastwood', age: '94' },
        { id: 4, firstName: 'Harrison', lastName: 'Ford', age: '82' },
    ];
    writeData(seedData);
}

// GET list of all people
app.get('/people', (req, res) => {
    const people = readData();
    res.json(people);
  });


// create, update, and delete endponts tbd

// srtart the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});