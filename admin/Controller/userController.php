<?php

class userController extends Controller
{
    private $user;

    public function __construct()
    {
        parent::__construct();
        $this->user = new userModel;
    }

    // 浏览用户
    public function index()
    {
        include 'View/user/index.html';
    }

    public function getData(){
        $page = $_POST['page'];
        $rows = $_POST['rows'];

        $count = $this->user->count($page,$rows);

        $page_totle = ceil($count / ROWS);

        $res = $this->user->getData();

        if (!empty($_POST['search'])) {
            $search = $_POST['search'];
        }else{
            $search = '';
        }

        $data = array('code'=>200,'mess'=>'亲,请求数据成功!','rows'=>$res,'total'=>$count,'page'=>$page);

        echo json_encode($data);

    }
    

    public function add()
    {
        include 'View/user/add.html';
    }

    public function top(){
        include 'View/user/top.html';
    }

    public function code()
    {
        include './Resources/code.php';
    }

    public function doAdd()		// 添加用户
    {
        $res = $this->user->doAdd();

        if($res){
            $data = array('code'=>200,'mess'=>'亲,添加成功!');
        }else{
            $data = array('code'=>300,'mess'=>'亲,添加失败!');
        }

        echo json_encode($data);
    }


    public function details()	// 查看个人信息
    {
        $res = $this->user->getFind();

        include './View/user/details.html';
    }


    public function edit()	// 编辑用户
    {
        $res = $this->user->getFind();

        include './View/user/edit.html';
    }

    public function doEdit()	// 编辑用户
    {
        $res = $this->user->doEdit();

        // 5. 根据结果跳转页面
        if( $res ){
            notice('更新成功', 'index.php?c=user&m=index');
        }
        notice('更新失败');
    }

    public function Status()
    {
        $res = $this->user->doStatus();
        header('location: index.php?c=user&m=index'); die;
    }


    public function doDel()		// 删除用户
    {
        $res = $this->user->doDel();

        header('location: index.php?c=user&m=index'); die;
    }

    public function search()
    {

        $res = $this->user->getData($limit);

        header('location: index.php?c=user&m=index'); die;
    }





    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }




}

?>