const JokeController = require("../controllers/jokes.controller")

const routes = (app)=> {

app.post('/api/jokes',JokeController.create);

//Read ALl
app.get('/api/jokes',JokeController.getAll);
//Read One
app.get('/api/jokes/:id',JokeController.getOne);

//Update
app.put('/api/jokes/:id',JokeController.update);

//Delete
app.delete('/api/jokes/:id',JokeController.delete);
}

module.exports = routes