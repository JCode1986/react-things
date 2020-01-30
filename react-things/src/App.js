import React from 'react';
import axios from 'axios';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ThingList from './ThingList/ThingList';
import './App.css';
import './Footer/Footer.scss';
import './Header/Header.scss';
import './ThingList/ThingList.scss';
import uuid from "uuid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        things: []
    };
  }

  async componentDidMount() {
    const response = await axios.get('/data/things.json');
    console.log('data', response)
    this.setState({
      things: response.data
    })

  }
  addItem = thing => {
      // thing.id = uuid.v4()
      this.setState(prevState => ({
        things: prevState.things.concat(thing),
      }));
  }

  removeItem = index => {
    const things = this.state.things;
    things.splice(index, 1);
    this.setState({ things });
  };

  updateItem = updatedThing => {
    const things = this.state.things.map(thing => {
      if (thing.id === updatedThing.id) {
        thing.name = updatedThing.name
      }
      return thing;
    })

    this.setState({ things })
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact>
            <h1>Home Page</h1>
          </Route>
          <Route path="/about" >
            <h1>About Page</h1>
          </Route>
          <Route path="/things" exact>
            <>
            <Header 
              length={this.state.things.length}
            />
            <ThingList 
              addItem={this.addItem}
              things={this.state.things} 
              removeItem={this.removeItem}
              updateItem={this.updateItem}              
            />
            </>
          </Route>
          <Route path="/things/:id" render={this.renderThingDetail} />
        </Switch>
        <Footer/>
      </div>
    </Router>
    );
  }
}

function Nav(props) {
  return (
      <nav>
          <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/things">Things</NavLink></li>
          </ul>
      </nav>
  )
}

export default App;
