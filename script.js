//---------

let element1 = 100;
if (element1 < 50) {
    console.log("naklebia 50ze");
} else if (element1 > 20) {
    console.log("metia 20ze")
} else {
    console.log("error")
}

//---------

let element2 = 100;

let element3 = element2 < 50 ? "naklebia 50ze" : element2 > 20 ? "metia 20ze" : "error"
console.log(element3);

//-----------

let userName="mariam";

if (userName == "mariam") {
    console.log("true")
} else {
    console.log("false")
}

//----------

let userName1 = "Mariam";

switch (userName1) {
  case "Mariam":
    console.log("true");
    break;
  default:
    console.log("false");
}

//----------

let userName2 = "Anna"

switch (userName2) {
    case "Anna":
    console.log("true");
    break;
    default:
    console.log("false");
}
