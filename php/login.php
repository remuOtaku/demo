<?php
    include('db.php');

    $username=$_POST['user'];
    $password=$_POST['pwd'];

    $sql="select * from users where name='$username'and pwd='$password'";

    $result=$mysqli->query($sql);
    // var_dump($result) ;

    if($result->num_rows>0){
        echo "<script src='../js/cookie.js'></script>";
        echo "<script>cookie.set('username','$username',2)</script>";
        echo "<script>alert('登录成功,点击跳转');history.go(-2);</script>";
    }else{
        echo "<script>alert('登录失败,点击跳转');location.href='../com.html';</script>";
    }
    $mysqli->close();
?>