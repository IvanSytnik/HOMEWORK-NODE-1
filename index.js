const argv = require("yargs").argv;
const contactsService = require("./contacts")
// TODO: рефакторить
const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
    const allContacts = await contactsService.listContacts()
    console.log(allContacts);
    break;

    case "get":
    const getContact = contactsService.getContactById(id)
    console.log(getContact);
    break;

    case "add":
    const addContact =  contactsService.addContact(name, email, phone)
    console.log(addContact);
    break;

    case "remove":
    const removeContact = contactsService.removeContact(id)
    console.log(removeContact);
    break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// function invokeAction({ action, id, name, email, phone }) {
//     switch (action) {
//       case "list":
//         const allContacts = contactsService.listContacts()
//         console.log(allContacts);
//         break;
  
//       case "get":
//         // ... id
//         break;
  
//       case "add":
//         // ... name email phone
//         break;
  
//       case "remove":
//         // ... id
//         break;
  
//       default:
//         console.warn("\x1B[31m Unknown action type!");
//     }
//   }
invokeAction(argv);