


function subtract(a,b ){
    return a-b;
}

function power(a ,b){
    if( b == 0) return 1 ;
    return a * power( a , b-1 );
}

module.exports = {
    subtract ,
    power 
}












