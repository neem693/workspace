<?php
$xml = simplexml_load_file ( "note.xml" ) or die ( "Error: cannot create object" );
print_r ( $xml );

?>