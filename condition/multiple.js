const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;
height = 71;




if(salary > 25000 || height > 72){
    console.log('eso baba kobul');
}
else {
    console.log('vaag tui mokbul')
}



if(salary > 25000 && height > 72 && isBCS == true){
    console.log('eso baba kobul');
}
else {
    console.log('vaag tui mokbul')
}


if((salary > 25000 && hasCar == true) || isBCS== true ){
    console.log('tomar 14 gosti raji')
}

if((salary > 25000 || hasCar == true) && isBCS== true ){
    console.log('tomar 14 gosti raji')
}
