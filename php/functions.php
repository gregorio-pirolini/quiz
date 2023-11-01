<?php

//$themeLength = 5;
$tagLength = 100;
$text = 6500;
// sattinise and trim
function sanitizeAndTrim($val)
{
    $val = trim($val);
    return htmlspecialchars($val, ENT_QUOTES, 'UTF-8');
}
// test Length
function testLength($val, $length)
{
    if (strlen($val) > $length) {
        return false;
    }
    return true;
}

// put back to br before going to json and javascript and <b> and </b>
function putBrBack($val)
{
    $find = array("&lt;br&gt;", "&lt;b&gt;", "&lt;/b&gt;");
    $replace = array("<br>", "<b>", "</b>");
    $result = str_replace($find, $replace, $val);
    return $result;
}

test it s a number bigger than 0
function bigger0($val)
{
    $answer = false  ;
    if($val>0) {
        $answer = true ;
    }
    return $answer;
}

function moreThan0Length($arr)
{

    $answer = false  ;
    if(count($arr)>0) {
        $answer = true ;
    }
    return $answer;
}

function testNotEmpty($val)
{

    $answer = false  ;
    if(strlen($val)>0) {
        $answer = true ;
    }
    return $answer;
}
