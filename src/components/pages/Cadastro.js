import React from 'react';

//components
import {Header} from '../Header';
import {Link} from 'react-router-dom';

//css
import '../../styles/pages/cadastro.css';
import '../../styles/components/header.css';

//image
import coracao from '../../images/coracao-favorito.png';


import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const Cadastro = () => {
  return (
    <div id="pag-cadastro">
      <Header className="header" links={["Cadastro", "Login", "Carteira Digital"]} name="Pag Fácil"/>

      <main id="principal">
        <h1>O Pag Fácil é a melhor alternativa para seus pagamentos</h1>
        <p>Se cadastre para fazer parte dos PagLovers, e tenha em sua mão as maiores facilidades para seus pagamentos <span><img src={coracao} alt="coração"/></span></p>
        
      </main>
      <Form>
        <FormGroup>
          <Label>Nome: </Label>
          <Input type="text" placeholder="Digite seu Nome: "></Input>
        </FormGroup>
        <Button type="submit"></Button>
        <Link to="/add">Cancelar</Link>
      </Form>



    </div>
  )
}