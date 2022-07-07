import React from 'react'
import styled from 'styled-components'

function SubTitle({el ,children}) {
    const elements = {
        h1:{fontSize:'38px', lineHeight:'50px',},
        h2:{fontSize:'22px', lineHeight:'34px',},
        h3:{fontSize:'14px', lineHeight:'24px',},
        h4:{fontSize:'10px', lineHeight:'18px',},
    }
  return (
    <Wrapper style={elements[el]}>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    font-weight:bold;
`
export default SubTitle