<?php
class loginModel
{
    private $db;

    public function __construct()
    {
        $this->db = new DB('`tm_per`');
    }

    public function getData()
    {
        $res = $this->db
            ->field('`id`, `tel`, `nickname`, `email`, `status`,`sex`,`regtime`')
            ->order('`regtime` desc')
            ->select();

        return $res;
    }

    public function doLogin()
    {
        // 1. 接收账号和密码
        $username = $_POST['username'];
        $pwd = $_POST['password'];

        // 手机格式
        $preg = '/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/x';
        if( !preg_match($preg, $username) ){
            $data = array('code'=>300,'mess'=>'手机号格式不正确!');
            return $data;
        }

        // 2. 根据 账号和密码查询用户信息
        $res = $this->db
            ->field('*')
            ->where('per_vch4 = "'.$username.'"')
            ->find();

        if(empty($res)){
            $data = array('code'=>300,'mess'=>'手机号账号不存在!');
            return $data;
        }else{
            if($res['per_vch1'] != $pwd){
                $data = array('code'=>300,'mess'=>'密码不正确!');
                return $data;
            }
        }

        if( !empty($res) ){
            // 成功: 存储session
            $_SESSION['admin']['id'] = $res['per_mid'];
            $_SESSION['admin']['nickname'] = $res['per_vch0'];
        }

        $data = array('code'=>200,'mess'=>'登录成功!');
        return $data;
    }

    public function getFind()
    {
        // 1. 接收id
        $id = $_GET['id'];

        // 2. 根据id 查询该用户的信息
        $res = $this->db
            ->field('id,tel, nickname, sex, icon,email')
            ->where('id = '.$id)
            ->find();
        return $res;
    }


    public function doRegist()
    {
        if(empty($_POST['username']) || empty($_POST['password']) || empty($_POST['phone']) || empty
            ($_POST['repass'])) {
            $data = array('code'=>300,'mess'=>'不能为空!');
            return $data;
        }
        // 手机格式
        $preg = '/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/x';
        if( !preg_match($preg, $_POST['phone']) ){
            $data = array('code'=>300,'mess'=>'手机号格式不正确!');
            return $data;
        }

        if($_POST['password'] != $_POST['repass']){
            $data = array('code'=>300,'mess'=>'俩次密码不一致!');
            return $data;
        }
        $finds = $this->db
            ->field('*')
            ->where('`per_vch4` = '.$_POST['phone'])
            ->find();

        if(!empty($finds)){
            $data = array('code'=>300,'mess'=>'手机号重复!');
            return $data;
        }

        $add = array();
        $add['per_vch0'] = $_POST['username'];
        $add['per_vch1'] = $_POST['password'];
        $add['per_vch2'] = $_POST['username'];
        $add['per_vch4'] = $_POST['phone'];
        $add['per_int0'] = 1;   // 前台账号
        $add['per_int9'] = 1;   // 可登陆
        $add['per_dat0'] = date('Y-m-d H:i:s',time());
        $add['per_inday'] = date('Y-m-d H:i:s',time());
        $add['per_upday'] = date('Y-m-d H:i:s',time());

        $res = $this->db->insert($add);

        $data = array('code'=>200,'mess'=>'注册成功!','rows'=>$res);

        return $data;

    }

    public function doDel()
    {
        // 1. 接收 id
        $id = $_GET['id'];

        // 2. 验证数据
        if( empty($id) ){
            header('location: index.php?c=user&m=index');
        }

        // 3. 准备sql
        $sql = 'delete from `user` where id = '.$id;

        $this->pdo = new PDO(DSN, USER,PWD);


        // 4. 执行sql
        $res = $this->pdo->exec($sql);

    }

    // 统计
    public function count()
    {
        $res = $this->db
            ->field(' count(id) as total ')
            ->select();

        return $res[0]['total'];
    }

    public function doDrop()
    {
        unset($_SESSION['admin']);
        return $_SESSION['admin'];
    }


}
