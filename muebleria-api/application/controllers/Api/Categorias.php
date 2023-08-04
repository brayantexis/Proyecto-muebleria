<?php
require APPPATH . 'libraries/REST_Controller.php';

class Categorias extends REST_Controller {

  public function __construct(){
    parent:: __construct();
    $this->load->database();
    $this->load->library('cors');
    $this->cors->handle();
  }

  public function index_options() {
    return $this->response(NULL, REST_Controller::HTTP_OK);
 }

  public function index_get($id=0){
    if(!empty($id)){
       $data = $this->db->get_where("categorias1", ["id_Categoria" => $id])->row_array();
    }
    else {
        $data = $this->db->get("categorias1")->result();
    }

    return $this->response($data, REST_Controller::HTTP_OK);
  }

  public function index_post(){
    $input = $this->post();
    $this->db->insert("categorias1", $input);
    $this->response(['Categoria agregada'], REST_Controller::HTTP_OK);
  }

  public function index_put($id){
    $input = $this->put();
    $this->db->update("categorias1", $input, array("id_Categoria" => $id));
    $this->response(['Categoria actualizada'], REST_Controller::HTTP_OK);      
  }

  public function index_delete($id){
    $this->db->delete("categorias1", array("id_Categoria" => $id));
    $this->response(['Categoria eliminada'], REST_Controller::HTTP_OK); 
  }

}

