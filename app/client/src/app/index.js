import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { LanguagesList, LanguagesInsert, LanguagesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
              <Route path="/languages/list" exact component={LanguagesList}/>
              <Route path="/languages/create" exact component={LanguagesInsert}/>
              <Route path="/languages/update/:id" exact component={LanguagesUpdate} />
            </Switch>
        </Router>
    )
}

export default App