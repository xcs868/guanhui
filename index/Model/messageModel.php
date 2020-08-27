<?php
class messageModel
{
    private $db;

    public function __construct()
    {
        $this->db = new DB('tb_msg');
    }

    /**
     * 添加留言
     * @return bool|false|int|string
     * created by YeXin at 2020/4/16 15:43
     */
    public function doAdd($sendData)
    {
        $perModel = new userModel();
        $perData = $perModel->getUserByPerMid($_SESSION['admin']['id']);

        if($perData == false){
            return false;
        }
        $data['msg_mid']  = $this->getNewsMaxID('msg_mid');
        $data['msg_vch0'] = $perData['per_vch4'];
        $data['msg_txt0']  = $sendData['msg_txt0'];
        $data['msg_inday'] = date('Y-m-d H:i:s',time());
        $data['msg_upday'] = date('Y-m-d H:i:s',time());

        $res = $this->db
            ->insert($data);

        return $res;
    }

    /**
     * 获取最大的Mid
     * @param $field
     * @return int|mixed
     * created by YeXin at 2020/4/16 15:47
     */
    public function getNewsMaxID($field){
        //通过调用自己封装的方法进行查询
        $res = $this->db->field('max(' . $field . ') as MaxID')->select();
        //select方法返回的是一个二维数组
        if($res===false){
            return 1;
        }else{
            return $res[0]['MaxID']+1;
        }
    }

    //need
}
