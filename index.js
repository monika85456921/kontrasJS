// 1 uzd
let pazymys = 7;
switch (pazymys) {
  case 1:
  case 2:
  case 3:
    console.log("Pazymys neigiamas");
    break;
  case 4:
  case 5:
    console.log("Teigiamas, bet reikia pasistengti");
    break;
  case 6:
  case 7:
    console.log("Vidutiniskai, ar tikrai tau gana?");
    break;
  case 8:
  case 9:
    console.log("Pagirk save!");
    break;
  case 10:
    console.log("Super!");
    break;
  default:
    console.log("Pateikta neteisinga reiksme");
}
// 2 uzd
let menesis = "liepa";
switch (menesis.toLowerCase()) {
  case "gruodis":
  case "sausis":
  case "vasaris":
    console.log("Metu laikas yra ziema");
    break;
  case "kovas":
  case "balandis":
  case "geguze":
    console.log("Metu laikas yra pavasaris");
    break;
  case "birzelis":
  case "liepa":
  case "rugjutis":
    console.log("Metu laikas yra vasara");
    break;
  case "rugsejis":
  case "spalis":
  case "lapkritis":
    console.log("Metu laikas yra ruduo");
    break;
  default:
    console.log("Netaisingas menesis");
}

//3 uzd
let laikas = 22;
if (laikas >= 6 && laikas <= 11) {
  console.log("labas rytas");
} else if (laikas >= 12 && laikas <= 18) {
  console.log("Laba diena");
} else if (laikas >= 19 && laikas <= 21) {
  console.log("Labas vakaras");
} else {
  console.log("labanakt");
}

// 4 udz
const date = new Date();
console.log(date);
const day = date.getDay();
switch (day) {
  case 1:
    console.log("Pirmadienis");
    break;
  case 2:
    console.log("Antradienis");
    break;
  case 3:
    console.log("Treciadienis");
    break;
  case 4:
    console.log("Ketvirtadienis");
    break;
  case 5:
    console.log("Penktadienis");
    break;
  case 6:
    console.log("Sestadienis");
    break;
  case 7:
    console.log("Sekmadienis");
  default:
    console.log("Sugedo programa");
}

//5 uzd
let amzius = 20;
vairuotojoPaz = false;

if (vairuotojoPaz) {
  if (amzius >= 18) {
    console.log("Jus esate pilnametis ir turite vairuotojo pazymejima");
  } else {
    console.log("Jus nesate pilnametis");
  }
} else {
  if (amzius > 18 && !vairuotojoPaz) {
    console.log("just esate pilnametis taciau neturite vairuotojo pazymejimo");
  }
}

// 6 uzd

let skaicius = -10;

if (skaicius > 0) {
  console.log("Skaicius yra teigiamas");
} else if (skaicius === 0) {
  console.log("Skaicius yra 0");
} else {
  console.log("skaicius yra neigiamas");
}

//7 udz

let isLoggedIn = false;
let userType = "admin";

if (isLoggedIn) {
  if (userType === "admin") {
    console.log("Hi, Admin!");
  } else {
    console.log("Hi, user!");
  }
} else {
  console.log("Please log in first!");
}

//8 udz

let arPrisijunges = true;
let vartotojoTipas = "admin";
let arAutorius = true;

if (arPrisijunges && vartotojoTipas === "admin") {
  console.log("Patvirtinkite skelbima");
} else if (vartotojoTipas === "useris" && arPrisijunges && arAutorius) {
  console.log("Redaguokite savo skelbima");
} else {
  console.log("Prasome prisijungti");
}

//9 uzd

let userImput = 51;
if (userImput >= 50) {
  console.log(`${userImput}`);
} else {
  console.log("Ivestas skaicius yra mazesnis uz 50");
}

// 10 uzd

let sk1 = 10;
let sk2 = 5;
let veiksmas = "/";
let rezultatas;
switch (veiksmas) {
  case "+":
    rezultatas = sk1 + sk2;
    break;
  case "-":
    rezultatas = sk1 - sk2;
    break;
  case "*":
    rezultatas = sk1 * sk2;
    break;
  case "/":
    rezultatas = sk1 / sk2;
    break;
  default:
    rezultatas = "Neteisinga operacija";
}

console.log(`Veiksmo rezultatas yra ${rezultatas}`);
