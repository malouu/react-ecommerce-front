import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import  ButtonGroup from 'react-bootstrap/ButtonGroup'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import Typography from '@mui/material/Typography';

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);
  
  
  const dispatch = useDispatch();
  
  
  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  
   
  }
  const [filter,setFilter]=useState(Cardsdata);
  
  const filterProduct=(cat)=>{
    const updateProduct = Cardsdata.filter((x)=>x.type===cat);
    setFilter(updateProduct);
  }

  return (
    <div className="container mt-3">
      
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
           We hope that you enjoy our meals !
          </Typography>
          
       
      
    
      <div className="row d-flex justify-content-center align-items-center">
        
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price :{element.price} DT</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={() => send(element)}
                      className="col-lg-12"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
      <div className="text-center">
        <ButtonGroup size="lg" className="mb-2">
          <Button variant="outline-secondary" size="lg" onClick={() => filterProduct(1)}>Left</Button>
          <Button variant="outline-secondary" size="lg" >Middle</Button>
          <Button variant="outline-secondary" size="lg">Right</Button>
        </ButtonGroup>
        
      </div>

    </div>
  );
}

export default Cards