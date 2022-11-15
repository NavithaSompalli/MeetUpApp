import {Component} from 'react'

import {Link} from 'react-router-dom'

import Header from '../Header'

// import RegisteContext from '../../context/RegisteContext'

import {
  RegisterContainer,
  Heading,
  RegisterWebsiteImage,
  LoginContainer,
  NameInputContainer,
  NameLabelElement,
  NameInputElement,
  TopicInputContainer,
  TopicLabelElement,
  TopicInputElement,
  Option,
  RegisterNowButton,
  ErrorMessage,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterRoute extends Component {
  state = {
    name: '',
    topicId: topicsList[0].id,
    errorMessage: '',
    isValid: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({topicId: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {name} = this.state

    if (name === '') {
      this.setState({errorMessage: 'Please Enter Your Name'})
    } else {
      this.setState({errorMessage: ' '})
      this.setState(prevState => ({isValid: !prevState.isValid}))
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {name, topicId, errorMessage, isValid} = this.state
    return (
      <>
        <Header />
        <RegisterContainer>
          <RegisterWebsiteImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <LoginContainer onSubmit={this.submitForm}>
            <Heading>Let Us Join</Heading>
            <NameInputContainer>
              <NameLabelElement htmlFor="nameInput">Name</NameLabelElement>
              <NameInputElement
                id="nameInput"
                placeholder="Enter Your Name"
                onChange={this.onChangeName}
                value={name}
              />
            </NameInputContainer>
            <TopicInputContainer>
              <TopicLabelElement htmlFor="topicElement">
                TOPICS
              </TopicLabelElement>
              <TopicInputElement
                id="topicElement"
                onChange={this.onChangeTopic}
                value={topicId}
              >
                {topicsList.map(topic => (
                  <Option key={topic.id} value={topic.id}>
                    {topic.displayText}
                  </Option>
                ))}
              </TopicInputElement>
            </TopicInputContainer>

            <RegisterNowButton type="submit">Register Now</RegisterNowButton>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </LoginContainer>
        </RegisterContainer>
      </>
    )
  }
}

export default RegisterRoute
