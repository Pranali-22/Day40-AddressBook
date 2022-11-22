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
    if(checkDuplicate(addressBookArray,firstName) == true) 
        return null;
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

//UC 4 - edit name
let editName = (addressBookArray, oldName, newName) =>{
    
    addressBookArray.forEach(addressBook => {
        if(addressBook.firstName == oldName)
            addressBook.firstName = newName
            return true
    });

    return false
} 

//UC 5 - Delete entry
let deleteRecord = (addressBookArray, nameToDelete) =>{
    for(let i=0;i<addressBookArray.length;i++){
        if(addressBookArray[i].firstName === nameToDelete)
            addressBookArray.splice(i,1)
    }
} 

//Uc 6 - count number of records
let countRecords = (count,element) => {
    return count+1
}

//UC 7 - check duplicate
function checkDuplicate(addressBookArray,firstName){
    let flag = false
    if(addressBookArray.length != 0){
        addressBookArray.forEach(addressBook => {
            if(addressBook.firstName == firstName){
                console.log("First name already exists")
                flag = true
                return flag
            }                
        });
    }
    return flag
}

//UC8 - search by city or state
let serachByCity = (addressBookArray,cityName) =>{
    return addressBookArray.filter(addressBook => addressBook.addressDetails.city == cityName)
}

let serachByState = (addressBookArray,stateName) =>{
    return addressBookArray.filter(addressBook => addressBook.addressDetails.state == stateName)
}

//UC 10 - count of person by city or state
let countOfPerson = (addressBookArray,searchValue, serachKey) => {
    let result
    if(serachKey == 'city'){
        result = serachByCity(addressBookArray,searchValue)
        console.log("Count of person from city "+searchValue + " : "+result.length)
    }
    else{
        result = serachByState(addressBookArray,searchValue)
        console.log("Count of person from state "+searchValue + " : "+result.length)
    }
}

//UC 3 - address book array
let addressBookArray = [];
let choice = 1;
do{
    switch(choice){
        case 0:
            break
        case 1:
            addressBookArray.push(addContact());
            break;
        case 2:
            addressBookArray.forEach(element => {
                console.log('=========================================')
                console.log(element)
            });
            break
        case 3:
            let oldName = prompt("Enter old name : ")
            let newName = prompt("Enter new name : ")
            if(editName(addressBookArray,oldName,newName))
                console.log("Name updated successfully")
            else
                console.log("No record found with "+ oldName)
            break
        case 4:
            let nameToDelete = prompt("Enter name to delete contact : ")
            deleteRecord(addressBookArray,nameToDelete)
            break
        case 5:
            let count = addressBookArray.reduce(countRecords,0)
            console.log(count)
            break
        case 6:
            let cityName = prompt('Enter city to search for : ')
            cityArray = serachByCity(addressBookArray,cityName)
            console.log(cityArray)
            break
        case 7:
            let stateName = prompt('Enter state to search for : ')
            let stateArray = serachByState(addressBookArray,stateName)
            console.log(stateArray)
            break
        case 8:
            let cityNameForCount = prompt('Enter city to get count of person for : ')
            countOfPerson(addressBookArray,cityNameForCount,'city')
            break
        case 9:
            let stateNameForCount = prompt('Enter state to get count of person for : ')
            countOfPerson(addressBookArray,stateNameForCount,'state')
    }

    console.log("\nPress 0 to exit \nPress 1 to add more contact\nPress 2 to display data\nPress 3 to edit name"+
                "\nPress 4 to delete record\nPress 5 to count records\nPress 6 to serach by city\nPress 7 to serach by state"+
                "\nPress 8 to get count of person by city \nPress 9 to get count of person by state")
    choice = Number(prompt("Enter your choice : "))
        
}while(choice!=0)