import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css';
import { Button } from 'react-bootstrap';


function Footer(){

    return (


<footer id="footer" class="page-footer font-small unique-color-dark pt-4 mt-5">

<div class="container">

  <ul class="list-unstyled list-inline text-center py-2">
    <li class="list-inline-item">
      <h5 class="mt-5 pt-5 mb-1">Register for free</h5>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn btn-primary btn-warning">Sign up!</a>
    </li>
  </ul>

</div>

<div class="footer-copyright text-center py-3">© 2020 Copyright
  
</div>

</footer>

);
}



    export default Footer;