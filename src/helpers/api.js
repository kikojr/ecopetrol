
//
export const getDatosAmostrar = () =>{
    const url = "/api/getDatos"

    return fetch(url).then(res => res.json())
}





export const apiAgregarDatos = (datos) =>{
    const url = "api/datos-principales/add";
    const request = {
        method:"POST",
        body:JSON.stringify(datos),
        headers:{
           "Content-type":"application/json; charset=UTF;" 
        }
    }
    return fetch(url,request).then(res => res.json(0))
}