<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
       $user = M('user');
      // echo 1111;exit;
       $user_data = $user->where("name='李艳红'")->find();
      // var_dump($user_data['name']);exit;
  		$this->assign('user_data',$user_data);
       $this->display('index');
    }

    public function say(){
       echo say;exit;
    }
}