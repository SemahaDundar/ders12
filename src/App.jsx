import { useEffect, useState } from "react";
import  Component1  from './Component1';

function App() {

const [acKapa, acKapaDegistir]= useState(false);

const [isim, isimDegistir]= useState("");


const sonraCalis = ()=>{
// Bu kodlar render bittikten tamamen sonra calışacak.


setTimeout(()=>{
    console.log("sonra çalış tekrar aktif oldu.")
    let saniye= new Date(). getSeconds();
    document.body.style.backgroundColor= saniye % 2 == 0 ?"yellow" :"pink";

}, 2000)

}


useEffect(sonraCalis, [acKapa]);//ac kapa çalıştığında 

//useEffect(sonraCalis, []);
//useEfect fonksiyonu bos array verdiğimizde fonksiyon bir defa render oluyor.
//aksi halde tekrar tekrar render oluyor.


 
    return (
        <div >
            App render oldu.{new Date(). getSeconds()}
           {acKapa && <Component1/>}
        </div>
    )
}

export default App;