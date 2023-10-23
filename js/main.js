// alert()
const MIN_POWER = 20;
const MAX_POWER = 40;

let energiaGideon = 100;
let energiaBill = 100;

let round = 0;

while((energiaGideon>0) && (energiaBill>0)){
round +=1;
console.log('-----round: ' + round +'----------------------')


let golpeGideon = parseInt(Math.random()*(MAX_POWER - MIN_POWER)+ MIN_POWER);
let golpeBill = parseInt(Math.random()*(MAX_POWER - MIN_POWER)+ MIN_POWER);

console.log("Gideon golpea con fuerza de " + golpeGideon)
console.log("Bill golpea con fuerza de " + golpeBill)

if(golpeGideon === golpeBill){
    console.log("Siga Siga")
}else if(golpeBill > golpeGideon){
    golpeGideon = golpeGideon - energiaBill
}else {
    energiaBill = energiaBill - golpeGideon;
}
console.log("La energia de Goku es " + golpeGideon)
console.log("La energia de Bill es " + energiaBill)

console.log(parseInt(Math.random()*30));
}

console.log('------ Ganador ------')

if(energiaGideon>0){
    console.log("Gano Gideon...")
}else {
    console.log("Gano Gideon...")
}