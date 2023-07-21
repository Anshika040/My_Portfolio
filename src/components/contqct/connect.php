<?php
   $firstname = $_POST['firstname'];
   $age = $_POST['age'];
   $weight = $_POST['weight'];
   $Email = $_POST['Email'];
   $health = $_POST['health'];
   
   $conn = new mysqli('localhost' , 'root' , '', 'test');
   if($conn->connect_error){
      die('Connection Failed : ' .$conn->connect_error);
   }
   else{
     $stmt = $conn->prepare("insert into registration(firstname,age,weight,Email,health)
     values(?,?,?,?,?)");
     $stmt->bind_param("sssssi", $firstname, $age, $weight,$Email, $health);
     $stmt->execute();
     echo "Data Successfully Entered";
     $stmt->close();
     $conn->close();
    }