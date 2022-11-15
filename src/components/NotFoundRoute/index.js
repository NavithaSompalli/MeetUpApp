import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  Message,
} from './styledComponents'

const NotFoundRoute = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <Message>We are sorry, the page you requested could not be found</Message>
  </NotFoundContainer>
)

export default NotFoundRoute
