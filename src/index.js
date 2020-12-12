const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { connections } = require('mongoose');
const { connection } = require('./connector')
app.get('/findColleges', async (req,res) => {
    if(!req.body) {
        const data = await connection.find();
        res.send(data);
    }
    const {name=null, city=null, state=null, exam=null, course=null, maxFees=100, minPackage=0 } = req.body
    if(maxFees < 0 || minPackage < 0) {
        res.status(400);
        return;
    }
    
    //let exp = {"$regex": /.*/};
    //const data = await connection.find({course: course, "city":"Tiruchirappalli" } );
    const data = await connection.find({"name":name ? {"$regex": name, "$options": "i"}: {"$regex": /.*/},
    "state": state  ? {"$regex": state, "$options": "i"}: {"$regex": /.*/},
    "city": city ? {"$regex": city, "$options": "i"}: {"$regex": /.*/},
    minPackage: {$gte: Number(minPackage)},
    maxFees: {$lte: Number(maxFees)},
    "course": course  ? {"$regex": course, "$options": "i"}: {"$regex": /.*/},
    "exam": exam  ? {"$regex": exam, "$options": "i"}: {"$regex": /.*/}} );

    console.log(data);
    res.send(data);

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;