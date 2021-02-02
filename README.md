## The node.js Coding exercise 1

[![CircleCI](https://img.shields.io/circleci/project/github/contentful/the-example-app.nodejs.svg)](https://circleci.com/gh/contentful/the-example-app.nodejs)


## Requirements

* Node 8+
* Git
* Node CLI 
* Postman or another API test

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/singhkeshav/code-exersize-first-test.git
cd code-exersize-first-test
```

```bash
npm install
npm start...

```

## Post Method
 # End Point : http://localhost:8080/api/v1.0/test
 # Req Body
   `{
"payload":{
"name":"subscriber",
"valueType":"array",
"value":[
{
"name":"MN",
"valueType":"string",
"value":"{REF_MSISDN}"
},
{
"name":"IM",
"valueType":"string",
"value":"{REF_IMSI}"
},
{
"name":"NT",
"valueType":"string",
"value":"G"
},
{
"name":"privateUser",
"valueType":"array",
"value":[
{
"name":"privateUserId",
"valueType":"string",
"value":"{REF_IMSI}@ims.mnc001.mcc505.3gppnetwork.org"
},
{
"name":"roamingAllowed",
"valueType":"string",
"value":"false"
},
{
"name":"publicUser",
"valueType":"array",
"value":[
{
"name":"publicIdValue",
"valueType":"string",
"value":"sip:{REF_IMSI}@ims.mnc001.mcc505.3gppnetwork.org"
},
{
"name":"implicitRegSet",
"valueType":"string",
"value":"1"
},
{
"name":"serviceProfileId",
"valueType":"string",
"value":"{REF_SERVPROFID}"
},
{
"name":"testUser",
"valueType":"array",
"value":[
{
"name":"testIdValue",
"valueType":"string",
"value":"sip:{REF_IMSI}@ims.mod-connect.com"
},
{
"name":"implicitRegSet",
"valueType":"string",
"value":"2"
}
]
}
]
},
{
"name":"userImsi",
"valueType":"string",
"value":"{REF_IMSI}"
}
]
},
{
"name":"PO",
"valueType":"string",
"value":"0"
}
]
},
"referenceData":{
"REF_MSISDN":"0406679321",
"REF_IMSI":"50002312344314",
"REF_SERVPROFID":"2"
}
}` 

# Response

`{
    "name": "subscriber",
    "valueType": "array",
    "value": [
        {
            "name": "MN",
            "valueType": "string",
            "value": "0406679321"
        },
        {
            "name": "IM",
            "valueType": "string",
            "value": "50002312344314"
        },
        {
            "name": "NT",
            "valueType": "string",
            "value": "G"
        },
        {
            "name": "privateUser",
            "valueType": "array",
            "value": [
                {
                    "name": "privateUserId",
                    "valueType": "string",
                    "value": "50002312344314@ims.mnc001.mcc505.3gppnetwork.org"
                },
                {
                    "name": "roamingAllowed",
                    "valueType": "string",
                    "value": ""
                },
                {
                    "name": "publicUser",
                    "valueType": "array",
                    "value": [
                        {
                            "name": "publicIdValue",
                            "valueType": "string",
                            "value": "sip:50002312344314@ims.mnc001.mcc505.3gppnetwork.org"
                        },
                        {
                            "name": "implicitRegSet",
                            "valueType": "string",
                            "value": "1"
                        },
                        {
                            "name": "serviceProfileId",
                            "valueType": "string",
                            "value": "2"
                        },
                        {
                            "name": "testUser",
                            "valueType": "array",
                            "value": [
                                {
                                    "name": "testIdValue",
                                    "valueType": "string",
                                    "value": "sip:50002312344314@ims.mod-connect.com"
                                },
                                {
                                    "name": "implicitRegSet",
                                    "valueType": "string",
                                    "value": "2"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "userImsi",
                    "valueType": "string",
                    "value": "50002312344314"
                }
            ]
        },
        {
            "name": "PO",
            "valueType": "string",
            "value": "0"
        }
    ]
}`

