import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import NotFoundRoute from './components/NotFoundRoute'

import HomeRoute from './components/HomeRoute'

import RegisterRoute from './components/RegisterRoute'

import RegisteContext from './context/RegisteContext'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    topicId: '',
    name: '',
    isValid: false,
    errorMessage: '',
  }

  changeTopic = topicId => {
    this.setState({topicId})
  }

  changeName = name => {
    this.setState({name})
  }

  render() {
    const {topicId, name, isValid, errorMessage} = this.state
    return (
      <RegisteContext.Provider
        value={{
          topicId,
          name,
          isValid,
          errorMessage,
          changeTopic: this.onChangeTopic,
          changeName: this.onChangeName,
          submitForm: this.submitForm,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </RegisteContext.Provider>
    )
  }
}

export default App
