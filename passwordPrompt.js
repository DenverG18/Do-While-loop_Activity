function passwordpromt(){
    let CorrectPassword = "denja_18";
    let OwnerPassword;

    do {
        OwnerPassword = prompt("Enter Your Password: ");
        
        if (OwnerPassword !== CorrectPassword){
            alert ("Incorrect Password,please try again.");
        }
    } while (OwnerPassword !== CorrectPassword);
    alert("Access Granted.");
}

