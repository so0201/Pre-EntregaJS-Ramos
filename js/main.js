const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaBill = 100;
let energiaGideon = 100;

let round = 0;

function Golpe(){
    return Math.ceil(Math.random()*(MAX_POWER - MIN_POWER)+ MIN_POWER)
}

while((energiaBill>0) && (energiaGideon>0)){
round +=1;
console.log('----------Round: '+ round +'------------------------')

let golpeBill = Golpe();
let golpeGideon =Golpe();

console.log("Bill golpea con fuerza de " + golpeBill);
console.log("Gideon golpea con fuerza de " + golpeGideon);

if(golpeBill === golpeGideon){
    console.log("siga siga");
}else if(golpeGideon > golpeBill) {
    energiaBill -= golpeGideon
}else {
    energiaGideon -= golpeBill;
}

console.log("La energia de Bill es " + energiaBill)
console.log("La energia de Gideon es " + energiaGideon)
}

console.log("------- GANADOR ----------");

if(energiaBill>0){
    console.log("Gano Bill....")
}else {
    console.log("Gano Gideon....")
}