//  while loop in continue .......
 /* let i=0;
while(i<=5){
    i++;
    if(i==3){
        
        console.log("skipped");
        continue;
        
    }
    console.log("naveen",i);
}
//  for loop .......
for(let i=1;i<=10;i++){
    console.log("naveen");
}
for(let i=1;i<=10;i++){
    if(i==5){
        
        console.log("skipped");
        continue;
    }
    console.log(i);

}
var pocket=""
for(let i=1;i<=10;i++){
    pocket=pocket+i+" ";
    console.log(pocket);
    
}
// reverse loop ..
let pocket=""
for(let i=5;i>=1;i--){
    pocket=pocket+i;

}
console.log(pocket);

// print the factorial of num;
let num=8;
let factorial=1;
for(let i=num;i>=1;i--){
    factorial=factorial*i;

}
console.log(factorial);

// find the average of even number between 1 and 50;
let start =1;
let end =50;
let sum =0;
let count=0;
for(let i=start;i<=end;i++){
    if(i%2==0){
        sum=sum+i;
        count++;
    }
}
console.log("the averageis;",sum/count);

//  break and continue in for loop...
//  break..
for(let i=1;i<=80;i++){
    if(i==11){

        
        break;
    }
    console.log(i,"is got 20% discount");
}

// continue...
for(let i=1;i<=80;i++){
    if(i==11){
        continue;
    }
    console.log(i,"is got 20% discount");
}

// Nested loop...
// rahul want to eat 10 gol gappas ;
for(let member=1;member<=4;member++){


   for (let golgappas =1;golgappas<=10;golgappas++){
    console.log(member,"member is eating",golgappas,"gol gappas");
   }
}

// print 1-5 10 times..
 let num1=1
let num2=54
for(let print=num1;print<=num2;print++){
    for(let no=1;no<=100;no++){
        console.log("the no. is:",no);
    }
}

 var seeds=1
var farm=5
for (let farm=seeds;farm<=10;farm++){
    for( let son=1;son<=10;son++){
        console.log("you work is done sir,give","farm",farm,"seed no",son);

    }
}

 let seeds=1
let farm=5

for (let farm=seeds;farm<=5;farm++){
    let pocket=""
    
    for( let son=1;son<=10;son++){
       pocket=pocket+"*";

    }
    console.log(pocket);

}
    

//  printing star patren 5 times..
 for(let i=1;i<=5;i++){
  for (let farm=5;farm>=1;farm--){
    let pocket="";
    
    for( let seed=1;seed<=farm;seed++){
       pocket=pocket+"*";
  
    }
    console.log(pocket);

}
}

 for(let i=1;i<=5;i++){
  for (let x=5;x>=1;x--){
    let pocket="";
    
    for( let y=1;y<=x;y++){
       pocket=pocket+y;

    }
    console.log(pocket);
}
}

//  little bit tricky.
 for(let i =1;i<=5;i++){
let pocket1=""
let pocket2=""
for(let a=1;a<=i;a++){
    pocket1=pocket1+a+" ";
}
console.log(pocket1);
for( let b=1;b<=i;b++){
    pocket2=pocket2+"*"+" "
}
console.log(pocket2);
}

// break and continue............
for (let i=1;i<=5;i++){
    for(let a=1;a<=5;a++){
        if(a>i){
            break;
        }
        console.log("i=",i,"&","a=",a);
    }
}

 for (let i=1;i<=5;i++){
    for(let a=1;a<=5;a++){
        if(a==i){
            break;
        }
        console.log("i=",i,"&","a=",a);
    }
}
for (let i=1;i<=5;i++){
    for(let a=1;a<=5;a++){
        if(a==i){
            continue;
        }
        console.log("i=",i,"&","a=",a);
    }
}
    
//    nested while loops..

 let a=1
while(a<=5){
    let i=1;
while(i<=5){
    console.log(a,"  & ",i);
    i++
}
a++ 
} 
// chatgpt nested loop question.....................

// ques 1....
 for(let i=1;i<=5;i++){
    let ans="";
    for(let a=1;a<=5;a++){
        ans =ans+"   "+"*";

    }
    console.log(ans);
} 
// ques 2.......
     for(let i=1;i<=4;i++){
    let str="";
    for(let a=1;a<=i;a++){
        str=str+"*";
    }
    console.log(str);
}
    // ques 3.........
 for(let i=1;i<=4;i++){
    let no="";
    for(let a=1;a<=i;a++){
        no=no+a;
    }
    console.log(no)
}
// ques 4
for(let i=1;i<=10;i++){
    
    for(let a=1;a<=10;a++){
        product=i*a;

    }
    console.log(product);
}
//  ques 5
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i}, ${j})`);
  }
}
//  ques 6 ..
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}

// reverse piramid of stars..
let n = 5; // height of the pyramid

for (let i = 0; i < n; i++) {
  let row = "";

  // Print leading spaces
  for (let j = 0; j < i; j++) {
    row += " ";
  }

  // Print stars
  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    row += "*";
  }

  console.log(row);
}
*/
// today  i learn about array......
//  array are data structure used to store any kind of data..

/* let friends =["nikku","nishu","prateek","hacker"];
console.log(friends  [3] );
*/
/* let friends =["nikku","nishu","prateek","hacker"];
console.log(friends  [3] );
for (idx=0;idx<=4;idx++){
    console.log(friends[idx])
}
    */
/* let num =["nikku","nishu","prateek","hacker","suiii","broooo"];
for(let i =0;i<=num.length-1;i++){
    console.log(num[i])
}
*/
// push & pop in array..

 let friends =["nikku","nishu","prateek","hacker"];
console.log()





