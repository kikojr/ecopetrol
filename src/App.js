import React from 'react'
import Navbar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { apiAgregarDatos } from './helpers/api'


const App = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) =>{
        apiAgregarDatos(data).then(res => console.log(res))
        console.log(data)
    }
    return (

        <div>

            <Navbar />

            <Form onSubmit={handleSubmit(onSubmit)} className="w-9/12 mx-auto my-20 space-y-4">

              <div className="grid grid-cols-3 gap-4">

                    <div className="rx">
                        <h2 className="text-center">MUELLE GRB</h2>
                        <h3 className="text-center text-xl">CARGUE FO FLOAT</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="cg_f_Mg_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="cg_f_Mg_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="rx">
                        <h2 className="text-center">MUELLE GRB</h2>
                        <h3 className="text-center text-xl">VENTA FO</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vf_Mg_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vf_Mg_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>

                    <div className="rx">
                        <h2 className="text-center">MUELLE GRB</h2>
                        <h3 className="text-center text-xl">VENTA DIESEL MARINO</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vdm_Mg_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vdm_Mg_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="rx">
                        <h2 className="text-center">MUELLE GRB</h2>
                        <h3 className="text-center text-xl">DESCARGUE CRUDO</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_Mg_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_Mg_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>

                    <div className="rx">
                        <h2 className="text-center">MUELLE GRB</h2>
                        <h3 className="text-center text-xl">CARGUE ORG</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_Mg_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_Mg_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>

                    <div className="rx">
                        <h2 className="text-center">MUELLE GRB</h2>
                        <h3 className="text-center text-xl">DESCARGUE ISOBUTANO</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="di_Mg_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="di_Mg_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>


                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="rx">
                        <h2 className="text-center">PUERTO BAHIA</h2>
                        <h3 className="text-center text-xl">DESCARGUE FO FLOAT</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="df_Pb_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="df_Pb_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>

                    <div className="rx">
                        <h2 className="text-center">PUERTO BAHIA</h2>
                        <h3 className="text-center text-xl">DESCARGUE FO CARROTANQUE</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_Pb_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_Pb_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>

                    <div className="rx">
                        <h2 className="text-center">PUERTO BAHIA</h2>
                        <h3 className="text-center text-xl">INVENTARIO FO</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="inv_total_pb" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>

                    <div className="rx">
                        <h2 className="text-center">PUERTO BAHIA</h2>
                        <h3 className="text-center text-xl">CUPO FO PUERTO BAHIA</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>

                    <div className="rx">
                        <h2 className="text-center">PUERTO BAHIA</h2>
                        <h3 className="text-center text-xl">CARGUE ORG</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>

                    <div className="rx">
                        <h2 className="text-center">PUERTO BAHIA</h2>
                        <h3 className="text-center text-xl">DESCARGUE ISOBUTANO</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mt-3">
                    <div className="ax">
                        <h2 className="text-center">BARRANQUILLA</h2>
                        <h3 className="text-center text-xl">DESCARGUE FO FLOAT</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_B_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_B_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>
                </div>


                <div className="grid grid-cols-3 gap-4 mt-3">
                    <div className="dt">
                        <h2 className="text-center">LLENADERO DE CARROTANQUE GRB</h2>
                        <h3 className="text-center text-xl">FO CTQ GRB</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="fo_ctq_grb_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="fo_ctq_grb_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>
                  

                
                    <div className="dt">
                        <h2 className="text-center">LLENADERO DE CARROTANQUE GRB</h2>
                        <h3 className="text-center text-sl">FO CTQ VENTA</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="fo_ctq_venta_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="fo_ctq_venta_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                  
               
                    <div className="dt">
                        <h2 className="text-center">LLENADERO DE CARROTANQUE GRB</h2>
                        <h3 className="text-center text-xl">TOTAL FO CTQ </h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="dt">
                        <h2 className="text-center">MUELLE CARTAGENA</h2>
                        <h3 className="text-center text-xl">DESCARGUE FO FLOAT </h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_fo_mu_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_fo_mu_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="dt">
                        <h2 className="text-center">MUELLES CARTAGENA</h2>
                        <h3 className="text-center text-xl">DESCARGUE ORG </h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_org_mu_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_org_mu_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="dt">
                        <h2 className="text-center">INVENTARIO FO TNP</h2>
                        <h3 className="text-center text-xl">TOTAL FO CTQ </h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="inv_mu" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="dt">
                        <h2 className="text-center">MUELLES CARTAGENA</h2>
                        <h3 className="text-center text-xl">CUPO FO TNP</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="cupo_mu" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>
                    </div>
                     
                    <div className="dt">
                        <h2 className="text-center">MUELLES CARTAGENA</h2>
                        <h3 className="text-center text-xl">VENTA DIESEL MARINO</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vdm_mu_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vdm_mu_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="dt">
                        <h2 className="text-center">MUELLES CARTAGENA</h2>
                        <h3 className="text-center text-xl">VENTA ACPM</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vda_mu_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vda_mu_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="dt">
                        <h2 className="text-center">MUELLES CARTAGENA</h2>
                        <h3 className="text-center text-xl">VENTA GASOLINA</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vdg_mu_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vdg_mu_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>


                    </div>  

                    <div className="dt">
                        <h2 className="text-center">MUELLES CARTAGENA</h2>
                        <h3 className="text-center text-xl">CRGUE ISOBUTANO </h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="cg_iso_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="cg_iso_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="dt">
                        <h2 className="text-center">MUELLES CARTAGENA</h2>
                        <h3 className="text-center text-xl">VENTA SLOP CRAQUEADO</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vls_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="vls_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    
                    <div className="dt">
                        <h2 className="text-center">PUERTO LA GLORIA</h2>
                        <h3 className="text-center text-xl">CARGU FO FLOTA</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="cg_f_Pg_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="cg_f_Pg_pln_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    
                    <div className="dt">
                        <h2 className="text-center">PUERTO LA GLORIA</h2>
                        <h3 className="text-center text-xl">DESCARGUE FO CARROTANQUE</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_Pg_dia" placeholder="INGRESE DIA" />

                        </Form.Group>

                        <Form.Group controlId="formBasic">
                            <Form.Label>PLAN DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="dc_Pg_plan_dia" placeholder="INGRESE PLAN DIA" />

                        </Form.Group>

                    </div>

                    <div className="dt">
                        <h2 className="text-center">PUERTO LA GLORIA</h2>
                        <h3 className="text-center text-xl">INVENTARIO FO LA GLORIA</h3>
                        <Form.Group controlId="formBasic">
                            <Form.Label>DIA</Form.Label>
                            <Form.Control type="number" ref={register} name="inv_Pg" placeholder="TOTAL" />

                        </Form.Group>

                       

                    </div>
                    
                </div>
                <button type="submit" className="w-full bg-green-500 p-2 rounded">Enviar</button>
            </Form>


        </div >
    )
}

export default App
