import React from 'react';
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ThingList from './ThingList/ThingList'
import './Footer/Footer.scss'
import './Header/Header.scss'
import './ThingList/ThingList.scss'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ThingList />
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
