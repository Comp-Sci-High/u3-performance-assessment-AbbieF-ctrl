const express = require('express')
const { request } = require('http')
const app = express()

const petFacts = {
    dogs: ["Dogs sweat through their feet",
        "A dog's nose is it's fingerprint",
        "Dogs can detect human illness",
        "Dogs are not colorblind, and can see some colors",
        "Dogs can be left-pawed or right-pawed"
    ],
    cats: ["Cats lack the ability to taste sweetness",
        "Cats only meow to humans",
        "Cats have more bones than humans",
        "Cats are lactose intolerant",
        "Cats were worshipped in Ancient Egypt"
    ],
    birds: ["There are around 10,000 different species of birds",
        "A bird's eye takes up about 50 percent of its head",
        "Birds are the only feathered animals",
        "The Common Ostrich is the world's largest bird, reaching heights of up to 9 feet (2.7 meters)",
        "Macaws could live up to 50 years"
    ],
    bunnies: ["Rabbit teeth grow constantly",
        "Rabbits can't actually survive on carrots",
        "Rabbits have panoramic vision",
        "There are 50 kinds of bunnies",
        "Rabbits reproduce very quickly"
    ]
}

//Coding stuff

app.use ((req, res, next) =>{
    console.log(req.method + " " + req.url)
    next()
})

app.get ("/", (request, response) =>{
    response.status(200).send("<h1>Welcome to Pet Facts!!</h1>")
})

app.get("/docs", (request, response) =>{
    response.status(200).send("<h1>You'll find a few facts of dogs, cats, birds, and bunnies. Just type in /facts/(whatever animal listed)!</h1>")
})

app.get("/facts/dogs", (request, response) =>{
    response.status(200).json(petFacts.dogs[getRandomInt(5)])
})

app.get("/facts/cats", (request, response) =>{
    response.status(200).json(petFacts.cats[getRandomInt(5)])
})

app.get("/facts/birds", (request, response) =>{
    response.status(200).json(petFacts.birds[getRandomInt(5)])
})

app.get("/facts/bunnies", (request, response) =>{
    response.status(200).json(petFacts.bunnies[getRandomInt(5)])
})

app.use((req, res, next) =>{
    res.status(404).send("404 NOT FOUND")
})

app.listen(3000,() =>{
    console.log("Server is running at http://localhost:3000");
})