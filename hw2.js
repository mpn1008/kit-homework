function canbachai(){
let a = 0 ;
let b = -1;
let c = 5;
let delta = Math.pow(b,2) - 4*a*c;
if(a === 0){
  console.log("phuong trinh vo nghia")  
}
else if(delta < 0 ){ 
 console.log("phuong trinh vo nghiem ");}
else if (delta === 0){
 x1 = -b/ (2*a);
 console.log("phuong trinh co nghiem kep x1 = x2 = " + x1);
}
else if (delta > 0) {
x1 =(-b - Math.sqrt(delta))/(2*a);
x2 =(-b + Math.sqrt(delta))/(2*a);
console.log("phuong trinh co nghiem");
console.log("x1=" + x1);
console.log("x2=" + x2);
}
}
 canbachai()


