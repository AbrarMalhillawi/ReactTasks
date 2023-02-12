import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Massege extends React.Component{

 
  


  render()
  {
    const data = this.props.info;
    return (
      <>
      {data.map((props,index) =>  (
         <Card style={{ width: '18rem' , display:'inline-block' }} key={index}>
      <Card.Img variant="top" src={props.bookImage} />
      <Card.Body>
        <Card.Title>{props.bookTitle}</Card.Title>
        <Card.Text>
     {props.description}
        </Card.Text>
        <Button variant="primary">{props.author}</Button>
      </Card.Body>
    </Card>
    ))
  }
  </>
)}}

export default Massege;