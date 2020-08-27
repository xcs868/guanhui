<?php


class serController extends Controller
{
    private $index;

    public function __construct()
    {
        parent::__construct();
        $this->ser = new serModel;
    }

    /**
     * 根据状态获取新闻列表
     * created by YeXin at 2020/4/16 15:39
     */
    public function getNewsList()
    {
//        $sendData['pageId']    = $_REQUEST['pageID'];
//        $sendData['pageSize']  = $_REQUEST['pageSize'];
//        $sendData['news_txt0'] = $_REQUEST['news_txt0'];
//        $sendData['news_int0'] = $_REQUEST['news_int0'];

        $dataList = $this->ser->getData();
        if($dataList === false){
            $data = array('code'=>300,'mess'=>'请求数据失败!');
        }else{
            $data = array('code'=>200,'mess'=>'请求数据成功!','dataList'=>$dataList);
        }
        echo json_encode($data);
    }

    /**
     * 新闻详情
     * created by YeXin at 2020/4/16 16:30
     */
    public function newsDetail(){
        $sendData['news_mid']    = $_REQUEST['news_mid'];
        $dataList = $this->news->getFind($sendData);
        if($dataList === false){
            $data = array('code'=>300,'mess'=>'请求数据失败!');
        }else{
            $data = array('code'=>200,'mess'=>'请求数据成功!','newsData'=>$dataList);
        }
        echo json_encode($data);
    }

    //need
}
