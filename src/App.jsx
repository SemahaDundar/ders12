import { useState } from 'react';
import C1 from './C1';
import C2 from './C2';
import C3 from './C3';
import C4 from './C4';

function App() {
    const[acKapa, acKapaDegistir] = useState(false);
    console.log("App calıştı...")

    return (
        <>
            <C1 isim="Talat" soyad="Öncü"/>
            <C2 isim="Şermin" soyad="İlker" sevdigiRenkler={{beyaz: true, kahverengi: false}}/>
            <C3 isim="Meliha">
                <h2>C4 Child Component</h2>
                <C4 isim="Tarık" />
            </C3>
        </>
    );
}

export default App;

