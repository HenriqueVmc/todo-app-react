import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/css/custom.css'

import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'

export default props => {
    
    if(props.section === "header") return(<Menu />)

    else if(props.section == "content") return (<Routes />)
}