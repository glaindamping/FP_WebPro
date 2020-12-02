import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


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
    <div className="row">
       <div className="col-lg col-md mx-auto bg-white rounded shadow">
         <div className="table-responsive">
            <table className="table table-hover">
               <thead>
                <tr>
                 <th scope="col" className="col- col-lg-2">No</th>
                 <th scope="col" className="col- col-lg-4">Provinsi</th>
                 <th scope="col" className="col- col-lg-2">Kasus Positif</th>
                 <th scope="col" className="col- col-lg-2">Kasus Sembuh</th>
                 <th scope="col" className="col- col-lg-2">Meninggal</th>
                </tr>
                </thead>
                <tbody>
                  {dataPro?.map((item, index) => {
                   return (
                    <tr key={index}>
                    <th scope="row" className="col- col-lg-2" key={item.fid}>{index + 1}</th>
                    <td className="col- col-lg-4">{item.provinsi}</td>
                    <td className="col- col-lg-2 text-center">{item.kasusPosi}</td>
                    <td className="col- col-lg-2 text-center">{item.kasusMeni}</td>
                    <td className="col- col-lg-2 text-center">{item.kasusSemb}</td>
                 </tr>
                                        )
                })}
              </tbody>
            </table>
          </div>
         </div>
       </div>
    </div>
//   <div>
// {dataPro?.map((item, index) => (
//   <table border="1">
//   <tr key={index}>
//   <th  key={item.fid}>{index + 1}</th>
//   <th>{item.provinsi}</th>
//   <td>{item.kasusPosi}</td>
//   <td>{item.kasusMeni}</td>
//   <td>{item.kasusSemb}</td>
// </tr>
// </table>
// ))}
// </div>

)
}

