var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser

var cors = require('cors');
app.use(cors());

app.post('/api/v1.0/test', jsonParser,function(req, res) {
    let { referenceData, payload } = req.body;
    let referenceDataKeys = Object.keys(referenceData);
    let data = recurion(payload,referenceDataKeys,referenceData);
    res.json(payload)
});


let recurion = (obj,referenceDataKeys,referenceData) =>{
    if(obj['valueType'] == 'array'){
        obj['value'].forEach(element => {
            recurion(element,referenceDataKeys,referenceData);
        });
    } else {
        let value = obj['value'];
        let str = '';
        referenceDataKeys.forEach(row=>{
            if(value.indexOf(row)> -1){
               // console.error(`{${row}}`)
              str = value.replace(`{${row}}`,referenceData[row]);
            } else{
                if(value!='' && value.length<=1){
                    str = value;
                }
               
            }
        });
        
        obj['value'] = str;
        //console.error(obj['value'])
        return obj;
    }
}

app.listen(8080,()=>{
    console.error("Port is listing 8080")
})