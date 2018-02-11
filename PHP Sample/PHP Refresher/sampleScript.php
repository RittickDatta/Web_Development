<!DOCTYPE html>
<html>
    <body>
        Hello
        <?php
        // Single Line Comment
        /*
        This is a
        multi-line comment.
        */
        echo "My first PHP script!<br>";
        ECHO "PHP is not case sensitive";

        $color = "red";
        echo "<br>My car is ".$color;


        $txt = "<br> Hello World";
        $TXT = "<br>  Bye";
        $x = 10;
        $y = 10.4;

        echo $txt;
        echo $TXT;
        echo $x + $y;


        $p = 5;
        function myTest(){
            $p = 4;
            echo "<p> Variable p inside funciton $p</p>";
        }

        myTest();

        echo "<p> Variable p outside funciton $p</p>";

        function anotherTest(){
            global $x, $y;
            $y = $x + $y;
        }

        anotherTest();
        echo $y;

        function globalScopeTest(){
            $GLOBALS['y'] = $GLOBALS['y'] + $GLOBALS['y'];
        }

        globalScopeTest();
        echo $y;

        function test(){
            static $x =0;
            echo "<br>".$x;
            $x++;
        }

        test();
        test();
        test();
        
        echo "<br>", "Multiple"," parameters",".";
        print("<br> This is a print statement");
        print("<br> Value of x:".$x.": Value of y:".$y);
        print("<br>".($x + $y));
        
        var_dump($x);
        var_dump($y);
        $z=true;
        var_dump($z);
        
        $cars = array("honda", "merc", "bmw");
        var_dump($cars);
        
        class Car {
            function Car(){
                $this->model = "VM";
            }
        }
        
        $bmw = new Car();
        
        echo $bmw->model;
        $x = null;
        var_dump($x);
        
        echo strlen("Hello Guys!");
        echo "<br>";
        echo str_word_count("Hello again!");
        echo "<br>";
        echo strrev("You Rock");
        echo "<br>";
        echo strpos("Hello World!", "World");
        echo "<br>";
        echo str_replace("world", "Dolly", "Hello world!");
        
        define("Greetings", "Welcome!", true);
        echo "<br>";
        echo greetings;
        
        define ("user", "Rittick");
        
        function aFun(){
            echo user;
        }
        
        aFun();
        
        echo "<br>".($x % $y);
        $x = 1;
        $x += 1;
        echo $x;
        
        $x = 10;
        $y = 10.0;
        echo "<br>";
        var_dump($x == $x);
        echo "<br>";
        var_dump($x === $y);
        
        echo ++$x."<br>";
        echo $x++;
          
        echo "<br>";
        $x =1;
        $y =2;
        if($x == 1 and $y ==2){
            echo "AND!";
        }
        
        if($x == 1 or $y ==3){
            echo "OR!";
        }
        
        if($x == 1 xor $y ==3){
            echo "XOR!";
        }
        
        $txt1 = "Hello";
        $txt2 = "World";
        $txt1 .= $txt2;
        echo "<br>".$txt1;
        
        $l = array("1"=>"red","2"=>"blue");
        $k = array("3"=>"green","4"=>"yellow");
        
        print_r($l + $k);
        var_dump($l == $k);
        
        $t = date("H");
        echo $t;
        if($t < "20"){
            echo "Good day!";
        } else {
            echo "Good Night!";
        }
        
        echo "<br>";
        $fav = "green";
        
        switch($fav){
            case "red":
                echo "Fav color is red";
                break;
            case "blue":
                echo "Fav color is blue";
                break;
            default:
                echo "Do you even have a fav color?";
                
        }
        
        $x =1;
        
        while($x <5){
            echo $x;
            $x++;
        }
        
        echo "<br>";
        $x =1;
        do {
            echo $x;
            $x++;
        }while($x <5);
        
        echo "<br>";
        for($x=0; $x<5; $x++){
            echo $x;
        }
        
        echo "<br>";
        $colors = array("red","blue","green");
        foreach($colors as $value){
            echo "$value<br>";
        }
        
        function familyName($firstName){
            echo "$firstName Datta";
        }
        
        familyName("Rittick");
        familyName("Bolin");
        
        function memberBirthday($firstName, $birthYear){
            echo "$firstName was born in $birthYear";
        }
        memberBirthday("Rittick", 1990);
        
        function height($h = 170){
            echo "His height is $h";
        }
        
        height(120);
        height();
        
        function sum($x, $y){
            $z = $x + $y;
            return $z;
        }
        
        echo "Sum of 1 and 2 is".sum(1, 2);
        
        
        $cars = array("bmw", "vw","hundai");
        echo $cars[0];
        echo $cars[1];
        echo $cars[2];
        
        echo "<br>";
        echo count($cars);
        
        
        for($i=0; $i<count($cars); $i++){
            echo $cars[$i];
            echo "<br>";
        }
        
        $age = array("Rittick"=>27, "Harshit"=>28);
        echo $age["Rittick"];
        echo $age["Harshit"];
        
        foreach($age as $x=>$x_value){
            echo "Key= ". $x .", Value=".$x_value;
            echo "<br>";
        }
        
        rsort($cars);
        
        for($i=0; $i<count($cars); $i++){
            echo $cars[$i];
            echo "<br>";
        }
        
        echo "<br>";
        echo $_SERVER['PHP_SELF'];
        echo "<br>";
        echo $_SERVER['SERVER_NAME'];
        echo "<br>";
        echo $_SERVER['HTTP_HOST'];
        echo "<br>";
        echo $_SERVER['HTTP_REFERER'];
        echo "<br>";
        echo $_SERVER['HTTP_USER_AGENT'];
        echo "<br>";
        echo $_SERVER['SCRIPT_NAME'];
        
        
        ?>



    </body>
</html> 