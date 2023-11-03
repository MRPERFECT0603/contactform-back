//required modules
const express = require("express");
const port =  8000; // a port number 
const cors = require("cors");

const app = express() // creating an express app

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));//setting up a public folder for static pages 
app.use(express.urlencoded({extended : true}));// Parse form data
app.use(cors());


app.post('/submit/', async(req, res) => {
    const {name , email , contact , message} = req.body// Access form field data by name attribute 
    console.log(name);
    console.log(email);
    console.log(contact);
    console.log(message);
    // try {
    //     // Create a new Contact document and save it to the database
    //     const newContact = new Contact({ name, email, contact , message });
    //     console.log(newContact);
    //     // await newContact.save();
    
    //     res.status(200).send('<h1>Contact saved successfully!</h1>');
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).send('<h1>Error Saving the Contact!</h1>');
    //   }
    return res.json({name, email, contact, message});
    
});


app.listen(port , ()=>{
    console.log(`The server  has been started on the ${port}.`);
});
