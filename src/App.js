import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from './components/Layout'

import Home from "./pages/Home";
import Information from "./pages/Information";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

import AppContext from "./context/AppContext"
import useInitialState from "./hooks/useInitialState"


const App =() => {//aca estan las diferentes paginas

  const initialState = useInitialState();//aca se ejecuta el hook para guardar en el initialstate el state y las funciones.

  const isEmpty = Object.keys(initialState.state).length;

  return (
    <> {/*usamos react fragment */}
     {/*hacemos esta validacion para saber si en elstate hay algo en el primer render ya que tiene que esperar que se haga el llamado de la api */}
    {isEmpty > 0 ? (       
      <AppContext.Provider value={initialState}>  {/*//aca se guarda een el value para poder acceder con el useState desde los componentes a initialState que tiene el estado y las funciones para cambiar el state . se pueden usar varios providers*/}
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />   {/*info de lo que compramos*/}
        <Route exact path="/checkout/information" component={Information} />   {/*info del usuario que compra.. estas tres vienen desde la pagina checkout.*/}
        <Route exact path="/checkout/payment" component={Payment} />  {/* info del pago*/}
        <Route exact path="/checkout/success" component={Success} />   {/*compra hecha */}
        <Route component={NotFound} />
      </Switch>
      </Layout>
    </BrowserRouter> {/*//hay que poner el nombre de la variable que recibimos.*/}
    </AppContext.Provider>)
  : <h1>cargando...</h1>

  }
     </>
  );
}

export default App;
