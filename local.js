localStorage.setItem("key1",[1,2,3,4,5].toString());
localStorage.setItem("key1",JSON.stringify([1,2,3,4,5]));

console.log(JSON.parse(localItem  ))
let localItem=localstorage.getItem("key1");
document.getElementById("local").innerHTML=`<h3>${LOCALITEM}<h3>`