<?php
class newsModel
{
    private $db;

    public function __construct()
    {
        $this->db = new DB('tb_news');
    }

    /**
     * 图片上传
     * @return array
     * created by YeXin at 2020/4/14 16:47
     */
    public function uploadImg()
    {
        $imageFile = $_FILES['imageData'];
        $imgData = [];
        $imgFileName = date("YmdHis").rand(1000,9999) . substr($imageFile["name"], strpos($imageFile["name"], "."));
        $imgFileName1 = $imgFileName;
        if (file_exists($imgFileName)) {
//            $imgData = [
//                'code' => 300,
//                'msg' => '文件已存在，请重新上传！',
//                'data' => []
//            ];
            $imgData = [
                'status' => 300,
                'message' => '文件已存在，请重新上传！',
                'img' => ''
            ];
        } else {
            $y = SYSTEMDIR . "/upload/" . date("Y");
            $m = SYSTEMDIR . "/upload/" . date("Y") . "/" . date("m");
            if (file_exists($y)) //年是否存在
                mkdir($y);

            if (!file_exists($m)) //月是否存在
                mkdir($m);
            $src_file = $imageFile["tmp_name"];
            $src_img=imagecreatefromjpeg($src_file);
            $srcInfo=getimagesize($src_file);
            if($srcInfo[0]>$srcInfo[1]){
                $desWidth 	= 800;
                $desHeight 	= 600;
            }else{
                $desWidth 	= 600;
                $desHeight 	= 800;
            }
            $new_img=imagecreatetruecolor($desWidth,$desHeight);
            imagecopyresampled($new_img,$src_img,0,0,0,0,$desWidth,$desHeight,$srcInfo[0],$srcInfo[1]);


            $des_file = "/upload/" . date("Y") . "/" . date("m") . "/" . $imgFileName1;
            imagejpeg($new_img,SYSTEMDIR.$des_file,100);
            //copy($_FILES["userfile"]["tmp_name"], SYSTEMDIR.$src_file);
//            $imgData = [
//                'code' => 200,
//                'msg' => '上传成功',
//                'data' => [
//                    'name' => $imgFileName1,
//                    'url'  => $des_file,
//                    'uid'  => md5(time())
//                ]
//            ];
            $imgData = [
                'status' => 1,
                'message' => '上传成功',
                'img' => $des_file
            ];
        }
        return $imgData;
    }

    /**
     * 获取数据
     * @param $sendData
     * @return array
     * created by YeXin at 2020/4/16 10:50
     */
    public function getData($sendData)
    {
        // 接收 搜索选项
        $page  = ($sendData['pageId'] - 1)*$sendData['pageSize'];
        $where = '1=1';
        if( !empty($sendData['news_txt0']) ){
            $where .= ' AND `news_txt0` like "%'.$sendData['news_txt0'].'%"';
        }
        if( !empty($sendData['news_int0']) ){
            $where .= ' AND `news_int0` = "'.$sendData['news_int0'].'" ';
        }

        $count = $this->db
            ->field('count(news_mid) as total')
            ->where($where)
            ->select();
        $res = $this->db->field('*')
            ->where($where)
            ->order('`news_inday` desc')
            ->limit($page.','.$sendData['pageSize'])
            ->select();


        // 处理数据
        $newsInt0List = [1=>'行业新闻', 2=> '企业动态'];
        for ($i = 0; $i < sizeof($res); $i++) {
            $res[$i]['news_int0_name'] = $newsInt0List[$res[$i]['news_int0']];
            $res[$i]['news_dat0'] = substr($res[$i]['news_dat0'],0,10);
            $res[$i]['news_txt1'] = $this->abslength($res[$i]['news_txt1']) > 150 ? $this->csubstr($res[$i]['news_txt1'], 0, 150) : $res[$i]['news_txt1'];
            $res[$i]['fileList'] = $this->imageArr($res[$i]['news_txt2']); // 将图片字符串转数组
        }
        $dataList = [
            'total'    => (int)$count[0]['total'],
            'pageId'   => (int)$sendData['pageId'],
            'dataList' => $res
        ];

        return $dataList;
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

    /**
     * 添加新闻
     * @return bool|string
     * created by YeXin at 2020/4/14 17:02
     */
    public function doAdd()
    {
        // 1. 接收新增数据
        $data = array();
        $data['news_txt0'] = $_REQUEST['news_txt0'];
        $data['news_int0'] = $_REQUEST['news_int0'];
        $data['news_txt1'] = $_REQUEST['news_txt1'];
        $data['news_dat0'] = $_REQUEST['news_dat0'];


//        $imgList = $_REQUEST['fileList'];
//        $new_txt2 = '';
//        if(sizeof($imgList) != 0){
//            for($i=0; $i < sizeof($imgList); $i++){
//                if($imgList[$i] != undefined){
//                    $new_txt2 .= implode($imgList[$i], '|:') . '|:::';
//                }
//            }
//        }
//        $data['news_txt2'] = $new_txt2;
//        echo "<pre>";
//        var_dump($data['news_txt1']);exit;
//        echo "</pre>";

        // 插入数据库
        if($_REQUEST['news_mid'] == undefined){ // 添加
            $data['news_mid']  = $this->getNewsMaxID('news_mid');
            $data['news_inday'] = date('Y-m-d H:i:s',time());
            $data['news_upday'] = date('Y-m-d H:i:s',time());

            $res = $this->db
                ->insert($data);
        } else {   // 修改
            $data['news_mid']  = $_REQUEST['news_mid'];
            $data['news_upday'] = date('Y-m-d H:i:s',time());

            $res = $this->db
                ->where('news_mid = '.$data['news_mid'])
                ->update($data);
        }


        return $res;
    }

    /**
     * 获取最大的Mid
     * @param $field
     * @return int|mixed
     * created by YeXin at 2020/4/14 17:43
     */
    public function getNewsMaxID($field){
        //通过调用自己封装的方法进行查询
        $res = $this->db->field('max(' . $field . ') as MaxID')->select();
        //select方法返回的是一个二维数组
        if($res===false){
            return 1;
        }else{
            return $res[0]['MaxID']+1;
        }
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
            ->where('news_mid = '.$sendData['news_mid'])
            ->find();

        // 处理数据
        $res['fileList'] = $this->imageArr($res['news_txt2']); // 将图片字符串转数组
        return $res;
    }

    /**
     * edit返回mid数据来使用
     * @param $newsMid
     * @return mixed
     * created by YeXin at 2020/4/15 16:04
     */
    public function getFindA($newsMid)
    {
        return $newsMid;
    }

    /**
     * 删除新闻
     * @param $sendData
     * @return mixed
     * created by YeXin at 2020/4/15 16:51
     */
    public function doDel($sendData)
    {
        $res = $this->db->where('news_mid='.$sendData['news_mid'])->delete();
        return $res;
    }
}








?>
