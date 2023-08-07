<?php
require APPPATH . 'libraries/REST_Controller.php';

class SalidasEntradas extends REST_Controller{
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
           $data = $this->db->get_where("salidaentradas", ["id_SalEntrada" => $id])->row_array();
        }
        else {
            $data = $this->db->get("salidaentradas")->result();
        }
    
        $this->response($data, REST_Controller::HTTP_OK);
      }
    
      public function index_post(){
        $input = $this->post();
        $this->db->insert("salidaentradas", $input);
        $this->response(['Salida/Entrada agregada'], REST_Controller::HTTP_OK);
      }
    
      public function index_put($id){
        $input = $this->put();
        $this->db->update("salidaentradas", $input, array("id_SalEntrada" => $id));
        $this->response(['Salida/Entrada actualizada'], REST_Controller::HTTP_OK);      
      }
    
      public function index_delete($id){
        $this->db->delete("salidaentradas", array("id_SalEntrada" => $id));
        $this->response(['Salida/Entrada eliminada'], REST_Controller::HTTP_OK); 
      }
}