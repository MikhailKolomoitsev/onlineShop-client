import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/userAPI";
import { injectStores } from '@mobx-devtools/tools';

const App = observer(() => {
  const { user } = useContext(Context)
  const { device } = useContext(Context)
  
  injectStores({
    user,
    device
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }


  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
