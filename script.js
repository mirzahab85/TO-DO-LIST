function unesi() {
    let task = document.getElementById("unos").value;
    let ispis = document.getElementById("ispis");
   document.getElementById("deleteAll").style.display = "block";
    
    ispis.innerHTML += "<li>" + "<span onclick=this.classList.toggle('mystyle')>" + task + "</span>" + "  <span style='color:red' onclick='this.parentElement.remove();'>Remove</span>  <input type='text' placeholder='Edit Task' onchange='this.parentElement.innerHTML = this.value;'/></li>"; 
    
}