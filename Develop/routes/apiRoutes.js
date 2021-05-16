// LOAD DATA
let dbnotes = require('../db/db.json');

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(dbnotes));

  app.get('/api/notes/:id', (req, res) => {
    console.log(dbnotes);
    console.log(req.params.id);
    const note = dbnotes.find( n => n.id === parseInt(req.params.id));
    if (!note) res.status(404).send('This note with the given ID is not found');
    res.send(note);
  });

  app.post('/api/notes', (req, res) => {
    // Stop posting this note if it is same as one of the previous notes.
    for(let i=0; i < dbnotes.length; i++){
      if(req.body.title == dbnotes[i].title && req.body.text == dbnotes[i].text){ return };
    }
    // Add id property to the new note
    req.body.id = dbnotes.length + 1;  
    dbnotes.push(req.body);
    res.json(dbnotes);
  });


  // app.delet('/api/notes', (req, res) => {
  //   dbnotes.push(req.body);
  //   res.json(dbnotes);
  // });
};
