import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format'


export default function TableGlobal(){
  const [dataGlob, globalList] = useState([]);

   
    useEffect(() => {
      axios
      .get("https://api.kawalcorona.com/")
      .then(response => {
        globalList(response.data)
       
      })
      .catch(err => {
        console.log(err)
    })
    }, []);
    console.log (dataGlob)

return (
<center>
    <table border="1">
                <tr>
                    <th><center>No.</center></th>
                    <th><center>Country</center></th>
                    <th><center>Confirmed</center></th>
                    <th><center>Deaths</center></th>
                    <th><center>Recovered</center></th>
                </tr>
                 {dataGlob.map((item, index) => {
                  return(
                      <tr classNames="tr">
                          <th scope="row" key={index}><center>{index + 1}.</center></th>
                         <th> <center>{item.attributes.Country_Region}</center></th>
                          <th><center><NumberFormat value={item.attributes.Confirmed} thousandSeparator={true} displayType={'text'}/></center></th>
                          <th><center><NumberFormat value={item.attributes.Deaths} thousandSeparator={true} displayType={'text'}/></center></th>
                          <th><center><NumberFormat value={item.attributes.Recovered} thousandSeparator={true} displayType={'text'}/></center></th>
                       </tr>
                 )
             })}
           </table>
           </center>
)
}