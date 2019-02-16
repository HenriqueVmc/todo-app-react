import React from "react"

export default props => {
    if(props.test) return props.children // = Obj que está dentro da Tag
    else return false
}
