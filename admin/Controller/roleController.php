<?php

class roleController extends Controller
{
    private $role;

    public function __construct()
    {
        parent::__construct();
        $this->role = new roleModel;
    }

    // 浏览用户
    public function index()
    {
        include 'View/role/index.html';
    }

    public function getData(){
        $page = $_POST['page'];
        $rows = $_POST['rows'];
        
        $count = $this->role->count($page,$rows);

        $page_totle = ceil($count / ROWS);

        $res = $this->role->getData();
        
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
        include 'View/role/add.html';
    }

    public function top(){
        include 'View/role/top.html';
    }

    public function code()
    {
        include './Resources/code.php';
    }

    public function doAdd()		// 添加用户
    {
        $res = $this->role->doAdd();

        if($res){
            $data = array('code'=>200,'mess'=>'亲,添加成功!');
        }else{
            $data = array('code'=>300,'mess'=>'亲,添加失败!');
        }

        echo json_encode($data);
    }


    public function details()	// 查看个人信息
    {
        $res = $this->role->getFind();

        include './View/role/details.html';
    }


    public function edit()	// 编辑用户
    {
        $res = $this->user->getFind();

        include './View/user/edit.html';
    }

    public function doEdit()	// 编辑用户
    {
        $res = $this->role->doEdit();

        // 5. 根据结果跳转页面
        if( $res ){
            notice('更新成功', 'index.php?c=role&m=index');
        }
        notice('更新失败');
    }

    public function Status()
    {
        $res = $this->role->doStatus();
        header('location: index.php?c=role&m=index'); die;
    }


    public function doDel()		// 删除用户
    {
        $res = $this->role->doDel();

        header('location: index.php?c=user&m=index'); die;
    }

    public function search()
    {

        $res = $this->role->getData();

        header('location: index.php?c=role&m=index'); die;
    }


    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }




}

?>