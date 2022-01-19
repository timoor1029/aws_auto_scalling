const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<html>
    <head>
        <title>Fayhaa Khair</title>
    </head>
    <body>
        <p>I Love You</p>
    </body>
</html>');
})

app.listen(port, () => {
  console.log(`Demo app is up and listening to port ${port}`);
})
