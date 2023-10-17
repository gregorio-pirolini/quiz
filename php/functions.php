<?php

// sattinise and trim
function sanitizeAndTrim($val)
{
    $val = trim($val);
    return htmlspecialchars($val, ENT_QUOTES, 'UTF-8');
}

// put back to br before going to json and javascript and <b> and </b>
function putBrBack($val)
{
    $find = array("&lt;br&gt;", "&lt;b&gt;", "&lt;/b&gt;");
    $replace = array("<br>", "<b>", "</b>");
    $result = str_replace($find, $replace, $val);
    return $result;
}