var number = 5;
if (number > 0) console.log(`1`);
else if (number < 0) console.log(`-1`);
else if (number == 0) console.log(`0`);

var login = "Admin";
var password = "TheMaster";

if (login == "Admin"){
    console.log(`Admin`);
    if (password == "TheMaster"){
        console.log(`Welcome!`);
    }
    else if (password == "other"){
        console.log(`wrong password`);
    }
    else if (password == "cancel"){
        console.log("canceled");
    }
}
else if (login == "cancel"){ console.log(`canceled`);}
else if (login == "other"){ console.log(`i dont know you`);}

switch(login){
    case "Admin":{
         console.log(`Admin`);
        switch(password){
            case "TheMaster":{ console.log(`Welcome!`);}break;
            case "cancel":{ console.log(`canceled`);}break;
            case "other":{ console.log(`wrong password`);}break;
        }
    }break;
    case "cancel":{ console.log(`canceled`);}break;
    case "other":{ console.log(`i dont know you`);}break;
}

