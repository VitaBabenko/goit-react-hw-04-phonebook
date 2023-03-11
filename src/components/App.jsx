import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';


export class App extends Component {
  state = {
    contacts: [],
     filter: ''
  }
  
  addContact = newContact => {
    this.state.contacts.filter(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()).length
      ? alert(`${newContact.name} is already in contacts!`)
      : this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  };

  changeFilter = (e) => {
    console.log(e.currentTarget.value)
    
    this.setState({
      filter: e.currentTarget.value
    });
  };


  deleteContact = (contactId) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }
    })
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleFilter = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />  
        <ContactList contacts={visibleFilter} onDelete={this.deleteContact} />
      </div>
  )}
};
