docker run -p 80:80 \
       	-d \
       	-v "$(pwd)":/var/www/html/ \
       	$@
