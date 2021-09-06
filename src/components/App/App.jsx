import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import { Container } from './App.styled';
// import { v4 as uuidv4 } from 'uuid';

export default class App extends Component{
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    };
  // uuidv4();

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <SectionTitle title="Phonebook">
          <ContactForm propOnSubmit={this.formSubmitHandler} />  
        </SectionTitle>

        <SectionTitle title="Contacts">
          <ContactList contacts={ this.state.contacts}/>
        </SectionTitle>        

      </Container>
    )
  };
}


