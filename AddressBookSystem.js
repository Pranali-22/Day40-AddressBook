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

        if(validateName(firstName) == true){
            this.firstName=firstName
        }
        else throw "First Name is invalid"

        if(validateName(lastName) == true)
            this.lastName = lastName
        else throw "Last Name is invalid"

        if(validatePhone(phoneNumber) == true)
            this.phoneNumber = phoneNumber
        else throw "Phone number is invalid"

        if(validateEmail(emailId) == true)
            this.emailId = emailId
        else throw "Email Id is invalid"

        if(validateAddress(addressDetails.address) ==true && validateAddress(addressDetails.city) 
            && validateAddress(addressDetails.state) && validateZip(addressDetails.zip))
            this.addressDetails = addressDetails;
        else throw "Address is invalid"
    }
}

//UC1
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


//UC2
function validateName(name){
    let newRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(newRegex.test(name))
            return true
        else return false
}

function validateAddress(input){
    let newRegex = RegExp('^[A-Za-z]{4,}$')
    if(newRegex.test(input))
        return true
    else return false

}

function validateZip(zip){
    let newRegex = RegExp('^[0-9]{6,}$')
    if(newRegex.test(zip))
        return true
    else return false

}


function validatePhone(phone){
    let newRegex = RegExp('^[0-9]{10,}$')
    if(newRegex.test(phone))
        return true
    else return false
}

function validateEmail(email){
    let newRegex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$')
    if(newRegex.test(email))
        return true
    else return false
}