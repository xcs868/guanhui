<?php

class messageController extends Controller
{
    private $msg;

    public function __construct()
    {
        parent::__construct();
        $this->msg = new messageModel();
    }

    public function index()
    {
        include 'View/message/index.html';
    }

    public function getData(){
        $sendData['pageId']    = $_REQUEST['pageID'];
        $sendData['pageSize']  = $_REQUEST['pageSize'];

        $dataList = $this->msg->getData($sendData);
        $data = array('code'=>200,'mess'=>'请求数据成功!','dataList'=>$dataList);

        echo json_encode($data);

    }
}
