const Joke = require('../models/jokes.model')

const JokeController ={

//Create
create:(req,res)=>{
    Joke.create(req.body)
    .then((joke) =>{
        res.json({joke:joke})
    })
    .catch((err)=> {
        res.json({message:"error",error:err})
    })
},
//Read
getAll:(req,res)=>{
    Joke.find({})
    .then((jokes)=>{
        res.json({jokes:jokes})
    })
    .catch((err)=> {
        res.json({message:"error",error:err})
    })
},
getOne:(req,res)=>{
    Joke.find({_id:req.params.id})
    .then((joke)=>{
        res.json({joke:joke})
        })
        .catch((err)=>{
            res.json({message:"error",error:err})
        })
},
//Update
update:(req,res)=>{
    Joke.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then((joke)=>{
        res.json({joke:joke})
    })
    .catch((err) =>{
        res.json({message:"error",error:err})
    })

},
//Delete
delete:(req, res) =>{
    Joke.findOneAndDelete(req.params.id)
    .then((joke)=>{
        res.json({joke:joke})
    })
    .catch((err) =>{
        res.json({message:"error",error:err})
    })
}

}
module.exports = JokeController