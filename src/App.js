//import react libraries
import React, {Component} from 'react';

//import components
import CardList from './cardList';

// import CSS
import './App.css';

class App extends Component {
  state = {
    userData: []
  }

  loadData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=12')
    const data = await response.json();
    return data.results;
  }

  handleClick = async (e) => {
    e.preventDefault();
    const newUserData = await this.loadData();

    this.setState({
      userData: newUserData
    })
  }

  async componentDidMount() {
    const userData = await this.loadData();

    this.setState({
      userData: userData
    })
  }

  render() {
    const {userData} = this.state;
    return (
      <div className="App">
        <button onClick={(e) => this.handleClick(e)}>Load New People</button>
        <CardList userData = {userData}/>
      </div>
    )
  }
}

export default App;
