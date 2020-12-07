import React from 'react';
import CardGlobal from './CardGlobal';
import TableGlobal from './TableGlobal';

const Global = () =>{
    return(
        <div>
       <div className="container mypanel text-center">
      <h1 style={{ fontFamily: "Sen", fontSize: "60px" }}>Cases in the World</h1>
      </div>
            <CardGlobal/>
            <TableGlobal/>

       </div>
    )
}

export default Global;