<?php 
    $fname = filter_var(trim($_POST['fname']),FILTER_SANITIZE_STRING); 
    $lname = filter_var(trim($_POST['lname']),FILTER_SANITIZE_STRING); 
    $gender = filter_var(trim($_POST['gender']),FILTER_SANITIZE_STRING); 
    $weight = filter_var(trim($_POST['weight']),FILTER_SANITIZE_STRING); 
    $id = filter_var(trim($_POST['id']),FILTER_SANITIZE_STRING); 
    $birthday = filter_var(trim($_POST['birthday']),FILTER_SANITIZE_STRING); 
    $ph_number = filter_var(trim($_POST['ph_number']),FILTER_SANITIZE_STRING); 
    $running_way = filter_var(trim($_POST['km']),FILTER_SANITIZE_STRING); 
 
 
    // if(mb_strlen($login)<5 || mb_strlen($login)>90){ 
    //     echo "Unvalid length of login"; 
    //     exit(); 
    // } else if(mb_strlen($name)<3 || mb_strlen($name)>50){ 
    //     echo "Unvalid length of name"; 
    //     exit(); 
    // } else if(mb_strlen($pass)<2 || mb_strlen($pass) > 6){ 
    //     echo "Unvalid length of password (from 2 to 6)"; 
    //     exit(); 
    // } 
 
    $mysql = new mysqli('localhost','root','','final-project-bd'); 
    $mysql->query("INSERT INTO users (fname,lname,gender,mass,id,birthday,ph_number,running_way) VALUES('$fname','$lname','$gender','$weight','$id','$birthday','$ph_number','$running_way')"); 
    $mysql->close(); 
 
    header('Location: http://localhost:80/ggg/formForBack.html'); 
?>