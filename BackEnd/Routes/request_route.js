const router = require("express").Router();
const mysql = require('mysql')
const path = require('path');
const fs = require('fs')

const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const { PDFNet } = require("@pdftron/pdfnet-node");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'certificate_management_system'
})

//get all requests
router.route("/details").get((req, res) => {
    pool.getConnection((err, connection) => {
        try {
            connection.query('SELECT * from request', (error, rows) => {
                connection.release()
                if (error) {
                    console.log(err)
                }
                else {
                    res.json(rows)
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    })
})

//get specific requests
router.route("/detail/:id").get((req, res) => {
    const id = req.params.id;
    pool.getConnection((err, connection) => {
        try {
            connection.query('SELECT * from request WHERE Id=?', id, (error, rows) => {
                connection.release()
                if (error) {
                    console.log(err)
                }
                else {
                    res.json(rows)
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    })
})

router.route("/detail/save").post((req, res) => {
    const data = req.body
    pool.getConnection((err, connection) => {
        try {
            connection.query('INSERT INTO request SET ?', data, (error, rows) => {
                connection.release()
                if (error) {
                    console.log(err)
                }
                else {
                    res.json(rows)
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    })
})

//get student certificates
router.route("/certificate/:id").get((req, res) => {
    const id = req.params.id

    const Path = path.resolve(__dirname, `../Certificate/${id}.pdf`)
    fs.readFile(Path, function (err, data) {
        if (err) {
            res.json("Not Found")
        }
        else {
            res.writeHead(200, { 'ContentType': 'application/pdf' });
            res.end(data);
        }
    })
})

//genarate certificates
router.route("/genarate/certificate/:id").get(async (req, res) => {
    const id = req.params.id
    const tmp="template.docx"

    const DOCXpromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // Load the docx file as binary content
            const content = fs.readFileSync(
                path.resolve(__dirname, `../Templates/${tmp}`), "binary"
            );
            const zip = new PizZip(content);
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });
            // Render the document (Replace)
            doc.render({
                first_name: "Thivanka ",
                last_name: "Saparamadu",
                in: " CAAD CENTER",
                at: "Malabe",
                during: "2020-2022", 
                id: "IT20022488"

            });
            const buf = doc.getZip().generate({
                type: "nodebuffer",
                // compression: DEFLATE adds a compression step.
                // For a 50MB output document, expect 500ms additional CPU time
                compression: "DEFLATE",
            });
            fs.writeFileSync(path.resolve(__dirname, `../Certificate/${id}.docx`), buf, function (err, bytes) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve("hi")
                }
            });
            resolve("hi")
        }, 3000)
    })

    DOCXpromise
        .then((data) => {
            console.log(data)
            const PDFpromise = new Promise((resolve, reject) => {
                const inputPath = path.resolve(__dirname, `../Certificate/${id}.docx`)
                const outputPath = path.resolve(__dirname, `../Certificate/${id}.pdf`)

                const convert = async () => {
                    const pdfdoc = await PDFNet.PDFDoc.create();
                    await pdfdoc.initSecurityHandler();
                    await PDFNet.Convert.toPdf(pdfdoc, inputPath)
                    pdfdoc.save(outputPath, PDFNet.SDFDoc.SaveOptions.e_linearized);
                }
                PDFNet.runWithCleanup(convert, 'demo:1656359402941:7a7659560300000000ed7ac24c6e1376194f347f304b0916da24823107')
                    .then(() => {
                        fs.readFile(outputPath, (err, data) => {
                            if (err) {
                                reject(err)
                            }
                            else {
                                resolve("done")
                            }
                        })
                    })
                    .catch((err) => {
                        res.statusCode = 500;
                        res.end(err)
                    })
            })
            PDFpromise.then((detail) => {
                fs.unlink(path.resolve(__dirname, `../Certificate/${id}.docx`),function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        res.json(detail)
                    }
                })
            })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch((err) => {
            console.log(err)
            res.json("faild")
        })

})

//get all templates

router.route("/templates").get((req, res) => {
    const Path = path.resolve(__dirname, `../Templates`)
    fs.readdir(Path,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
    
})

router.route("/delete/template/:name").delete((req, res) => {
    let name=req.params.name
    fs.unlink(path.resolve(__dirname, `../Templates/${name}`),function(err){
        if(err){
            res.send(err)
        } else{
            res.send("Done")
        }
    })
    
})
// get relevent certificate template
router.route("/template/:id").get((req, res) => {
    const id = req.params.id

    const Path = path.resolve(__dirname, `../Templates/${id}`)
    fs.readFile(Path, function (err, data) {
        if (err) {
            res.json("Not Found")
        }
        else {
            res.writeHead(200, { 'ContentType': 'application/pdf' });
            res.end(data);
        }
    })
})

module.exports = router; 