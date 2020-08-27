<?php

class offerModel
{
    private $db;

    public function __construct()
    {
        $this->db = new DB('tm_off');
    }

    public function getData()
    {
        // 接收 搜索选项
        $where = null;
        $rows = $_POST['rows'];
        $page = ($_POST['page'] - 1)*$rows;

        if( !empty($_POST['username']) ){
            $where = ' `off_vch3` like "%'.$_POST['username'].'%"';
            $res = $this->db 	// 搜索为空
            ->field('*')
                ->where($where)
                ->order('`off_inday` desc')
                ->limit($page.','.$rows)
                ->select();
        }else{
            $res = $this->db 	// 搜索不为空
            ->field('*')
                ->order('`off_inday` desc')
                ->limit($page.','.$rows)
                ->select();
        }


        return $res;
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








?>
