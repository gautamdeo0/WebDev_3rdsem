<?php
if(isset($_POST['fname']))
{	
	$server_name="localhost";
	$username="root";
	$password="";
	// $database_name="eventregistration";

	$conn=mysqli_connect($server_name,$username,$password);
	//now check the connection
	if(!$conn)
	{
		die("Connection Failed:" . mysqli_connect_error());

	}

		$FullName = $_POST['fname'];
		$Email = $_POST['femail'];
		$Phone = $_POST['fphone'];
		$USN = $_POST['fusn'];
		$Branch = $_POST['fbranch'];
		$Events = $_POST['fevt'];

		$sql_query = "INSERT INTO `eventregistration`.`coding_event` (`FullName`,`Email`,`Phone`,`USN`,`Branch`,`Event`)
		VALUES ('$FullName','$Email','$Phone','$USN','$Branch','$Events')";
		// mysqli_query($conn, $sql_query);

		if (mysqli_query($conn, $sql_query)) 
		{
			echo "New Details Entry inserted successfully !";
		} 
		else
		{
			echo "Error: " . $sql . "" . mysqli_error($conn);
		}
		mysqli_close($conn);
}
?>
