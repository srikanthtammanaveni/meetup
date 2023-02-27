import React from 'react'

const ReactContext = React.createContext({
  isRegister: false,
  changeRegistrationStatus: () => {},
  name: '',
  topic: '',
  updateName: () => {},
  updateTopic: () => {},
  registerError: false,
  updateError: () => {},
})

export default ReactContext
