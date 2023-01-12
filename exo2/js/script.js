let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}


let username = prompt("Hey 😊 !! prière de renseigner votre nom pour la vérification");


    if (guestList[username]) {
        console.log(`Hi! I'm, ${username} ! and I'm from ${guestList[username]}.`);
    }
    else {
        console.log(`Hi! I'm a guest !`);
    }

