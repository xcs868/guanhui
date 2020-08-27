<?php
class messageModel
{
    private $db;

    public function __construct()
    {
        $this->db = new DB('tb_msg');
    }

    /**
     * 获取数据
     * @param $sendData
     * @return array
     * created by YeXin at 2020/4/16 10:37
     */
    public function getData($sendData)
    {
        // 接收 搜索选项
        $page  = ($sendData['pageId'] - 1)*$sendData['pageSize'];
        $where = '1=1';

        $count = $this->db
            ->field('count(msg_mid) as total')
            ->where($where)
            ->select();
        $res = $this->db->field('*')
            ->where($where)
            ->order('`msg_inday` desc')
            ->limit($page.','.$sendData['pageSize'])
            ->select();

        $dataList = [
            'total'    => (int)$count[0]['total'],
            'pageId'   => (int)$sendData['pageId'],
            'dataList' => $res
        ];

        return $dataList;
    }
}
