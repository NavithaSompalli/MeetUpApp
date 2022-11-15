import {Component} from 'react'

import {Link} from 'react-router-dom'

import Header from '../Header'

import {
  HomeContainer,
  HomeElementsContainer,
  WelcomeHeading,
  Description,
  RegisterButton,
  MeetUpImage,
} from './styledComponents'

class HomeRoute extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <HomeElementsContainer>
          <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
          <Description>Please register for the Topic</Description>
          <Link to="/register">
            <RegisterButton>Register</RegisterButton>
          </Link>

          <MeetUpImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeElementsContainer>
      </HomeContainer>
    )
  }
}

export default HomeRoute
