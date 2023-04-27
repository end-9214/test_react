import React from 'react'
import styled from "styled-components";


const Section = styled.div`
  display: flex;
  justify-content: center;

`;
const Container = styled.div`
  width: 1400px;
  background-color: rebeccaPurple;


`;
const Links = styled.div``;
const Logo = styled.img``;
const Lists = styled.ul``;
const ListItems = styled.li``;
const Icons = styled.div``;
const Icon = styled.img``;
const Button = styled.button``;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <Logo src="./img/logo.png"/>
        <Lists>
          <ListItems>Home</ListItems>
          <ListItems>About</ListItems>
          <ListItems>Works</ListItems>
          <ListItems>Contact</ListItems>

        </Lists>
        </Links>

        <Icons>
          <Icon src="./img/search.png"/>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar