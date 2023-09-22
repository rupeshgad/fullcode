/* logical opertaor
and && if one false then all false(more priority)
or || if one true then all true 
not!
*/
let person1 = {
    name:"ram",
    age:24,
    hasSubmittedProject: true,
    attandencenumber: false,
    admitcard:false
    
 }
  if(person1.age>=20){
    console.log("you are eligible for marrigae")

  }
  else{
    console.log("you are not eligibel")
  }
if (person1.hasSubmittedProject && person1.attandencenumber) {
    console.log("can take exam");
} else {
    console.log("not eligible");
}
if (person1.hasSubmittedProject || person1.admitcard && person1.attandencenumber)//if(true||false&&false)
{
    console.log("you can take exam")
}else{
    console.log("you are not eligible for exam")
}

let bdEmail = "ram@ram.com";
let dbpassword = 12345678
 let user = {
    email:"ram@ram.com",
    password:"password"
 }
 if((user.email  === bdEmail) && (user.password === dbpassword)){
    console.log("you can log in")

 }else{
    console.log("you cant login")
 }
 let user2 = {
    email:"two@two.com",
    password:12345678
 }
 let user3 = {
    email:"jxhvh",
    password:324426
 }
 let user4 = {
    email:"sdfwe",
    password:12233434
 }
 if(dbpassword === user2.password){
    console.log(user2.email,":you can log in")
 }else{
    console.log(user2.email,":you cannot log in")
 }
 if(dbpassword === user3.password){
    console.log("you can log in")
 }else{
    console.log("you cannot log in")
 }
 if(dbpassword === user4.password){
    console.log("you can log in")
 }else{
    console.log("you cannot log in")
 }


 /* function
 DRY -dont repeat yourelf
 syntax
 function<functionname>(){
}
 */
function sum(number1,number2){
    console.log({number1},{number2});
    console.log("number1 + number2 =",number1 + number2);
}
sum(1,2)
sum(122,222)
sum(122,2244)
let dbpassword1 = 124546464
let user21 = {
   email:"two@two.com",
   password:12345678
}
let user32 = {
   email:"jxhvh",
   password:324426
}
let user43 = {
   email:"sdfwe",
   password:12233434}

   function login(userinput){
   if(userinput.password === dbpassword1){
      console.log(userinput.email,"can log in")
   }else{
      console.log(userinput.email,"cant log in")
   }
}
login(user32)
login(user2)
// // function calculatesum(number1,number2){
// //     console.log({number1},{number2})
// //     console.log(number1 + "+" + number2 + "=",number1+number2);
// //     console.log("\n")

// // }
// // calculatesum(1,2)
// // calculatesum(1,3)
// // calculatesum(3,3)
// let number1= 1
// let number2 =2
//  console.log(number1 + "+" + number2 + "=",number1+number2);
//  console.log(`${number1} + ${number2} = ${number1+number2}`);
//  console.log("hello"+number1);
//  console.log(`hello`,number1);
//  console.log(`hello ${number1}`)
 


//  console.log()
//  function work(){
//     console.log("working")
//  }
//  let person={
//     "name":"log",
//     "work": work
//  }

//  function double(value){
//     console.log(2 * value)
//  }
//  double(2)
//  double(4)
// function sum(input1,input2){
//     console.log(input1+input2);
//     return input1 + input2
//     return undefined
// }
// console.log("sum is",sum(1,2));
// console.log("type is",typeof(34))


// let summedvalue = sum(1000,200)
// console.log({summedvalue})

// function checkisnumber(value){
//     if(typeof value === "number"){
//         return true;
//     }else{
//         return false;
//     }
  
// }
// console.log(checkisnumber("hello"))
// console.log(checkisnumber(0))

let todos =[
   { title: "html", status: true },
   { title: "css", status: true },
   { title: "js", status: false },
]
function statuscheck(title,status){
   if(status){
       console.log(`${title}is complete`)
   }else{
       console.log(`${title}is pending`)
   }
}
console.log()
