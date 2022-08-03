import { useEffect } from "react";



function  Component1(){

    useEffect(()=>{
        console.log("1.component use effect çalıştı..")

        return()=>{
            console.log("1.Component unmount olduğunda çalışır.");
        }

    });
     return(
        <p>Ben 1.Component</p>
     );

}

export default Component1;