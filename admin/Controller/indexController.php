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

    public function __call($k, $v)
    {
        header('./View/error/index.html');die;
    }

}