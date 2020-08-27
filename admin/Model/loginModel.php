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
        $pwd = $_POST['pass'];

        // 2. 根据 账号和密码查询用户信息
        $res = $this->db
            ->field('*')
            ->where('per_vch0 = "'.$username.'" and per_vch1 = "'.($pwd).'" ')
            ->find();

        if(!empty($res) ){
            // 成功: 存储session
            $_SESSION['admin']['id'] = $res['per_mid'];
            $_SESSION['admin']['nickname'] = $res['per_vch0'];

            return $res;
        }else{
            notice('登录失败','index.php?c=login');
        }
        return $res;
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

    public function doEdit()
    {
        // 1. 接收 表单数据
        $id = $_GET['id'];

        // 2. 验证数据
        if( empty($_POST['pwd']) ){
            unset($_POST['pwd']);
            unset($_POST['repwd']);
        }else{
            // 自己写 ...
        }

        // 3. 准备sql
        $res = $this->db
            ->table('user')
            ->where('id = '.$id)
            ->update();
        return $res;
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