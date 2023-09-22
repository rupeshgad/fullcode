let person=["mohan","rupesh","ilan"]
console.log("person before:",person)
person[1]="abishake"
console.log("person after:",person)
console.log("person at 1th:",person[1])
/*object //just like real life object*/
let projector1={
    color:"white",
    price:4000,
    brand:"lg"
}
let projector2={
    color:"black",
    price:43333,
    brand:"pg"
}
console.log("projector1:",projector1)
console.log("projector2:",projector2)
let person1={
    firstname:"mohan",
    lastname:"adhikari",
    job:"developer"
}
let person2={
    firstname:"abishake",
    lastname:"basnet",
    job:"nothing"
}
console.log("person1:",person1)
console.log("person2:",person2)
let color1={
    name:"red",
    hex:"#ff001",
    rgb:"255.0.0"
}
let color2={
    name:"black",
    hex:"rf00"
}
let color=["red","black"]
console.log("prev color:",color)
color=[color1,color2]
console.log(" after color",color)
company1={
    name:"apple",
    estb:"2344"
}
let brands=[
    company1,

    {
        name:"samsung",
        estb:"2034"
    }
]
console.log("brands:",brands)
let parentsname=[
    {
        index:0,
        name:"mr adhikari",
        age:23,
        phone:1751
    },
    {
        index:1,
        name:"mrs adhikari",
        age:22,
        phonenumber:4544454
    }
]
console.log("parentsname:",parentsname)
// let father=parentsname[0]
// console.log("1st father",father)
// father.age=69
// console.log("2nd age",father)
parentsname[1].age=65
console.log("mother",parentsname[1])
let mobile=[
    {
        name:"sumsang",
        version:58,
        display:2548,
        price:58000
    }
]
console.log("mymobile:",mobile)
console.log("log mobile before:",mobile.display3)
mobile.display=2654
console.log("log myhome ater:",mobile.display)
console.log("mobile",mobile)


let number = 10 //assign operator
number = number + 10 //arthimatic operator
console.log({number})
console.log("hello" == "hellO") //equality operator
//type conversion
console.log(1 == "1")//true//here js  convert types if possible
//strict equality operator
console.log(1 === 1) //true