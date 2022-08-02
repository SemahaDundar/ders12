import {memo} from 'react';
function C3(props){

console.log("baba Pepa çalıştı..")

    return(
        <><p>Ben baba Pepa</p>
        
        {props.children}
        </>
    )
};


export default memo(C3);

//memo kullandığımız componentlerde children fonksiyonu kullandığımıza tekrar render olur
//ve  memo calışmaz 
//veee chilren fonksiyonu her obje döndürdügünde yeni adres oluşturur.