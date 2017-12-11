

<?php
    // Start the session
    session_start();
    $userId = $_SESSION['UserId'];
    $userName = $_POST['usernameIn'];
    $password = $_POST['passwordIn'];

    include "navbar.html";

    if(empty($userName) || empty($password))
    {        
         DisplayErrorMessage();     
    }
    else
    {
        $numofRows = verifyCredentials($userName, $password);
        
        if($numofRows==0)
        {
            DisplayErrorMessage();
        }                        
        else
        {
           echo "<section>";
            echo '<h2><a href="DF.php">Create Discussion Forum</a></h2>';
            echo '<h2><a href="COURSEGroupIdAndForumID.php">View Discussion Forum</a></h2>';
            echo "</section>";
        }
    }
    
    

    function verifyCredentials($userName,$password )
    {
                
        include 'dbconnect.php';
        $UserId = intval($_SESSION['UserId']);
        $GroupId = intval($_SESSION["GroupId"]); 
        //echo $GroupId;
        
        $_SESSION['UserId'] = $UserId;
               
        $sql = oci_parse($conn, "SELECT username, password FROM joinscig
                where memberId=$UserId and GROUPID=$GroupId and username='$userName' and password='$password'");                                     
        
                if (!$sql) {
                  $e = oci_error();
                  echo $e; 	
                } //if (!$stid) {
                $result = oci_execute($sql);
                if (!$result) {
                  $e = oci_error();
                  echo $e; 	
                } 
        
                $results=array();
                $numrows = oci_fetch_all($sql, $results, null, null, OCI_FETCHSTATEMENT_BY_ROW);
                $_SESSION['GID'] =  $GroupId;
                //echo $_SESSION['GID'];
        
                return $numrows;
        
    }

    function DisplayErrorMessage()
    {           
        echo "Invalid Username/Passord. Please try again.";
        echo "<a href=CIGLogin.php>Go Back</a>";      
    }

    

?>

