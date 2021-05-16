import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Container, Accordion, Card, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import './style.css';



const HomePage = (props) => {
    return (
        <Layout>
            <div class="categories">
                
                <div>
                <li><NavLink to={'/Electrical-Work'}>ELECTRICAL WORK|</NavLink> </li>
                </div>
                <div>
                <li><NavLink to={'/Plumbing'}>PLUMBING|</NavLink> </li>
                </div>
                <div>
                <li><NavLink to={'/Painting'}>PAINTING|</NavLink> </li>
                </div>
                <div>
                <li><NavLink to={'/Pest-Control'}>PEST CONTROL|</NavLink> </li>
                </div>
                <div>
                <li><NavLink to={'/Furniture-Work'}>FURNITURE WORK</NavLink></li>
                </div>    
                
            </div>

            <Jumbotron fluid style={{ "background-color": '#898980', 'height': '150px' }}>
                <Container>
                    <h1>One Stop Place for All home services.....</h1>
                    <p>
                        Different variety of Services Available.
                    </p>
                </Container>
            </Jumbotron>

        </Layout>
    )
}

export default HomePage
