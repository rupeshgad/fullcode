let users=
[{
    "name":"mohan",
    "hair":{
        "color": "black",
        "type": "strands"
    }
},{
"name":"rupesh",
"hair":{
    "color":"blond",
    "type":"nk"
    },
"address":"chabil"},
{
    "name":"ral",
    "hair":{
        "color":"blond",
        "type":"nk"
        },
    "address":"chabil"}
]
function checkuserinfo(value){
    console.log(`${value.name} has ${value.hair.color} ${value.hair.type} and he lives in ${value.address}`)
    console.log("\n")
}
// checkuserinfo(users[0])
// checkuserinfo(users[1])
for(let index = 0; index<3; index++){
    checkuserinfo(users[index])
}