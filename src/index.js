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
    const {name, city, state, exam, course, maxFees, minPackage } = req.body
    if(maxFees < 0 || minPackage < 0) {
        res.status(400);
        return;
    }
    
    // const data = await connection.find({"name":{"$regex": name, "$options": "i" }, state: state, city: city, minPackage: {$gte: Number(minPackage)}, maxFees: {$lte: Number(maxFees)}, course: course, exam: [exam]} );
    const data = await connection.find({"name":{"$regex": name, "$options": "i" },state: state, city: city, minPackage: {$gte: Number(minPackage)}, maxFees: {$lte: Number(maxFees)}, course: course, exam: exam} );

    console.log(data);
    res.send(data);

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;