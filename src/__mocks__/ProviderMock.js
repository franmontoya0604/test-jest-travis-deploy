import React from 'react';

import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import useInitialStateTest from "../useInitialStateTest"
import AppContext from "../context/AppContext"

const history = createBrowserHistory();





const ProviderMock = props => {
 
  const initialState = useInitialStateTest()

  return(
   <AppContext.Provider value={initialState}>
    <Router history={history}>
      {props.children}  {/*asi creamos el providerMock para simular el context en una prueba */}
    </Router>
  </AppContext.Provider>
  )};

export default ProviderMock;