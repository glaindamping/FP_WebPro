import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format'


export default function CardIndo(){
  const [dataPro, provinsiList] = useState([]);

   
    useEffect(() => {
      axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then(response => {
        provinsiList(response.data.data)
        
      })
      .catch(err => {
        console.log(err)
    })
    }, []);
console.log (dataPro)
return (
  <div>
    <div className="container">
       <div className="col-lg col-md mx-auto bg-white rounded shadow">
         <div className="table-responsive">
            <table border='1' className="table table-hover">
               <thead>
                <tr>
                 <th scope="col" className="col- col-lg-1">No</th>
                 <th scope="col" className="col- col-lg-4">Provinsi</th>
                 <th scope="col" className="col- col-lg-2">Kasus Positif</th>
                 <th scope="col" className="col- col-lg-2">Meninggal</th>
                 <th scope="col" className="col- col-lg-2">Kasus Sembuh</th>
                </tr>
                </thead>
                <tbody>
                  {dataPro?.map((item, index) => {
                   return (
                    <tr key={index}>
                    <th scope="row" className="col- col-lg-1" key={item.fid}>{index + 1}.</th>
                    <td className="col- col-lg-4">{item.provinsi}</td>
                    <td className="col- col-lg-2 text-center"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></td>
                    <td className="col- col-lg-2 text-center"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></td>
                    <td className="col- col-lg-2 text-center"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></td>
                 </tr>
                                        )
                })}
              </tbody>
            </table>
          </div>
         </div>
       </div>
    </div>


)
}

/* <table border="1">
                <tr>
                    <th>No</th>
                    <th>Province</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Death</th>
                </tr> */
//                 {provinceData.map((item, index) => {
//                   return(
//                       <tr>
//                           <th scope="row" key={item.fid}>{index + 1}</th>
//                           <th>{item.provinsi}</th>
// <th><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
//                           <th><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
//                           <th><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
//                       </tr>
//                  )
//               })}
//           </table>*/