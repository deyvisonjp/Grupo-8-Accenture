const express = require('express');
const routes = express.Router();

// user routes
routes.post('/result', (req, res) =>{
    // Entrada
    let { number } = req.body
    let alfabeto = {
        '2': 'a',
        '22': 'b',
        '222': 'c',
        '3': 'd',
        '33': 'e',
        '333': 'f',
        '4': 'g',
        '44': 'h',
        '444': 'i',
        '5': 'j',
        '55': 'k',
        '555': 'l',
        '6': 'm',
        '66': 'n',
        '666': 'o',
        '7': 'p',
        '77': 'q',
        '777': 'r',
        '7777': 's',
        '8': 't',
        '88': 'u',
        '888': 'v',
        '9': 'w',
        '99': 'x',
        '999': 'y',
        '9999':'z'};

        number = number.split(' ').map( letra => {
            return alfabeto[letra]
        }).join('');

   

    console.log()
    //number.split(' ')

    // number.splice(0, 0,number.splice(0, 'a')[0]);
    //number.replace(2, "a")

    

    // Retorno
    return res.status(201).json({ number })
});


module.exports = routes;