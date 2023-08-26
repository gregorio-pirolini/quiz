<?php
$param_password = password_hash("password", PASSWORD_DEFAULT); // Creates a password has
echo $param_password;