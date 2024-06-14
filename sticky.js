localStorage.setItem("key1",[].toString());
localStorage.setItem("key1",JSON.stringify([]));

console.log(JSON.parse(localItem))
let localItem=localstorage.getItem("key1");
document.getElementById("local").innerHTML=`<h3>${LOCALITEM}<h3>`