function dangnhap() {
    var email = document.getElementById("txtemail").value;
    var password = document.getElementById("txtpassword").value;
    var ckemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == '') {
        alert("Vui lòng nhập email");
    } else
    if (password == '') {
        alert("Vui lòng nhập password");
    } else
        alert("Đăng nhập thành công ")




}

function dangki() {
    var email = document.getElementById("txtemaildangki").value;
    var password = document.getElementById("txtpassworddangki").value;
    var confirmpassword = document.getElementById("txtconfirmpassword").value;
    if (email == '') {
        alert("Vui lòng nhập email");
    } else
    if (password == '') {
        alert("Vui lòng nhập password");

    } else
    if (confirmpassword != password) {
        alert("Mật khẩu chưa đúng  ");
    } else alert("Bạn đã đăng kí thành công ")


}