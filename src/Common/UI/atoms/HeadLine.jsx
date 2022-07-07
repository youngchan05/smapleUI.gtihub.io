import React from 'react'
import styled from 'styled-components'

function HeadLine({size, el,children}) {
    const setTag = (el) => {
        switch(el){
            case 'h1'  : return <h1>{children}</h1>
            case 'h2'  : return <h2>{children}</h2>
            case 'h3'  : return <h3>{children}</h3>
            case 'h4'  : return <h4>{children}</h4>
            case 'p'  : return <p>{children}</p>
            case 'strong'  : return <strong>{children}</strong>
            default : return children
        }
    }
  return (
    <Wrapper size={size}>
        {setTag(el)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    h1 {
        font-weight:bold;
    }
    h2 {
        font-weight:500;
    }
    strong {
        font-weight:500;
    }
    ${props => {
        const propsSize = props.size ?  props.size : 'h1';
        const headLine = props.theme.HeadLine[propsSize];
        return headLine
    }}
`
export default HeadLine