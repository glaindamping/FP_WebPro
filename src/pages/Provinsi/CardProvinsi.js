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
  // <div>
  //   <div className="container">
  //      <div className="col-lg col-md mx-auto bg-white rounded shadow">
  //        <div className="table-responsive">
  //           <table border='1' className="table table-hover">
  //              <thead>
  //               <tr>
  //                <th scope="col" className="col- col-lg-1">No</th>
  //                <th scope="col" className="col- col-lg-4">Provinsi</th>
  //                <th scope="col" className="col- col-lg-2">Kasus Positif</th>
  //                <th scope="col" className="col- col-lg-2">Meninggal</th>
  //                <th scope="col" className="col- col-lg-2">Kasus Sembuh</th>
  //               </tr>
  //               </thead>
  //               <tbody>
  //                 {dataPro?.map((item, index) => {
  //                  return (
  //                   <tr key={index}>
  //                   <th scope="row" className="col- col-lg-1" key={item.fid}>{index + 1}.</th>
  //                   <td className="col- col-lg-4">{item.provinsi}</td>
  //                   <td className="col- col-lg-2 text-center"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></td>
  //                   <td className="col- col-lg-2 text-center"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></td>
  //                   <td className="col- col-lg-2 text-center"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></td>
  //                </tr>
  //                                       )
  //               })}
  //             </tbody>
  //           </table>
  //         </div>
  //        </div>
  //      </div>
  //   </div>
<center>
<table border="10">
                <tr>
                    <th><center>No.</center></th>
                    <th><center>Provinsi</center></th>
                    <th><center>Positif</center></th>
                    <th><center>Sembuh</center></th>
                    <th><center>Meninggal</center></th>
         
                </tr>
                 {dataPro.map((item, index) => {
                  return(
                      <tr classNames="tr">
                          <th scope="row" key={item.fid}><center>{index + 1}.</center></th>
                         <th> <center>{item.provinsi}</center></th>
                          <th><center><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></center></th>
                          <th><center><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></center></th>
                         <th><center><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></center></th>
                       </tr>
                 )
             })}
           </table>
           </center>
)
}