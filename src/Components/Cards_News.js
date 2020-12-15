import React from 'react'
import {Container, CardDeck, Card} from 'react-bootstrap'
import './Cards_News.css';


function cardNews({
    img1,
    img2,
    img3,
    headline1,
    headline2,
    headline3,
    lightBg

}) {

    return (
        <div className={lightBg ? 'box pt-5 pb-5' : 'box pt-5 pb-5 darkBg'}>
<Container>
<CardDeck>
  <Card>
   <a href="../Anciano"> <Card.Img variant="top" src={img1}/></a>
    <Card.Body>
    <a href="../Anciano">    <Card.Title>{headline1}</Card.Title></a>
    <a href="../Anciano">  <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text></a>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img2} />
    <Card.Body>
      <Card.Title>{headline2}</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img3} />
    <Card.Body>
      <Card.Title>{headline3}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck></Container>
</div>

);
}

export default cardNews;