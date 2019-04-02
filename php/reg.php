<?php
    include('db.php');

    $user=$_REQUEST['user'];
    $pwd=$_REQUEST['pwd'];

    $sql="select * from users where name='$user'";
    $sql1="insert into users(name,pwd) values('$user','$pwd')";

    $res=$mysqli->query($sql);
    if($res->num_rows>0){
        echo '<script>alert("用户名已被使用，跳转重新注册");location.href="../reg.html";</script>';
    }else{
        $mysqli->query($sql1);
        echo '<script src="../js/cookie.js"></script>';
        echo "<script>cookie.set('username','$user',2);</script>";
        echo '<script>alert("注册成功，点击跳转");location.href="../xiaomi.html";</script>';
    }
    $mysqli->close();
?>