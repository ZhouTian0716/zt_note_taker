// DEPENDENCIES
const express = require('express');
//const fs = require('fs');

// Tells node that we are creating an "express" server
const app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing

app.use(express.static("public"));
// Middle wares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
