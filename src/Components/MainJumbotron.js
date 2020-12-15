import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import './MainJumbo.css';

function MainJumbo() {
    return (
        <Jumbotron fluid>
        <Container>
          <h1 class="pt-5 mt-5 display-1">Gelid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
    )
}

export default MainJumbo;
