<?php
    header('content-type:text/html;charset=utf-8');
    $mysql_conf=array(
        'host'=>'127.0.0.1:3306',
        'un'=>'root',
        'pwd'=>'',
        'db'=>'demo'
    );

    $mysqli=@new mysqli($mysql_conf['host'],$mysql_conf['un'],$mysql_conf['pwd']);

    if($mysqli->connect_errno){
        die('连接错误'.$mysqli->connect_errno);
    }

    $mysqli->query("set names 'utf8';");

    $select_db=$mysqli->select_db($mysql_conf['db']);

    if(!$select_db){
        die('连接数据表错误'.$mysqli->error);
    }
?>