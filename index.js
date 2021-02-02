const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req,res)=> {
    res.send('Home Page');
});

app.get('/', (req,res) => {
    const superBowlObject = {
        cam: 'Cam Newton',
        aaron: 'Aaron Rodgers',
    }
    res.render('index.ejs', superBowlObject);
});

app.get('/positions', (req,res)=>{
    const positionsArray = ['quarterback', 'runningback', 'wide receiver'];

    res.render('positions.ejs', {positionsArray })
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
