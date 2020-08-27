<?php

class userModel
{
    private $db;

    public function __construct()
    {
        $this->db = new DB('tm_per');
    }

    public function getData()
    {
        // 接收 搜索选项
        $where = null;
        $rows = $_POST['rows'];
        $page = ($_POST['page'] - 1)*$rows;

        if( !empty($_POST['username']) ){
            $where = ' `per_vch0` like "%'.$_POST['username'].'%"';
            $res = $this->db 	// 搜索为空
                ->field('*')
                ->where($where)
                ->order('`per_inday` desc')
                ->limit($page.','.$rows)
                ->select();
        }else{
            $res = $this->db 	// 搜索不为空
                ->field('*')
                ->order('`per_inday` desc')
                ->limit($page.','.$rows)
                ->select();
        }


        return $res;
    }

    public function doAdd()	// 添加前台用户
    {
        // 1. 接收新增数据
        $data = array();
        $data['per_vch0'] = $_POST['username'];
        $data['per_vch4'] = $_POST['phone'];
        $data['per_vch5'] = $_POST['email'];
        $data['per_vch6'] = $_POST['role'];
        $data['per_vch1'] = $_POST['pass'];
        $data['per_int9'] = 1;
        $data['per_inday'] = date('Y-m-d H:i:s',time());
        $data['per_upday'] = date('Y-m-d H:i:s',time());
        $data['per_dat0'] = date('Y-m-d H:i:s',time());

        // 插入数据库
        $res = $this->db
            ->insert($data);

        return $res;
    }

    public function getFind()	// 单查用户信息
    {
        // 1. 接收id
        $id = $_GET['per_mid'];

        // 2. 根据id 查询该用户的信息
        $res = $this->db
            ->field('*')
            ->where('per_mid = '.$id)
            ->find();
        return $res;
    }

    /**
     * 根据Mid查找用户信息
     * @param $perMid
     * @return bool|mixed
     * created by YeXin at 2020/4/16 16:17
     */
    public function getUserByPerMid($perMid)
    {
        $res = $this->db
            ->field('*')
            ->where('per_mid = '.$perMid)
            ->find();
        return $res;
    }

    public function doEdit()	// 修改用户信息
    {
        // 1. 接收 表单数据
        $id = $_GET['id'];
        $tel = $_POST['tel'];
        $editcode = $_POST['editcode'];
        // var_dump( $_GET['id']);die;

        // 验证
        // 手机格式
        $preg = '/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/x';
        if( !preg_match($preg, $tel) ){
            notice('手机号码格式不正确');
        }
        // 验证码
        if ( $editcode !== $_SESSION['yzm'] ) {
            notice('您输入的验证码不正确');
        }

        unset($_POST['editcode']);
        // 3. 准备sql
        $res = $this->db
            ->where('id = '.$id)
            ->update();

        return $res;

    }

    public function doDel()	// 删除用户信息
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

    public function doStatus()
    {
        // 1. 接收 数据
        $id = $_GET['id'];

        // 2. 根据 id 查询user表
        $status = $this->db
            ->field('status')
            ->table('user')
            ->where('id = '.$id)
            ->find();

        $status['status'] = $status['status'] == 1?2:1;

        $res = $this->db
            ->where('id = '.$id)
            ->update($status);
        return $res;

    }

    public function count()
    {
        $page = $_POST['page'] - 1;
        $rows = $_POST['rows'];

        if(!empty($_POST['username'] )){
            $where = ' `per_vch0` like "%'.$_POST['username'].'%"';
            $res = $this->db
                ->field('count(per_mid) as total')
                ->where($where)
                ->select();
        }else{
            $res = $this->db
                ->field('count(per_mid) as total')
                ->select();
        }

        return $res[0]['total'];
    }

    // need


}








?>
