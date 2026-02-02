function loginFun(event){
    // alert("login successfully")
    event.preventDefault()
    console.log("event",event);
    var name=document.getElementById("name").value
    console.log("name",name);
     var password=document.getElementById("password").value
    console.log("password",password);

    if(name=="Ilife" && password==2026){
        window.location.href="./home.html"
    }
    else{
        alert("name or password is wrong! try again")
    }
}