import React from 'react'
// Único arq. que irá interagir com a DOM, portanto:
import ReactDOM from 'react-dom'
import App from './main/app'

//Renderizando componente de App no elemento cujo id é 'app' -> (public/index.html) 
ReactDOM.render(<App />, document.getElementById('app'))