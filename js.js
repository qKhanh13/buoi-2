var myDog ={
"name": "Ngao",
"leg" : 4,
"friends" : "everything !"
}

console.log(myDog);
myDog.color="brown"
console.log("COMMAND CREATE:",myDog);
//delete
delete myDog.friends
console.log("COMMAND DELETE", myDog);




var Fruit =[["Tao",10 ],["Nho",20 ],["Oi",5],["Sau Rieng",15 ]]
console.log(Fruit,);
var grape =["Grape",15]
console.log(grape,"I have 15 grapes");
//Vong lap for
for(var i = 0; i < 1; i++) {
  console.log(i,Fruit)
}
//Vong lap while
var i = 0;
while(i < 1) {
    console.log(i,Fruit);
    i++;
}
// do while
var i = 1;
do {
    console.log(i,Fruit);
    i++;
}
while ( i > 1 && i < 2)