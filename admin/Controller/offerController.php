<?php

class offerController extends Controller
{
    private $offer;

    public function __construct()
    {
        parent::__construct();
        $this->offer = new offerModel;
    }

    // 浏览用户
    public function index()
    {
        include 'View/offer/index.html';
    }

    public function getData(){
        $page = $_POST['page'];
        $rows = $_POST['rows'];

        $count = $this->offer->count($page,$rows);

        $page_totle = ceil($count / ROWS);

        $res = $this->offer->getData();

        foreach ($res as $key=>&$val){
            $val['mid'] = $key+1;
        }

        if (!empty($_POST['search'])) {
            $search = $_POST['search'];
        }else{
            $search = '';
        }

        $data = array('code'=>200,'mess'=>'亲,请求数据成功!','rows'=>$res,'total'=>4,'page'=>$page);

        echo json_encode($data);

    }







}

?>