FROM php:7.4-apache
COPY ./docker/apache2.conf /etc/apache2/apache2.conf
RUN ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/rewrite.load
