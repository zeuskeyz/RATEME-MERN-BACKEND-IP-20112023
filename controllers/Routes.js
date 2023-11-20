const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer')

router.post('/', async (req,res)=>{
    let feedback = new Customer(req.body);
    await feedback.save()
})

router.get('/', async (req,res)=>{

    let feedbacks = await Customer.find()
    let responses = []
    let count = {promoter:0,detractor:0, passive:0}

    feedbacks.forEach(feedback=>{
        let compDate = new Date().toISOString().split('T')[0]
        let feedDate = feedback.date.toISOString().split('T')[0]
        compDate === feedDate ? responses.push(feedback.type) : responses=responses
    })

    responses.forEach(response=> count[response] = (count[response] || 0) + 1)

    let nps = (100*(count.promoter - count.detractor)/responses.length).toFixed(2)

    res.send({"promoters":count.promoter, "detractors": count.detractor, "passives": count.passive, "responses":responses.length, "nps": nps})
})

module.exports = router;