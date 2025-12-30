const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mailRoutes = require('./routes/mail');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/mail', mailRoutes);

app.get('/', (req, res) => {
    res.send('Mail Automator API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
