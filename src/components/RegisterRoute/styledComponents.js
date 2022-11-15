import styled from 'styled-components'

export const RegisterContainer = styled.div`
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-weight: bold;
`

export const RegisterWebsiteImage = styled.img`
  height: 500px;
  align-items: center;
`
export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`

export const NameLabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: #475569;
`
export const NameInputElement = styled.input`
  height: 40px;
  width: 300px;
`
export const TopicInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TopicLabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: #475569;
`
export const TopicInputElement = styled.select`
  height: 40px;
`

export const Option = styled.option`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`
export const RegisterNowButton = styled.button`
  background-color: #2563eb;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  color: #ffffffff;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 30px;
  padding: 10px;
  width: 150px;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-weight: bold;
`
