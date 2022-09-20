function fun()
{
    var var1 = document.getElementById('username').value;
    var var2=document.getElementById('password').value;
    var reg=/^\w+$/;
    var x=reg.test(var1);
    if(x){
        x=reg.test(var2);
        if(x)
        {
            alert("注册成功");
        }
        else {alert("密码不符合标准")};
    }
    else {
        alert("用户名不符合标准");
    }
}