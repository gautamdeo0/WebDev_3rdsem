<?php

require_once __DIR__ . '/config.php';

class API {

function Select(){

$db = new Connect;
$academic_event = array();
$data = $db->prepare('SELECT * fROM academic_event ORDER BY USN');
$data->execute();
while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){  $academic_event[$OutputData['USN']] = array(
'FullName' => $OutputData["FullName"],
'Email' => $OutputData['Email'],
'Phone' => $OutputData[ 'Phone' ],
'USN' => $OutputData[ 'USN' ],
'Branch' => $OutputData[ 'Branch' ],
'Events' => $OutputData[ 'Events' ]
);
}
return json_encode($academic_event);
}
}

$API = new API;

header('Content-Type: application/json');
echo $API->Select();

?>