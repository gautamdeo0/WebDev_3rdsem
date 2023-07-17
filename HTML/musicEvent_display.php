<?php

require_once __DIR__ . '/config.php';

class API {

function Select(){

$db = new Connect;
$music_event = array();
$data = $db->prepare('SELECT * fROM music_event ORDER BY USN');
$data->execute();
while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){  $music_event[$OutputData['USN']] = array(
'FullName' => $OutputData["FullName"],
'Email' => $OutputData['Email'],
'Phone' => $OutputData[ 'Phone' ],
'USN' => $OutputData[ 'USN' ],
'Branch' => $OutputData[ 'Branch' ],
'Event' => $OutputData[ 'Event' ]
);
}
return json_encode($music_event);
}
}

$API = new API;

header('Content-Type: application/json');
echo $API->Select();

?>