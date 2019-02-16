import React from 'react'
// Componente de rotas:
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    // Mapeando rotas:
    // Estratégia de histórico: hashHistory
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        {/* Qualquer url n roteada é redirecionada para /todos : */}
        <Redirect from='*' to='/todos' />
    </Router>
)