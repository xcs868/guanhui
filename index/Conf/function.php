<?php
/**
 * [notice 提示并跳转]
 * @param  string  $info [提示信息]
 * @param  string  $url  [跳转地址, 默认跳转上一级来源地址]
 * @param  integer $time [等待时间, 默认3s]
 */
function notice($info, $url = '', $time = 0.05)
{
    echo '<div style="width: 100%; height: 100%; background: rgba(0,0,0,0.6); position: fixed; left: 0; top: 0;
    "></div>';
    echo '<div style="width: 400px; height: 200px; text-align: center; line-height: 200px; background: #fff;
     position: fixed; left: 32%; top: 30%;"> '.$info.' </div>';

    if($url == ''){
        $url = $_SERVER['HTTP_REFERER'];
    }

    // 任何跳转代码, 后面补die
    echo '<meta http-equiv="refresh" content="'.$time.';url='.$url.'">'; die;

}


function imgUrl($fileName)
{
    $url = '../Upload/';
    $url .= substr($fileName,0,4).'/';
    $url .= substr($fileName,4,2).'/';
    $url .= substr($fileName,6,2).'/';
    $url .= $fileName;

    return $url;
}





?>
