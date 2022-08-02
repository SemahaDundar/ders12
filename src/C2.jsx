import { memo } from "react";

function C2(props){
    const adSoyad = props.isim + ' ' + props.soyad;

console.log("Cevdet aktif oldu...")

    return(

        <><p>Ben Cevahir, isim soyad:{adSoyad}</p></>
    )
};


export default memo(C2);