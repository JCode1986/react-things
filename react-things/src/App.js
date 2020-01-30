import React from 'react';
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ThingList from './ThingList/ThingList'
import './Footer/Footer.scss'
import './Header/Header.scss'
import './ThingList/ThingList.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [],
        thing: ""
    };
  }

  removeItem = index => {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  };

  addItem = (name) => {
    this.setState(prevState => ({
      list: prevState.list.concat(name),
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Header
          length={this.state.list.length} 
        />
        <ThingList
          addItem={this.addItem}
          list={this.state.list} 
          removeItem={this.removeItem}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
