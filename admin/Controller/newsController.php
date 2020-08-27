<?php
class newsController extends Controller
{
    private $news;

    public function __construct()
    {
        parent::__construct();
        $this->news = new newsModel();
    }

    public function index()
    {
        include 'View/news/index.html';
    }

    public function add()
    {
        $newsMid = $_REQUEST['news_mid'];
        $res = $this->news->getFindA($newsMid);
        include 'View/news/add.html';

    }

    /**
     * 添加新闻
     * created by YeXin at 2020/4/14 16:54
     */
    public function doAdd()
    {
        $res = $this->news->doAdd();

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
        $sendData['news_mid'] = $_REQUEST['news_mid'];
        $res = $this->news->getFind($sendData);

        if($res === false){
            $data = array('code'=>300,'mess'=>'添加失败!');
        }else{
            $data = array('code'=>200,'mess'=>'添加成功!','data'=>$res);
        }

        echo json_encode($data);
    }

    public function uploadImg()
    {
        $data  = $this->news->uploadImg();
        echo json_encode($data);
    }

    /**
     * 获取数据列表
     * created by YeXin at 2020/4/15 16:46
     */
    public function getData(){
        $sendData['pageId']    = $_REQUEST['pageID'];
        $sendData['pageSize']  = $_REQUEST['pageSize'];
        $sendData['news_txt0'] = $_REQUEST['news_txt0'];
        $sendData['news_int0'] = $_REQUEST['news_int0'];

        $dataList = $this->news->getData($sendData);
        $data = array('code'=>200,'mess'=>'请求数据成功!','dataList'=>$dataList);

        echo json_encode($data);

    }

    /**
     * 删除新闻
     * created by YeXin at 2020/4/15 16:48
     */
    public function doDel()
    {
        $sendData['news_mid'] = $_REQUEST['news_mid'];
        $res = $this->news->doDel($sendData);

        header('location: index.php?c=news&m=index'); die;
    }


    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }

}

?>
