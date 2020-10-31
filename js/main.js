document.querySelector("#event")
.addEventListener("wheel",event =>{
    if(event.deltaY > 0){
        event.target.scrollBy(300, 0)
    } else{
        even.target.scrollBy(-300,0)
    }
})