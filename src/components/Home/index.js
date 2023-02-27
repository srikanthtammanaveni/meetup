import {Link} from 'react-router-dom'

import ReactContext from '../../context/ReactContext'

import Header from '../Header'

import {Heading, Con, Para, Button, Img, Bg, Content} from './styledComponent'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.push('/register')
  }

  const renderBeforeRegister = () => (
    <>
      <div>
        <Heading>Welcome to Meetup</Heading>
        <Para>Please register for the topic</Para>
        <Button onClick={onClickRegister}>
          <Link to="/register">Register</Link>
        </Button>
      </div>
      <Img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  const renderAfterRegister = (name, topic) => (
    <>
      <Heading>{`Hello ${name}`}</Heading>
      <Para>{`Welcome to ${topic}`}</Para>

      <Img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  return (
    <ReactContext.Consumer>
      {value => {
        const {name, isRegister, topic} = value
        console.log(isRegister)

        return (
          <Bg>
            <Header />
            <Con>
              <Content>
                {isRegister
                  ? renderAfterRegister(name, topic)
                  : renderBeforeRegister()}
              </Content>
            </Con>
          </Bg>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default Home
