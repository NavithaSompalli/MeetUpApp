import React from 'react'

const RegisteContext = React.createContext({
  topicId: '',
  name: '',
  isValid: false,
  changeTopic: () => {},
  changeName: () => {},
  submitForm: () => {},
  errorMessage: '',
})

export default RegisteContext
