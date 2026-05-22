//console.log('hello world!!!');

//add coordinates of location 
let latitudeCurrent = 40.417;
let longitudeCurrent = -3.703;
let namePlace = "Puerta del Sol";
let isPremiumUser = false;


function OutputCoordinates(latitude, longitude, name){
        console.log(`My location is ${name} (${latitude}, ${longitude})`);
        return;
}

OutputCoordinates(latitudeCurrent, longitudeCurrent, namePlace);

//motoroute object
let motoRoute = {
    title: "Серпантины",
    distance: 145,
    dificulty: "Medium",
    hasHikingTrail: true, 
}
motoRoute.distance = 150;

console.log(`Маршрут ${motoRoute.title}
Длина: ${motoRoute.distance} км / ${convertToMiles(motoRoute.distance)} миль
Сложность: ${motoRoute.dificulty}`);


let parkingSpots = ["Puerto de Navacerrada", "Mirador del Corzo", "Cotos"];
parkingSpots.push("Rascafria");

console.log("Количество парковок:" + parkingSpots.length);
parkingSpots.forEach(p => {
    console.log(p);
}); 

function convertToMiles(value){
    return (value * 0.6214);
}