<?php


class DB
{
    private $pdo;
    private $field = '*';
    private $table;
    private $where;
    private $group;
    private $having;
    private $limit;
    private $order;
    public $sql;

    public function __construct($table)
    {
        $this->pdo = new PDO(DSN, USER, PWD);
        $this->table($table);
    }

    // 查询所有数据
    public function select()
    {
        $this->sql = 'select '.$this->field.' from '.$this->table.$this->where.$this->group.$this->having.$this->order.$this->limit;
        
        // 2. 执行sql语句
        $PDOStatement = $this->pdo->query($this->sql);

        // 3. 解析结果集
        if( is_object($PDOStatement) ){
            $res = $PDOStatement->fetchAll(PDO::FETCH_ASSOC);
            return $res;
        }

        return false;
    }

    // 查询单条数据
    public function find()
    {
        $this->sql = 'select '.$this->field.' from '.$this->table.$this->where;

        // 2. 执行sql语句
        $PDOStatement = $this->pdo->query($this->sql);

        // 3. 解析结果集
        if( is_object($PDOStatement) ){
            $res = $PDOStatement->fetch(PDO::FETCH_ASSOC);
            return $res;
        }

        return false;
    }

    // 插入数据
    public function insert($data = [])
    {
        if( empty($data) ){
            $data = $_POST;
        }

        $key = null;
        $value = null;
        foreach($data as $k => $v){
            $key .= '`'.$k.'`,';
            $value .= '"'.$v.'",';
        }

        $key = rtrim($key, ',');
        $value = rtrim($value, ',');

        $this->sql = 'insert into '.$this->table.'('.$key.')  values('.$value.') ';
        $res = $this->pdo->exec($this->sql);

        // 如果新增成功, 建议返回 最新的id
        if($res){
            $newId = $this->pdo->lastInsertId();
            return $newId;
        }

        return false;
    }

    // 更新数据
    public function update($data = [])
    {
        if( empty($data) ){
            $data = $_POST;
        }

        $field = null;
        foreach($data as $k => $v){
            $field .= "`{$k}`='{$v}',";
        }

        $field = rtrim($field, ',');

        $this->sql = 'update '.$this->table.' set '.$field.$this->where;

        $res = $this->pdo->exec($this->sql);
        return $res;
    }

    // 删除数据
    public function delete()
    {
        // $this->sql = 'delete from 表名 where 条件 order by 字段 limit 行数';
        $this->sql = 'delete from '.$this->table.$this->where.$this->order.$this->limit;

        $res = $this->pdo->exec($this->sql);

        return $res;
    }

    public function field($condition = '')
    {
        $this->field = '*';
        if( !empty($condition) ){
            $this->field = $condition;
        }

        return $this;
    }

    public function table($condition = '')
    {

        if( !empty($condition) ){
            $this->table = $condition;
        }
        return $this;
    }

    public function where($condition = '')
    {
        $this->where = null;
        if( !empty($condition)){
            $this->where = ' where '.$condition;
        }
        return $this;
    }

    public function group($condition = '')
    {
        $this->group = null;
        if( !empty($condition)){
            $this->group = ' group by '.$condition;
        }
        return $this;
    }

    public function having($condition = '')
    {
        $this->having = null;
        if( !empty($condition)){
            $this->having = ' having '.$condition;
        }
        return $this;
    }

    public function order($condition = '')
    {
        $this->order = null;
        if( !empty($condition)){
            $this->order = ' order by '.$condition;
        }
        return $this;
    }

    public function limit($condition = '')
    {
        $this->limit = null;
        if( !empty($condition)){
            $this->limit = ' limit '.$condition;
        }
        return $this;
    }

}
