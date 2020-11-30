import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const CardGlobal = () => {
    const [global, setData] = useState([]);
   
    useEffect(() => {
      axios
      .get("https://covid19.mathdro.id/api")
      .then((response) => setData(response.data));
      }, []);
      console.log(global)
return (
    <div>
  <CardDeck>
  <Card bg="danger" text="white">
    <Card.Body>
      <Card.Title>Positif</Card.Title>
      <Card.Text>

      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="secondary" text="white">
    <Card.Body>
      <Card.Title>Meninggal</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="success" text="white">
    <Card.Body>
      <Card.Title>Sembuh</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
)
}

export default CardGlobal;