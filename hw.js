function analyzeScores(){
  let a =[1,7,6,5,8.5]
   let gioi = 0;
    
   let dat = 0;
    
   let truot = 0;

  
   for( let i=0;i<a.length;i++){
   
    if( a[i] >= 8.5) {
        console.log("gioi"); 
        gioi = gioi + 1;
    }
   
    else if(a[i] >= 5 && a[i] < 8.5) {
        console.log("dat");
        dat = dat + 1;
    }

 
    else {
        console.log("truot");
        truot = truot +1;
    }
   }
   console.log(gioi);
    console.log(dat);
     console.log(truot);
}
analyzeScores()

