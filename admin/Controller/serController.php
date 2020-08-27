<?php

class serController extends Controller
{
    private $ser;

    public function __construct()
    {
        parent::__construct();
        $this->ser = new serModel();
    }

    public function index()
    {
        include 'View/ser/index.html';
    }

    public function add()
    {
        $serMid = $_REQUEST['ser_mid'];
        $res = $this->ser->getFindA($serMid);
        include 'View/ser/add.html';

    }

    /**
     * 添加新闻
     * created by YeXin at 2020/4/14 16:54
     */
    public function doAdd()
    {
//        $da = $_REQUEST;
//        var_dump($da);die;
        $res = $this->ser->doAdd();

        if($res === false){
            $data = array('code'=>300,'mess'=>'操作失败!');
        }else{
            $data = array('code'=>200,'mess'=>'操作成功!');
        }

        echo json_encode($data);
    }

    /**
     * 新闻信息
     * created by YeXin at 2020/4/15 16:02
     */
    public function findData()
    {
        $sendData['ser_mid'] = $_REQUEST['ser_mid'];
        $res = $this->ser->getFind($sendData);

        if($res === false){
            $data = array('code'=>300,'mess'=>'添加失败!');
        }else{
            $data = array('code'=>200,'mess'=>'添加成功!','data'=>$res);
        }

        echo json_encode($data);
    }

    public function uploadImg()
    {
        $data  = $this->ser->uploadImg();
        echo json_encode($data);
    }

    /**
     * 获取数据列表
     * created by YeXin at 2020/4/15 16:46
     */
    public function getData(){
        $sendData['pageId']    = $_REQUEST['pageID'];
        $sendData['pageSize']  = $_REQUEST['pageSize'];
        $sendData['ser_txt0'] = $_REQUEST['ser_txt0'];
        $sendData['ser_int0'] = $_REQUEST['ser_int0'];

        $dataList = $this->ser->getData($sendData);
        $data = array('code'=>200,'mess'=>'请求数据成功!','dataList'=>$dataList);

        echo json_encode($data);

    }

    /**
     * 删除新闻
     * created by YeXin at 2020/4/15 16:48
     */
    public function doDel()
    {
        $sendData['ser_mid'] = $_REQUEST['ser_mid'];
        $res = $this->ser->doDel($sendData);

        header('location: index.php?c=news&m=index'); die;
    }


    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }

}

?>
