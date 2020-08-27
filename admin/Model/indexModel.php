<?php
class indexModel
{
    private $db;

    public function __construct()
    {
        $this->db = new DB('goods');
    }


    public function Count()		// 统计
    {
        // 1.查询上架商品个数
        $upgoods = $this->db
            ->field('count(`id`) ' )
            ->table('goods')
            ->where('up = 1')
            ->select();
        $data['upgoods'] = $upgoods['0']['count(`id`)'];
        // 2.查询 热销的商品个数
        $hotgoods = $this->db
            ->field(' count(`id`) ')
            ->table('goods')
            ->where('hot = 1')
            ->select();
        $data['hotgoods'] = $hotgoods['0']['count(`id`)'];
        // 3.查询待支付订单
        $payorder = $this->db
            ->field(' count(`id`) ')
            ->table('orders')
            ->where('isPay = 1 and status = 2')
            ->select();
        $data['payorder'] = $payorder['0']['count(`id`)'];
        // 4.查询待发货订单
        $shiporder = $this->db
            ->field('count(`id`)')
            ->table('orders')
            ->where('isPay = 2 and status = 2')
            ->select();
        $data['shiporder'] = $shiporder['0']['count(`id`)'];
        // 5. 查询待收货订单
        $receiveorder = $this->db
            ->field('count(`id`)')
            ->table('orders')
            ->where('isPay = 2 and status = 1')
            ->select();
        $data['receiveorder'] = $receiveorder['0']['count(`id`)'];
        // 6.查询待评价的订单
        $evaluatedorder = $this->db
            ->field('count(`id`)')
            ->table('orders')
            ->where('isPay = 2 and status = 4')
            ->select();
        $data['evaluatedorder'] = $evaluatedorder['0']['count(`id`)'];
        // 7. 查询激活的用户
        $user = $this->db
            ->field(' count(`id`) ')
            ->table('user')
            ->where('status = 1')
            ->select();
        $data['user'] = $user['0']['count(`id`)'];

        $data['PHP'] = PHP_VERSION;

        $data['uname'] = php_uname('s').php_uname('r');
        $data['version'] = $version=apache_get_version();

        return $data;

    }

}