import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import escola2 from "../assets/img/escola2.png";
import escola3 from "../assets/img/escola3.png";
import escola4 from "../assets/img/escolabunner.png";

const Home = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Nav.Link href="/"><Image src={logo} width="50" height="30" /> Escola</Nav.Link>
                </Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Inscreva-se</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
       
        <Container>
        <div class="row">
            <div class="bg-light col-12 p-3">
                <img src={escola4} class="img-fluid max-width: 100%" alt="Escola"></img>
            </div>
        </div>

            <div class="row">
            <div class="bg-light  p-3 col-sm-6">
            <img src={escola2} class="img-fluid max-width: 100%" alt="Escola"></img>
                <h2>Sobre a escola</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum, orem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type.</p>

                    <a href="https://www.up.edu.br/"> <button type="button" class="btn btn-secondary">Leia mais</button> </a>

            </div>

            <div class="bg-light p-3 col-sm-6">
            <img src={escola3} class="img-fluid max-width: 100%" alt="Escola"></img>
                <h2>Institucional</h2>
                <p>                  
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                    quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius 
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
                    nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

                    <a href="https://www.up.edu.br/">  <button type="button" class="btn btn-secondary">Leia mais</button> </a>

            </div>
        </div>
        </Container>    

        <div class="bg-dark p-3">
        <Container> 
        <div class="row">  

        <div class="col-12">
       
        <p class="fs-6 text-secondary">Endereço: Cidade Industrial Curitiba - PR, 81290-000 
        Telefone: (41) 9989-0292</p>
    
        </div>
        </div>

        </Container>  
        </div>

        </div>
        


    );
};

export default Home;
