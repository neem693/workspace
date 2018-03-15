<?php
$str = 'one,two,three,four';

// zero limit
print_r(explode(',',$str,0));

// positive limit
print_r(explode(',',$str,2));

// negative limit
print_r(explode(',',$str,-1));
?> 