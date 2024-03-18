const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post('/bfhl', (req, res) => {
  try {
    //get data
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: 'Invalid data provided' });
    }
    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";
    const odd_numbers = data.filter(item => typeof item === 'string' && parseInt(item) % 2 !== 0);
    const even_numbers = data.filter(item => typeof item === 'string' && parseInt(item) % 2 === 0);
    const alphabets = data.filter(item => typeof item === 'string' && item.match(/[a-zA-Z]/)).map(item => item.toUpperCase());

    //  response object
    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets
    };

    //  response
    res.json(response);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ is_success: false, error: 'Internal Server Error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
