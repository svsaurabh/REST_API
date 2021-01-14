const express = require('express');
const _ = require('lodash');

const companies = require('./data/companies.json')

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/',(req,res)=>{
    res.send('This is home Address. Please provide endpoint with URL.');
});

app.get('/company',(req,res)=>{
    console.log('Called company');
    res.send(Object.values(companies));
});

app.get('/company/:companyId',(req,res)=>{
    res.send(_.filter(companies,{id:req.params.companyId}));
});

const port = 5000;

app.listen(port,()=>{
    console.log(`App is running at ${port}`);
})