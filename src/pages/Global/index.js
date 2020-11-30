import React from 'react';
import CardGlobal from './CardGlobal';

const Global = () =>{
    return(
        <div>
            <p>Jumlah Kasus Seluruh Dunia</p>
           <div class = "globalcontainer">
           <p>Positif</p>
           <CardGlobal/>
       </div>
       </div>
    )
}

export default Global;