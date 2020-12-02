import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
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
  <div>
<CardDeck>
  <Card bg = 'danger' text='light'>
    <Card.Body>
      <Card.Title>Positif</Card.Title>
      <Card.Text>
      <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg = 'dark' text='light'>
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
      <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg = 'success' text='light'>
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
      <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>             
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    </div>

)
}

