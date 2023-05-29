const conexion = import.meta.env.VITE_APP_CONEXION;

export async function getData(){

    try {
        let respuesta = await fetch(`${conexion}/api/medicexp/`)

        return  respuesta = respuesta.json()
        
    } catch (error) {
        console.log(error);
        return null
    }
    
}

