<?php

class ruleController extends Controller
{
    private $rule;

    public function __construct()
    {
        parent::__construct();
        $this->rule = new ruleModel;
    }

    // 浏览用户
    public function index()
    {
        include 'View/rule/index.html';
    }

    public function getData(){
        $page = $_POST['page'];
        $rows = $_POST['rows'];

        $count = $this->rule->count($page,$rows);

        $res = $this->rule->getData();

        $data = array('code'=>200,'mess'=>'亲,请求数据成功!','rows'=>$res,'total'=>$count,'page'=>$page);

        echo json_encode($data);

    }


    public function add()
    {
        include 'View/rule/add.html';
    }


    public function doAdd()		// 添加用户
    {
        $res = $this->rule->doAdd();

        if($res){
            $data = array('code'=>200,'mess'=>'亲,添加成功!');
        }else{
            $data = array('code'=>300,'mess'=>'亲,添加失败!');
        }

        echo json_encode($data);
    }


    public function edit()	// 编辑用户
    {
        $id = $_GET['rule_mid'];

        include './View/rule/edit.html?rule_mid='.$id;
    }

    public function getEditData(){
        $res = $this->rule->getFind();

        return $res;
    }

    public function doEdit()	// 编辑用户
    {
        $res = $this->rule->doEdit();

        // 5. 根据结果跳转页面
        if( $res ){
            notice('更新成功', 'index.php?c=rule&m=index');
        }
        notice('更新失败');
    }

    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }




}

?>