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
        //$page = new Page;
        // 获取总条数
        //$count = $this->login->count();

        //$limit = $page->limit($count);

        //$res = $this->login->getData($limit);

        include 'View/login/index.html';
    }

    public function code()
    {
        include './Resources/code.php';
    }

    public function dologin()
    {
        $res = $this->login->doLogin();
        if($res){
            notice('登录成功', 'index.php');
        }
        notice('请重新输入账号和密码');
    }

    public function doDrop()
    {
        $res = $this->login->doDrop();

        header('location: index.php?c=login'); die;
    }

    public function doAdd()
    {
        $res = $this->user->doAdd();

        if($res){
            notice('新增成功', 'index.php?c=user&m=index');
        }
        notice('新增失败');
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


    // 删除用户
    public function doDel()
    {
        $this->user->doDel();

        header('location: index.php?c=user&m=index'); die;
    }

    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }

}
