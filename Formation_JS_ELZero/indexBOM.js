//let confirmMsg = confirm("Are You Sur??");
//console.log(confirmMsg);
// if(confirmMsg===true){
//     console.log("Deleted")
// }else{
//     console.log("Not Deleted")
// }
//let promptMsg = prompt("Are You Sur??");
//---------------------------------//
// setTimeout(function(){
//     console.log(`Bonjour Slay7a`);
// },3000)
//---------------------------------//
// console.log(location);
// console.log(location.href);

// console.log(location.host);
// console.log(location.hostname);
//---------------------------------//
// setTimeout(function(){
//     console.log("Debut")
// this.window.open("http://google.com","","height:400,weight:400,left:200,top:100")
// },2000)

// setTimeout(function(){
// //     console.log("Fin")
// // this.window.close()
// },2000)
// this.window.close()
//---------------------------------//
//console.log(history)
//let newWindows=window.open("http://google.com","","height:400,weight:400,left:200,top:100");
//---------------------------------//
let btn = document.querySelector("button")
window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
        //console.log(`Scrolling Y value is ${window.scrollY}`)

    }else if(window.scrollY <= 599) {
        btn.style.display = "none";
    }
    //if(window.scrollX >=50) console.log(`Scrolling X value is ${window.scrollX}`)
}
btn.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    });
};





