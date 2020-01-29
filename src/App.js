import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StepInsideCV from "./components/StepInsideCV/StepInsideCV";
import Category from "./components/Category/Category";
import CV from "./components/CV/CV";
import uuid from "uuid";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        {
          id: uuid(),
          name: "Web Development"
        },
        {
          id: uuid(),
          name: "Data Science"
        },
        {
          id: uuid(),
          name: "Digital Marketing"
        },
        {
          id: uuid(),
          name: "Design"
        }
      ]
    }
  }


  render() {

    return (
      <div className="App">
    
         <Router basename={window.location.pathname}>
            <Switch>
              <Route path="/" exact component={StepInsideCV} />
              <Route path="/category" render={() => <Category category={this.state.category} />} />
              <Route path="/cv/:name" component={CV} />
            </Switch>
          </Router> 
      </div>
    );
  }
}


export default App;
