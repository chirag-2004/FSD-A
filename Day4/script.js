/*var x=12;
let y=13;
let y=15;
function display(){
    var x=14;
    let y =15;
    console.log("HELLO!",x,y);
}
display();*/
function validate(){
    let username=document.getElementById("username").value;
    // alert(username);
    let pass=document.getElementById("pass").value;
    // alert(pass);
    let p1=document.getElementById("result");
    if(username=='admin')
        {
            if(pass=='admin'){
                p1.innerText="validated";
            }
    else{
        p1.innerText=" Invalid Password";
    
    }
}
else{
    p1.innerText="Invalid User";
}
}