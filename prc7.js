const data =new Promise((resolve, reject) =>{
    setTimeout(()=> {

const ans='mala mala mala';
if (ans){
    resolve(ans);

}else{
    reject(new Error("No data"));
}
},5000);
});

data
.then((name) =>{
    console.log(name)
})
.catch((error) =>{
    console.log(error.stack);
})
.finally(()=>{
    console.log("Test");
})
