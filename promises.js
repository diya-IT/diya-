function mypromise(){
         return new Promise((resolve,reject)=>{
            setTimeout(()=>{
              let condition =Math.random()>0.5
              if(condition){
                resolve("data resolved")
              }else{
                      reject("failed to fetch the data")
              }
            },2000)
         })
}
  let elem=document.getElementById("fetchDataBtn")
  elem.addEventListener("click",async()=>{
    console.log("hii")
    displayOutput(`loading`)
    elem.style.display="none"
          await  mypromise().then((res)=>{
                displayOutput(` success ${res}`)
          }).catch((err)=>{displayOutput(`Failure :$ {err}`)})
          elem.style.display="block"
}
)

function displayOutput(message){
                   document.getElementById("output").innerHTML +=`<p>${message}</p>`
}