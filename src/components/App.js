import React from "react"
import Albums from "./Albums"
import Libary from "./Libary"
import Pictures from "./Picture"
import "../styles/App.css"
import "../styles/base.css"

import { BrowserRouter as Router, Route } from "react-router-dom"

function App(props) {
  return (
    <Router>
      <nav>
        <Route exact path="/" component={Albums} />
        <Route path="/Libary/:id" component={Libary} />
        <Route path="/Picture/:id" component={Pictures} />
      </nav>
    </Router>
  )
}

export default App
