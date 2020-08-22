//let password = "

//let password = ["kot", "pies", "babka", 9, 12, "marzena" ];
//    let random = Math.ceil(Math.random() * password.length);
//    document.write(password[random]);

let password = ["Programowanie obiektowe", "Zmienne złożone", "Software development academy", "Java virtual machine",
"Test development kit", "Interface", "Singleton", "Sortowanie bąbelkowe", "GIT", "Swing", "Rekurencja", "Database", "Structered Query Language", "Trigger", "Database",
"Sortowanie przez wybieranie", "Try catch", "Kolekcje", "Servlety"];
 let random = Math.ceil(Math.random() * password.length-1); // losowanie randomowego hasła z tablicy

password = password[random].toUpperCase();


let password1 = "";
let howMany = 0;
let yes = new Audio("voices/yes.wav");
let no = new Audio("voices/no.wav");

for (let i=0; i<=password.length-1; i++){
    if (password.charAt(i) == " ") {
        password1 = password1 + " ";
    }
    else {
        password1 = password1 + "-";
    }
}


function printPassword() {
document.getElementById("board").innerHTML = password1;

}

window.onload = start;

let letters = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł",
                "M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż"];
function start() {
    let div_content = "";
    for (let i=0; i<=34; i++){
        let element = "lett" + i;
        div_content = div_content + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
        if ((i + 1) % 7 == 0) {
            div_content = div_content + '<div style="clear: both"></div>';
        }
    }
    document.getElementById("alphabet").innerHTML = div_content;

    printPassword();
}

String.prototype.setSign = function (place, sign) {
    if (place > this.length - 1){
        return this.toString();
    }else {
        return this.substr(0, place) + sign + this.substr(place + 1);
    }

}

function check(number) {
    let hitLetter = false;

    for (let i=0; i<password.length; i++){
        if (password.charAt(i) == letters[number]){
            password1 = password1.setSign(i, letters[number]);
            hitLetter = true;
        }
    }

    let element = "lett" + number;
    if (hitLetter == true){
        yes.play();
        document.getElementById(element).style.background = "green";
        document.getElementById(element).style.color = "black";
        document.getElementById(element).style.border = "3px solid gray";
        document.getElementById(element).style.cursor = "default";
        printPassword()
    }else {
        no.play();
        document.getElementById(element).style.background = "red";
        document.getElementById(element).style.color = "black";
        document.getElementById(element).style.border = "3px solid orange";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        howMany++;
        let picture = "image/s" + howMany + ".jpg";
        document.getElementById("gallows").innerHTML = '<img src="'+picture+'" alt="" />';
    }
        if (password == password1){
            document.getElementById("alphabet").innerHTML = "You won! Password is: " + password +
                '<br/><br/><span class="reset" onclick="location.reload()">Do you want to try again? :)</span>';
        }
        if (howMany > 9){
            document.getElementById("alphabet").innerHTML = "Game over!" +
                '<br/><br/><span class="reset" onclick="location.reload()">Do you want to try again? :)</span>';
        }
}