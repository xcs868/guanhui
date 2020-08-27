<?php
class indexController extends Controller
{
    private $index;

    public function __construct()
    {
        parent::__construct();
        $this->index = new indexModel;
    }

    public function index()
    {
        include 'View/index/index.html';
    }

    public function welcome(){
        include 'View/index/welcome.html';
    }

    public function top()
    {
        include 'View/index/top.html';
    }
    public function left()
    {
        include 'View/index/left.html';
    }
    public function main()
    {
        $data = $this->index->Count();

        include 'View/index/main.html';
    }

    public function errors()
    {
        include './View/error.html';
    }

    // 关于冠晖
    public function aboutGuanHui(){
        include 'View/introduce/introduce.html';
    }
    // 新闻动态
    public function newtrend(){
        include 'View/dynamic/dynamic.html';
    }
    // 客户服务
    public function customer(){
        include 'View/customer/customer.html';
    }
     // 服务案例
     public function servicecase(){
        include 'View/servicecase/servicecase.html';
    }

    // 联系我们
    public function contactus(){
        include 'View/contactus/contactus.html';
    }

    // 企业动态详情页
    public function detailpages(){
        include 'View/dynamic/detailpages.html';
    }  
    // 行业动态详情页
      public function industryTwo(){
        include 'View/dynamic/industryTwo.html';
    }
    
    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }
  //need
}
