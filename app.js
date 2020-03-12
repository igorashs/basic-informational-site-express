const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
