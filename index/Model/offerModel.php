<?php
class offerModel
{
    private $db;

    public function __construct()
    {
        $this->db = new DB('`tm_off`');
    }

    public function getData()
    {
        $per_mid = $_SESSION['admin']['id'];
        $where = ' `off_int2` = '.$per_mid;
        $res = $this->db
            ->field('*')
            ->where($where)
            ->order(' `off_dat0` desc')
            ->select();

        return $res;
    }

    public function saveData()
    {
        $post = $_REQUEST;
        
        // 手机格式
        $preg = '/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/x';
        if( !preg_match($preg, $post['phone']) ){
            $data = array('code'=>300,'mess'=>'手机号格式不正确!');
            return $data;
        }

        $add = array();
        $add['off_vch0'] = $post['start'];
        $add['off_vch1'] = $post['end'];
        $add['off_vch2'] = $post['nickname'];
        $add['off_int0'] = $post['weight'];
        $add['off_vch3'] = $post['contact'];
        $add['off_vch4'] = $post['phone'];
        $add['off_int2'] = $_SESSION['admin']['id'];
        $add['off_dat0'] = date('Y-m-d H:i:s',time());
        $add['off_inday'] = date('Y-m-d H:i:s',time());
        $add['off_upday'] = date('Y-m-d H:i:s',time());
        
        $res = $this->db->insert($add);
        $data = array('code'=>200,'mess'=>'产品报价成功!','rows'=>$res);

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


}