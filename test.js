function login() {
    var U = document.getElementById("uid").value;
    var P = document.getElementById("pass").value;
    if (U == "admin@12345" && P == "admin12345"){
        alert("Login Success");   
    }
    else
        alert("Incorrect User id/Password");
}