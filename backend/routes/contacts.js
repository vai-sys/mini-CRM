const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.js');

router.get('/', async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


   router.post("/",async(req,res)=>{
   try{
    const {firstName,lastName,email,phoneNumber,jobTitle,company}=req.body;
    if(!firstName || !lastName || !email || !phoneNumber){
        return res.json("FirstName,Lastname,email and phoneNumber is required!")
    }
    const newContact=new Contact({
        firstName,lastName,email,phoneNumber,jobTitle,company
    })
    const savedContact = await newContact.save();
        res.status(201).json(savedContact);
   }
   catch(err){
    console.log(err);
    return res.status(500).json({ message: err.message });
   }
   })

   router.put('/:id', async (req, res) => {
    try {
      
      const contact = await Contact.findByIdAndUpdate(
        req.params.id,   
        req.body,       
        { new: true }    
      );
      if (!contact) {
        return res.status(404).json({ success: false, message: "Contact not found" });
    }
  
      res.status(200).json(contact); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  });
  

  router.delete("/:id",async (req,res)=>{
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json("Contact not found" );
        }

        res.status(200).json( "Contact deleted successfully" );
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
  })

  module.exports=router;