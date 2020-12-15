import React from 'react'
import Navigation_Bar from '../Navigation_Bar'
import CardsNews from '../Cards_News'
import { set1, set2} from './Data'
import {Jumbotron, Container} from 'react-bootstrap'
import MainJumbo from '../MainJumbotron'
import MainCarousel from '../MainCarousel'
import { Car1 } from './Data'

function Home() {
    return (
        <>
            <MainJumbo/>
            <CardsNews {...set1}/>
            <CardsNews {...set2}/>
            <MainCarousel {...Car1}/>
            <CardsNews {...set2}/>


        </>
    )
}

export default Home
