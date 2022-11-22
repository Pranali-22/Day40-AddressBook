const prompt = require("prompt-sync")()

class AddressClass{
    constructor(address,city,state,zip){
        this.address = address
        this.city = city
        this.state =state
        this.zip = zip
    }
}

class Contact{
    constructor(firstName, lastName, phoneNumber, emailId, addressDetails){
        this.firstName=firstName
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.emailId = emailId
        this.addressDetails = addressDetails
    }
}


function addContact(){
    let firstName = prompt("Enter first name : ")
    let lastName = prompt("Enter last name : ")
    let phoneNumber = prompt("Enter phone number : ")
    let emailId = prompt("Enter email address : ")
    let address = prompt("Enter address : ")
    let city = prompt("Enter city : ")
    let state = prompt("Enter state : ")
    let zip = prompt("Enter zip code : ")
    let addressObj = new AddressClass(address,city,state,zip)
    let contactObj = new Contact(firstName,lastName,phoneNumber,emailId,addressObj)
    return contactObj
}

function displayContact(contact){
    console.log(contact)
}

let contact = addContact()
displayContact(contact)