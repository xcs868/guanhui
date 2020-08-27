<?php

class messageController extends Controller
{
    private $msg;

    public function __construct()
    {
        parent::__construct();
        $this->msg = new messageModel();
    }

    public function addMessage(){
        $sendData['msg_txt0'] = $_REQUEST['msg_txt0'];
        $res = $this->msg->doAdd($sendData);

        if($res === false){
            $data = array('code'=>300,'mess'=>'操作失败!');
        }else{
            $data = array('code'=>200,'mess'=>'操作成功!');
        }

        echo json_encode($data);
    }

    //need
}
