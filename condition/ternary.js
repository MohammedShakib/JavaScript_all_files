

const age = 112;


age >= 18 ? console.log('Vote Dio') : console.log('Ghumai thako')

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else {
    price = price + 100;
}


price = isLeader === true ? 0 : price + 100;




if(isLeader === true){
    if(price > 1000) {
        price = price /2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}

price = isLeader === true ? 
            price > 1000 ? 
                price /2 : 0 
        : price + 1000;