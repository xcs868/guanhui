<?php
// 后台中心控制器
require './Conf/config.php';

function __autoload($class)
{
    if( file_exists('Controller/'.$class.'.php')  ){
        include 'Controller/'.$class.'.php';
    }elseif( file_exists('Model/'.$class.'.php') ){
        include 'Model/'.$class.'.php';
    }elseif( file_exists('./Conf/'.$class.'.php') ){
        include './Conf/'.$class.'.php';
    }elseif(file_exists('./Resource/'.$class.'.php')){
        include './Resource/'.$class.'.php';
    }else{
        notice('您访问的页面不存在');
    }
}

$c = empty($_GET['c'])?'index':$_GET['c'];
$c .= 'Controller';
$m = empty($_GET['m'])?'index':$_GET['m'];


$class = new $c;
$class->$m();