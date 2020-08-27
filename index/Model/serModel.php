<?php
class serModel
{
    private $db;

    public function __construct()
    {
        $this->db = new DB('tb_ser');
    }

    /**
     * 获取数据
     * @param $sendData
     * @return array
     * created by YeXin at 2020/4/16 10:50
     */
    public function getData()
    {
        // 接收 搜索选项
//        $page  = ($sendData['pageId'] - 1)*$sendData['pageSize'];
//        $where = '1=1';
//        if( !empty($sendData['ser_txt0']) ){
//            $where .= ' AND `ser_txt0` like "%'.$sendData['ser_txt0'].'%"';
//        }
//        if( !empty($sendData['ser_int0']) ){
//            $where .= ' AND `ser_int0` = "'.$sendData['ser_int0'].'" ';
//        }
//
//        $count = $this->db
//            ->field('count(ser_mid) as total')
//            ->where($where)
//            ->select();
//
//        if( !empty($sendData['pageSize']) ){
//        $res[] = array();
            $res = $this->db->field('*')
                ->order('`ser_mid` desc')
                ->select();

//            return $res;
//        } else {
//            $res = $this->db->field('*')
//                ->where($where)
//                ->order('`ser_dat0` desc')
//                ->select();
//        }
//        if($res == false){
//            return false;
//        }
//
////        var_dump($res);die;
//        // 处理数据
//        $serInt0List = [1=>'行业新闻', 2=> '企业动态'];
        for ($i = 0; $i < sizeof($res); $i++) {
            $res[$i]['ser_dat0'] = substr($res[$i]['ser_dat0'],0,10);
            $res[$i]['ser_txt0'] = $res[$i]['ser_txt0'];
            $res[$i]['ser_txt1'] = $this->abslength($res[$i]['ser_txt1']) > 120 ? $this->csubstr($res[$i]['ser_txt1'], 0, 120) : $res[$i]['ser_txt1'];
            $res[$i]['fileList'] = $this->imageArr($res[$i]['ser_txt2']); // 将图片字符串转数组
        }
//        $dataList = [
//            'total'    => (int)$count[0]['total'],
//            'pageId'   => (int)$sendData['pageId'],
//            'dataList' => $res
//        ];
//
        return $res;

    }

    /**
     * 根据mid查新闻信息
     * @param $sendData
     * @return bool|mixed
     * created by YeXin at 2020/4/15 16:05
     */
    public function getFind($sendData)
    {
        $res = $this->db
            ->field('*')
            ->where('ser_mid = '.$sendData['ser_mid'])
            ->find();

        if($res == false){
            return false;
        }
        // 处理数据
        $serInt0List = [1=>'行业新闻', 2=> '企业动态'];
        $res['ser_int0_name'] = $serInt0List[$res['ser_int0']];
        $res['ser_dat0'] = substr($res['ser_dat0'],0,10);
        $res['fileList'] = $this->imageArr($res['ser_txt2']); // 将图片字符串转数组
        return $res;
    }

    /**
     * 将图片字符串转数组
     * @param $imgStr
     * @return array
     * created by YeXin at 2020/4/15 16:09
     */
    public function imageArr($imgStr){
        $imgList = explode('|:::', $imgStr);
        $imgListTwo = [];
        for ($j = 0; $j < sizeof($imgList)-1; $j++){
            $imgListNew = explode('|:', $imgList[$j]);
            $imgListTwo[$j]['name']   = $imgListNew[0];
            $imgListTwo[$j]['url']    = $imgListNew[1];
            $imgListTwo[$j]['uid']    = $imgListNew[2];
            $imgListTwo[$j]['status'] = $imgListNew[3];
        }
        return $imgListTwo;
    }

    /**
     * 计算中文字数
     * @param $str
     * @return false|int
     * created by YeXin at 2020/4/20 10:46
     */
    public function abslength($str)
    {
        if(empty($str)){
            return 0;
        }
        if(function_exists('mb_strlen')){
            return mb_strlen($str,'utf-8');
        }
        else {
            preg_match_all("/./u", $str, $ar);
            return count($ar[0]);
        }
    }

    /**
     ** 中文截取，支持gb2312,gbk,utf-8,big5
     * @param string $str 要截取的字串
     * @param int $start 截取起始位置
     * @param int $length 截取长度
     * @param string $charset utf-8|gb2312|gbk|big5 编码
     * @param $suffix 是否加尾缀
     * @return string
     * created by YeXin at 2020/4/20 10:47
     */
    public function csubstr($str, $start=0, $length, $charset="utf-8", $suffix=true)
    {
        if(function_exists("mb_substr")) {
            if(mb_strlen($str, $charset) <= $length) return $str;
            $slice = mb_substr($str, $start, $length, $charset);
        }
        else {
            $re['utf-8']   = "/[\x01-\x7f]|[\xc2-\xdf][\x80-\xbf]|[\xe0-\xef][\x80-\xbf]{2}|[\xf0-\xff][\x80-\xbf]{3}/";
            $re['gb2312'] = "/[\x01-\x7f]|[\xb0-\xf7][\xa0-\xfe]/";
            $re['gbk']          = "/[\x01-\x7f]|[\x81-\xfe][\x40-\xfe]/";
            $re['big5']          = "/[\x01-\x7f]|[\x81-\xfe]([\x40-\x7e]|\xa1-\xfe])/";
            preg_match_all($re[$charset], $str, $match);
            if(count($match[0]) <= $length) return $str;
            $slice = join("",array_slice($match[0], $start, $length));
        }
        if($suffix) return $slice."…";
        return $slice;
    }
}
