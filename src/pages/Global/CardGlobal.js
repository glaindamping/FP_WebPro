import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";

export default function CardGlobal(){
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
   
    useEffect(() => {
      axios
      .get("https://covid19.mathdro.id/api")
      .then(response => {
        console.log(response)
        setConfirmed(response.data.confirmed.value)
        setRecovered(response.data.recovered.value)
        setDeaths(response.data.deaths.value)
        
      })
      .catch(err => {
        console.log(err)
    })
    }, []);

return (
//   <div>
//       <center>
//   <div className="container panel">
  
//   <div className="card round text-center">
//       <div className="card-body">
//           <div className="row">
//               <div className="col-lg-3 col-md-3">
//                   <div className="card mycard">
//                       <div className="card-body">
//                           <h2 className="card-title">Positif</h2>
//                           <h4 className="mt-4"><NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/> Orang</h4>
//                       </div>
//                   </div>
//               </div>
//               <div className="col-lg-3 col-md-3">
//                   <div className="card mycard">
//                       <div className="card-body">
//                           <h2 className="card-title">Sembuh</h2>
//                           <h4 className="mt-4"><NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/> Orang</h4>
//                       </div>
//                   </div>
//               </div>
//               <div className="col-lg-3 col-md-3">
//                   <div className="card mycard">
//                       <div className="card-body">
//                           <h2 className="card-title">Meninggal</h2>
//                           <h4 className="mt-4"><NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/> Orang</h4>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//   </div>
 
// </div>
// </center>
// </div>
  <div className="container">
  <h1 className="card1">
  <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
  <p>Positif</p>
  </h1>
  <h1 className="card2">
  <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
  <p>Deaths</p>
  </h1>
  <h1 className="card3">
  <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
  <p>Recovered</p>
  </h1>
  </div>


)
}

