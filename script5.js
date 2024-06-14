let arr=["DIYA",{
         name:"bhumi",
         age:"19",
},
         {
            name:"dujihshj",
            age:"19",
            nestedobj:{
               name:"filke",
            },

            {
                name:"bhumi",
                age:"19",
                nestedobj:{
                   name:"filke",
                },
       


}



]

let arr4=[1,2,3,4,5]
let arr3=[...arr,2,3,4,5]
//arr=arr.concat(arr)
       let foundItem=arr4.findIndex((item)=>item =="diya")
console.log("array4",arr4,foundItem)
let yes=arr4.every((item)=>item %2==0)
console.log("array4",arr4,yes)
let foundItem4=arr4.filter((item)=>item % 2 ==0)
console.log("array4",arr4,foundItem4)
console.log("array4",arr4,foundItem)
console.log(">>>>>>>",object.arr[2])
console.log("array",arr[0],arr[2],arr[1]. nestedobj.array[1])

let arrayobj= arr.filter((item,index) =>index >2

)
console.log("arrayobj",arrayobj);

//pop,push,map,join,




let arr5=[1,2,3,45]
arr5.push(9),
console.log("push",arr5);
let array=arr5.pop()
console.log("pop",array,arr5);
let reducedItem=arr5.reduce((acc,curr)=> acc+curr)
console.log("reduceditem",reducedItem)
