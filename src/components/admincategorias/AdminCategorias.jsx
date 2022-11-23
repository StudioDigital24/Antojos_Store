

import { Electrodomesticos } from "../electrodomesticos/Electrodomesticos";

export const AdminCategorias=(props)=>{
    const nombreCategoria=props.name;
    if(nombreCategoria===Electrodomesticos){
        return(
            <>
            <Electrodomesticos></Electrodomesticos>
                        
            </>
        )  
    }
    else if(nombreCategoria===Muebles){

        return(
            <>
            <Muebles></Muebles>
                        
            </>
        )  

}
else if(nombreCategoria===Aseo){

    return(
        <>
        <Aseo></Aseo>
                    
        </>
    )  

}
else if(nombreCategoria===Jardineria){

    return(
        <>
        <Jardineria></Jardineria>
                    
        </>
    )  

}
    else {
        return(
            <>
            <Decoracion></Decoracion>
                        
            </>
        )  


    }

   



}