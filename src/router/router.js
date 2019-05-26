import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Loadable/loadable'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)