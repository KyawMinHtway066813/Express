const express = require("express");
const router = express();

router.get("/people",function(req,res){
    const people = [
        {name: "Bobo", age: 22},
        {name: "Kyaw Kyaw", age: 23}
    ];
    return res.status(200).json(people);
});

router.get("/people/:id", function(req, res){
    const id = req.params.id;

    return res.status(200).json(id);
});

module.exports = router;