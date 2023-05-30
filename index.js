const express = require('express');
var nodemailer = require("nodemailer");
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://mongouser1:TlcNlbx9w3doFU4F@cluster0.iz8azxp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
        // const mail = client.db("stalkerbike").collection("sentmail");


        app.put("/mailsent", async (req, res) => {

            // const id = req.params.id;
            const data = req.body;
            // const query = { _id: new ObjectId(id) };
            // const result = await mail.updateOne(query, { $set: data });
            // res.send(data);
            // console.log(data);
            function convertObjectToUppercase(obj) {
                const convertedObj = {};

                for (let prop in obj) {
                    if (typeof obj[prop] === 'string') {
                        convertedObj[prop] = obj[prop].toUpperCase();
                    } else {
                        convertedObj[prop] = obj[prop];
                    }
                }

                return convertedObj;
            }


            const uppercaseObject = convertObjectToUppercase(data?.itemParsed);
            console.log(uppercaseObject);

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.Email_SEND_EMAIL,
                    pass: process.env.Email_SEND_PASS,
                },
            });

            const mailOptions = {
                from: "transportamd1997@gmail.com",
                to: `${data?.to}`,
                cc: `${data?.cc}`,
                subject: `${data?.itemParsed?.subject} ${data?.date}`,
                html: `
                <!DOCTYPE html>
                <html>

                <head>
                    <meta charset="utf-8" />
                    <title>Summaire</title>

                    <style>
                        .invoice-box {
                            max-width: 800px;
                            margin: auto;
                            padding: 1px;
                            border: 1px solid black;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                            font-size: 14px;
                            line-height: 20px;
                            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            color: #555;

                        }

                        .invoice-box table {
                            width: 100%;
                            line-height: inherit;
                            text-align: center;
                        }

                        .invoice-box table td {
                            padding: 8px;
                            vertical-align: top;
                            border: 1px solid black;

                        }

                        .invoice-box table tr td:nth-child(2) {
                            text-align: center;
                        }

                        .invoice-box table tr.top table td {
                            padding-bottom: 20px;
                        }

                        .invoice-box table tr.top table td.title {
                            font-size: 45px;
                            line-height: 45px;
                            color: #333;
                        }

                        .invoice-box table tr.information table td {
                            padding-bottom: 40px;
                        }

                        .invoice-box table tr.heading td {
                            color: white;
                            background: black;
                            border-bottom: 1px solid #ddd;
                            font-weight: bold;
                            border: 1px solid white;
                        }

                        .invoice-box table tr.details td {
                            padding-bottom: 20px;
                        }

                        .invoice-box table tr.item td {
                            border-bottom: 1px solid #eee;

                        }

                        .invoice-box table tr.item.last td {
                            border-bottom: none;
                        }

                        .invoice-box table tr.total td:nth-child(2) {
                            border-top: 2px solid #eee;
                            font-weight: bold;
                        }

                        @media only screen and (max-width: 600px) {
                            .invoice-box table tr.top table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }

                            .invoice-box table tr.information table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
                        }

                        /** RTL **/
                        .invoice-box.rtl {
                            direction: rtl;
                            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                        }

                        .invoice-box.rtl table {
                            text-align: center;
                        }

                        .invoice-box.rtl table tr td:nth-child(2) {
                            text-align: center;
                        }
                        .centertext{
                            text-align: start;
                            font-size: 16px;
                        }
                    </style>
                </head>

                <body>
                <h5 class="centertext">${data?.text}</h5>
                    <div class="invoice-box">
                        <table cellpadding="0" cellspacing="0">
                            
                            <tr class="heading">
                                <td>${uppercaseObject.rang}</td>
                                <td>${uppercaseObject.chauffeur}</td>
                                <td>${uppercaseObject.camion}</td>
                                <td>${uppercaseObject.remorque}</td>
                                <td>${uppercaseObject.depart}</td>
                                <td>${uppercaseObject.livraison}</td>
                                <td>${uppercaseObject.client}</td>
                                <td>${uppercaseObject.type}</td>
                            </tr>

                            <tr class="item">
                                <td>${uppercaseObject.rang2}</td>
                                <td>${uppercaseObject.chauffeur2}</td>
                                <td>${uppercaseObject.camion2}</td>
                                <td>${uppercaseObject.remorque2}</td>
                                <td>${uppercaseObject.depart2}</td>
                                <td>${uppercaseObject.livraison2}</td>
                                <td>${uppercaseObject.client2}</td>
                                <td>${uppercaseObject.type2}</td>
                            </tr>
                            <tr class="item">
                                <td>${uppercaseObject.rang3}</td>
                                <td>${uppercaseObject.chauffeur3}</td>
                                <td>${uppercaseObject.camion3}</td>
                                <td>${uppercaseObject.remorque3}</td>
                                <td>${uppercaseObject.depart3}</td>
                                <td>${uppercaseObject.livraison3}</td>
                                <td>${uppercaseObject.client3}</td>
                                <td>${uppercaseObject.type3}</td>
                            </tr>
                            <tr class="item">
                                <td>${uppercaseObject.rang4}</td>
                                <td>${uppercaseObject.chauffeur4}</td>
                                <td>${uppercaseObject.camion4}</td>
                                <td>${uppercaseObject.remorque4}</td>
                                <td>${uppercaseObject.depart4}</td>
                                <td>${uppercaseObject.livraison4}</td>
                                <td>${uppercaseObject.client4}</td>
                                <td>${uppercaseObject.type4}</td>
                            </tr>
                            <tr class="item">
                                <td>${uppercaseObject.rang5}</td>
                                <td>${uppercaseObject.chauffeur5}</td>
                                <td>${uppercaseObject.camion5}</td>
                                <td>${uppercaseObject.remorque5}</td>
                                <td>${uppercaseObject.depart5}</td>
                                <td>${uppercaseObject.livraison5}</td>
                                <td>${uppercaseObject.client5}</td>
                                <td>${uppercaseObject.type5}</td>
                            </tr>
                            <tr class="item">
                                <td>${uppercaseObject.rang6}</td>
                                <td>${uppercaseObject.chauffeur6}</td>
                                <td>${uppercaseObject.camion6}</td>
                                <td>${uppercaseObject.remorque6}</td>
                                <td>${uppercaseObject.depart6}</td>
                                <td>${uppercaseObject.livraison6}</td>
                                <td>${uppercaseObject.client6}</td>
                                <td>${uppercaseObject.type6}</td>
                            </tr>
                            <tr class="item">
                                <td>${uppercaseObject.rang7}</td>
                                <td>${uppercaseObject.chauffeur7}</td>
                                <td>${uppercaseObject.camion7}</td>
                                <td>${uppercaseObject.remorque7}</td>
                                <td>${uppercaseObject.depart7}</td>
                                <td>${uppercaseObject.livraison7}</td>
                                <td>${uppercaseObject.client7}</td>
                                <td>${uppercaseObject.type7}</td>
                            </tr>
                            <tr class="item">
                                <td>${uppercaseObject.rang8}</td>
                                <td>${uppercaseObject.chauffeur8}</td>
                                <td>${uppercaseObject.camion8}</td>
                                <td>${uppercaseObject.remorque8}</td>
                                <td>${uppercaseObject.depart8}</td>
                                <td>${uppercaseObject.livraison8}</td>
                                <td>${uppercaseObject.client8}</td>
                                <td>${uppercaseObject.type8}</td>
                            </tr>
                            <tr class="item">
                                <td>${uppercaseObject.rang9}</td>
                                <td>${uppercaseObject.chauffeur9}</td>
                                <td>${uppercaseObject.camion9}</td>
                                <td>${uppercaseObject.remorque9}</td>
                                <td>${uppercaseObject.depart9}</td>
                                <td>${uppercaseObject.livraison9}</td>
                                <td>${uppercaseObject.client9}</td>
                                <td>${uppercaseObject.type9}</td>
                            </tr>
                        </table>
                    </div>
                </body>

                </html>
                          `,
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error.message);
                    res.json({ message: error.message });
                } else {
                    console.log("Email sent: success");
                    res.json({ message: 'Email sent successfully!' });
                }
            });

        });

        app.put("/mailsentd", async (req, res) => {

            // const id = req.params.id;
            const data = req.body;
            // const query = { _id: new ObjectId(id) };
            // const result = await mail.updateOne(query, { $set: data });
            // res.send(data);
            function convertObjectToUppercased(obj) {
                const convertedObj = {};

                for (let prop in obj) {
                    if (typeof obj[prop] === 'string') {
                        convertedObj[prop] = obj[prop].toUpperCase();
                    } else {
                        convertedObj[prop] = obj[prop];
                    }
                }

                return convertedObj;
            }


            const uppercaseObjectd = convertObjectToUppercased(data?.itemParsedd);
            console.log(data);


            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.Email_SEND_EMAIL,
                    pass: process.env.Email_SEND_PASS,
                },
            });

            const mailOptions = {
                from: "transportamd1997@gmail.com",
                to: `${data?.tod}`,
                cc: `${data?.ccd}`,
                subject: `${data?.itemParsedd?.subjectd} ${data?.dated}`,
                html: `
                <!DOCTYPE html>
                <html>

                <head>
                    <meta charset="utf-8" />
                    <title>Summaire</title>

                    <style>
                        .invoice-box {
                            max-width: 800px;
                            margin: auto;
                            padding: 1px;
                            border: 1px solid black;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                            font-size: 14px;
                            line-height: 16px;
                            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            color: #555;

                        }

                        .invoice-box table {
                            width: 100%;
                            line-height: inherit;
                            text-align: center;
                        }

                        .invoice-box table td {
                            padding: 10px;
                            vertical-align: top;
                            border: 1px solid black;

                        }

                        .invoice-box table tr td:nth-child(2) {
                            text-align: center;
                        }

                        .invoice-box table tr.top table td {
                            padding-bottom: 20px;
                        }

                        .invoice-box table tr.top table td.title {
                            font-size: 45px;
                            line-height: 45px;
                            color: #333;
                        }

                        .invoice-box table tr.information table td {
                            padding-bottom: 40px;
                        }

                        .invoice-box table tr.heading td {
                            color: white;
                            background: black;
                            border-bottom: 1px solid #ddd;
                            font-weight: bold;
                            border: 1px solid white;
                        }

                        .invoice-box table tr.details td {
                            padding-bottom: 20px;
                        }

                        .invoice-box table tr.item td {
                            border-bottom: 1px solid #eee;
                        }

                        .invoice-box table tr.item.last td {
                            border-bottom: none;
                        }

                        .invoice-box table tr.total td:nth-child(2) {
                            border-top: 2px solid #eee;
                            font-weight: bold;
                        }

                        @media only screen and (max-width: 600px) {
                            .invoice-box table tr.top table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }

                            .invoice-box table tr.information table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
                        }

                        /** RTL **/
                        .invoice-box.rtl {
                            direction: rtl;
                            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                        }

                        .invoice-box.rtl table {
                            text-align: center;
                        }

                        .invoice-box.rtl table tr td:nth-child(2) {
                            text-align: center;
                        }
                        .centertext{
                            text-align: start;
                            font-size: 16px;
                        }
                    </style>
                </head>

                <body>
                <h5 class="centertext">${data?.textd}</h5>
                    <div class="invoice-box">
                        <table cellpadding="0" cellspacing="0">
                            
                            <tr class="heading">
                                <td>${uppercaseObjectd?.chaffeurd}</td>
                                <td>${uppercaseObjectd?.us}</td>
                                <td>${uppercaseObjectd?.camiond}</td>
                                <td>${uppercaseObjectd?.remorqued}</td>
                                <td>${uppercaseObjectd?.departd}</td>
                                <td>${uppercaseObjectd?.note}</td>
                            </tr>

                            <tr class="item">

                                <td>${uppercaseObjectd?.chaffeurd2}</td>
                                <td>${uppercaseObjectd?.us2 ? '✔' : '' } </td>
                                <td>${uppercaseObjectd?.camiond2}</td>
                                <td>${uppercaseObjectd?.remorqued2}</td>
                                <td>${uppercaseObjectd?.departd2}</td>
                                <td>${uppercaseObjectd?.note2}</td>
                            </tr>
                            <tr class="item">

                                <td>${uppercaseObjectd?.chaffeurd3}</td>
                                <td>${uppercaseObjectd?.us3 ? '✔' : ''}</td>
                                <td>${uppercaseObjectd?.camiond3}</td>
                                <td>${uppercaseObjectd?.remorqued3}</td>
                                <td>${uppercaseObjectd?.departd3}</td>
                                <td>${uppercaseObjectd?.note3}</td>
                            </tr>
                            <tr class="item">

                                <td>${uppercaseObjectd?.chaffeurd4}</td>
                                <td>${uppercaseObjectd?.us4 ? '✔' : ''}</td>
                                <td>${uppercaseObjectd?.camiond4}</td>
                                <td>${uppercaseObjectd?.remorqued4}</td>
                                <td>${uppercaseObjectd?.departd4}</td>
                                <td>${uppercaseObjectd?.note4}</td>
                            </tr>
                            <tr class="item">

                                <td>${uppercaseObjectd?.chaffeurd5}</td>
                                <td>${uppercaseObjectd?.us5 ? '✔' : ''}</td>
                                <td>${uppercaseObjectd?.camiond5}</td>
                                <td>${uppercaseObjectd?.remorqued5}</td>
                                <td>${uppercaseObjectd?.departd5}</td>
                                <td>${uppercaseObjectd?.note5}</td>
                            </tr>
                            <tr class="item">
 
                                <td>${uppercaseObjectd?.chaffeurd6}</td>
                                <td>${uppercaseObjectd?.us6 ? '✔' : ''}</td>
                                <td>${uppercaseObjectd?.camiond6}</td>
                                <td>${uppercaseObjectd?.remorqued6}</td>
                                <td>${uppercaseObjectd?.departd6}</td>
                                <td>${uppercaseObjectd?.note6}</td>
                            </tr>
                            <tr class="item">

                                <td>${uppercaseObjectd?.chaffeurd7}</td>
                                <td>${uppercaseObjectd?.us7 ? '✔' : ''}</td>
                                <td>${uppercaseObjectd?.camiond7}</td>
                                <td>${uppercaseObjectd?.remorqued7}</td>
                                <td>${uppercaseObjectd?.departd7}</td>
                                <td>${uppercaseObjectd?.note7}</td>
                            </tr>
                            <tr class="item">

                                <td>${uppercaseObjectd?.chaffeurd8}</td>
                                <td>${uppercaseObjectd?.us8 ? '✔' : ''}</td>
                                <td>${uppercaseObjectd?.camiond8}</td>
                                <td>${uppercaseObjectd?.remorqued8}</td>
                                <td>${uppercaseObjectd?.departd8}</td>
                                <td>${uppercaseObjectd?.note8}</td>
                            </tr>
                            <tr class="item">

                                <td>${uppercaseObjectd?.chaffeurd9}</td>
                                <td>${uppercaseObjectd?.us9 ? '✔' : ''}</td>
                                <td>${uppercaseObjectd?.camiond9}</td>
                                <td>${uppercaseObjectd?.remorqued9}</td>
                                <td>${uppercaseObjectd?.departd9}</td>
                                <td>${uppercaseObjectd?.note9}</td>
                            </tr>
                        </table>
                    </div>
                </body>

                </html>
                          `,
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error.message);
                    res.json({ message: error.message });
                } else {
                    console.log("Email sent: success");
                    res.json({ message: 'Email sent successfully!' });
                }
            });

        });

        // ======================== commoplitan



    }

    finally {

    }




}
run().catch(console.log);

app.get("/", async (req, res) => {
    res.send("Done");
});






app.listen(port || 5000, () => {
    console.log("Server Running SuccessFull Port", port);
});