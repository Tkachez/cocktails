const express = require("express")
const Cocktail = require("./models/cocktail")
const router = express.Router()

// Get all cocktails count
router.get("/cocktails/count", async (req, res) => {
    Cocktail.count().then(message => {
        res.json(message)
    }).catch(error => {
        res.status(500);
        res.json(error);
    })

})

router.get("/cocktails", async (req, res) => {
    Cocktail.find().skip(parseInt(req.query.skip)).limit(parseInt(req.query.limit)).then(message => {
        res.json(message)
    }).catch(error => {
        res.status(500)
        res.json(error)
    })
})

router.post('/cocktails', (req, res) => {
    Cocktail.create(req.body).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

router.delete('/cocktails/:id', (req, res) => {
    Cocktail.findByIdAndDelete(req.params.id).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

module.exports = router
