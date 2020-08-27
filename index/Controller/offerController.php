<?php
class offerController
{
    private $offer;

    public function __construct()
    {
        $this->offer = new offerModel;
    }

    // 浏览用户
    public function index()
    {
        include 'View/offer/index.html';
    }

    public function doAdd(){
        if( empty($_SESSION['admin']['id']) ){
            $data = array('code'=>300,'mess'=>'请先登录!');

            echo json_encode($data);die;
        }
        $res = $this->offer->saveData();
        
        echo json_encode($res);
    }

    public function searchData(){
        $res = $this->offer->getData();

        $data = array('code'=>200,'mess'=>'请求成功!','rows'=>$res);

        echo json_encode($data);
    }

    // 编辑用户
    public function edit()
    {
        $id = $_GET['id'];

        $res = $this->offer->getFind();
        include 'View/user/edit.html';
    }

    public function doEdit()
    {
        $res = $this->offer->doEdit();

        // 5. 根据结果跳转页面
        if( $res ){
            notice('更新成功', 'index.php?c=user&m=index');
        }
        notice('更新失败');
    }


    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }





}