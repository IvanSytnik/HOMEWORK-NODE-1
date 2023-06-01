const fs = require("fs/promises")
const path = require("path")


const contactsPath = path.join('db', 'contacts.json') ;

function getRandomArbitrary() {
    const min = 1000000000;
    const max = 9999999999;
    return Math.random() * (max - min) + min;
  }

const listContacts  = async()=> {
    
    try {   
        const data = await fs.readFile(contactsPath, "utf-8")
        const text = JSON.parse(data)
        return text
        
    }
    catch(err) {

        console.log(err)
    }
  }
  
const getContactById= async(contactId)=>  {
    try {   
        const data =  await listContacts()
        const contact = data.filter(({ id }) => id === contactId)
        console.log(contact)
    }
    catch(err) {
        console.log(err)
    }
  }

const removeContact= async(contactId)=>  {
    try {   
        const data =  await listContacts()
        const newContacts = data.filter(({ id }) => id !== contactId)
        const newData = JSON.stringify(newContacts)
        await fs.writeFile(contactsPath, newData)
        console.log(newContacts)
    }
    catch(err) {
        console.log(err)
    }
  }
  
  
  
  
  
const addContact = async (name, email, phone) => {
  
  
    try {
      const data = await listContacts();
      const newContact = {id: `${getRandomArbitrary()}`, name: name, email: email, phone: phone} 
      const contacts = [...data, newContact]
      const jsonContacts = JSON.stringify(contacts)
      await fs.writeFile(contactsPath, jsonContacts)
      console.log(contacts)
    }
    catch (err) {
    console.log(err)
    }
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };