import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      tel: '',
      contacts: []
    }
  }

  changeHandlerInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addForm = e => {
    e.preventDefault()
    const { name, email, tel } = this.state
    if (name.trim() && email.trim() && tel.trim()) {
      const newContact = {
        id: Date.now(),
        name,
        email,
        tel
      }
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        email: '',
        tel: ''
      }))
    }
  }

  render() {
    const {contacts} = this.state
    return (
      <div>
        <div className="App container mt-5 ">
          <h1>Contact Add</h1>
          <form onSubmit={this.addForm}>
            <input className='py-2 my-2' type="text" name='name' placeholder='Name' onChange={this.changeHandlerInput} id='user' />
            <input className='py-2 my-2' type="tel" name="tel" placeholder='Phone' onChange={this.changeHandlerInput} id='tel' />
            <input className='py-2 my-2' type="email" name="email" placeholder='Email' onChange={this.changeHandlerInput} id='email' />
            <button type='submit' className='btn btn-dark my-2 py-2'>Add</button>
          </form>
        </div>
        <div className=" App container1 mt-5">
          <h1>Contacts</h1>
          <ul className='list-group'>
            {contacts.length === 0 && <p>No contacts yet</p>}
            {contacts.map(contact => (
              <li key={contact.id} className='list-group-item d-flex justify-content-between'>
                <span >Name: {contact.name}</span>
                <span >Phone: {contact.tel}</span>
                <span >Email: {contact.email}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

}

export default App;
