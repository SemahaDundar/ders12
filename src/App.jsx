import { useEffect, useState } from "react";
import Kitap from './Kitap';
import './App.css';



function App(){


    const[veri, veriGuncelle] = useState(null);

   useEffect( ()=>{
    const kitaplariCek = async()=>{
        
        const response =await fetch ("kitaplar.json");
        const kitaplar = await response.json();
        veriGuncelle(kitaplar);
    
    }
         
    kitaplariCek();
       
   }, []);

    return(

        <div className="kitap-liste">
            {veri && veri.kitaplar.map((eleman)=>
            <Kitap key={eleman.no} kitap={eleman}/>
            )}
        </div>
        
    )
}


export default App;