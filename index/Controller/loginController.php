<?php

class loginController
{
    private $login;

    public function __construct()
    {
        $this->login = new loginModel;
    }

    // 浏览用户
    public function index()
    {
        include 'View/login/index.html';
    }

    // 找回密码
    public function retPass()
    {
        include 'View/login/retPass.html';
    }

    // 注册页面
    public function regist(){
        include 'View/login/regist.html';
    }

    // 做注册操作
    public function doRegist(){
        $res = $this->login->doRegist();

        echo json_encode($res);
    }

    public function dologin()
    {
        $res = $this->login->doLogin();

        echo json_encode($res);

    }


    // 编辑用户
    public function edit()
    {
        $id = $_GET['id'];

        $res = $this->user->getFind();
        include 'View/user/edit.html';
    }

    public function doEdit()
    {
        $res = $this->user->doEdit();

        // 5. 根据结果跳转页面
        if( $res ){
            notice('更新成功', 'index.php?c=user&m=index');
        }
        notice('更新失败');
    }

    public function doDrop()
    {
        $res = $this->login->doDrop();

        header('location: index.php?c=login'); die;
    }


    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }

}