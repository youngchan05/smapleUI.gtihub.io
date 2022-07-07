import React from 'react'
import styled from 'styled-components'

function CheckBox({type, text, disabled, checked, onChange}) {
    return (
    <Wrapper type={type}>
        <label htmlFor="">{text}</label>
        <input type={type} disabled={disabled} checked={checked} onChange={ (e) =>onChange(e)}/>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    position:relative;
    input {
        position:absolute;
        left:0;
        top:0;
        opacity:0;
        width:100%;
        height:100%;
    }
`
CheckBox.defaultProps = {
    size:24,
    type:'checkbox',
    onChange:() => {},
}
export default CheckBox