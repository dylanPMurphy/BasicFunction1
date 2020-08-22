


//Predicted Output 1: 35;
function a(){
    return 35;
}
console.log(a())

//Predicted output: 8
function a(){
    return 4;
}
console.log(a()+a());

//predicted output:6
function a(b){
    return b;
}
console.log(a(2)+a(4));

//predicted output: 3 9
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

//Predicted output: 40
function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));

//Predicted Output: 4
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

//Predicted output: 30 30
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

//Predicted Output: 3 4
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//Predicted Output: 2 5 8 11
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

//Predicted output: 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0
function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
return b*c;
}
a(0,10);
console.log(a(0,10));

//Predicted output: 0 1 2 3 4 5 6 7 8 9 0 0 1 2 3 4 5 6 7 8 9 1 0 1 2 3 4 5 6 7 8 9 2 0 1 2 3 4 5 6 7 8 9 3 0 1 2 3 4 5 6 7 8 9 4 0 1 2 3 4 5 6 7 8 9  5 0 1 2 3 4 5 6 7 8 9  6 0 1 2 3 4 5 6 7 8 9  7 0 1 2 3 4 5 6 7 8 9 8 0 1 2 3 4 5 6 7 8 9 9
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}

//Predicted output: 0 0 0 1 0 2 0 3 0 4 0 5 0 6 0 7 0 8 0 9 9 0 1 0 1 1 1 2 1 3 1 4 1 5 1 6 1 7 1 8 1 9 9 1 2 0 2 1 ...1 8 2 9 9 2... 9 0 9 1 9 2 9 3 9 4 9 5 9 6 9 7 9 8 9 9 9 9
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}


//Predicted ouput: 10
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

//predicrted output:15 10
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//predicted output:15 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);



/*
ACTUAL OUPUT

15
15
15
15
30
15
15
30
15
15
15
15
15
15
10 3
15
15
3
4
15
15
15
15
10
15
10
15
15


*/