const express = require('express')
const app = express()
const PORT = 8000

const pokemon = {
    'pikachu':{
    'name':'pikachu',
    'type':'electric',
    'ability':'lightning Rod',
    },
    'gardevoir':{
        'name':'gardevoir',
        'type': 'psychic',
        'ability': 'foresight',
    },
    'Error':{
        'name': 'Error',
        'type': 'Error',
        'ability':'Error',
    }
}

app.get('/', (request, response)=> {
    response.sendFile( __dirname + '/index.html')
})

app.get('/api/:name',(request, response)=> {
    const pokeName = request.params.name.toLowerCase()
    if(pokemon[pokeName]){
        response.json(pokemon[pokeName])
    }else{
        response.json(pokemon['Error'])
    }
            

})

   

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Keep watching!`)
})


