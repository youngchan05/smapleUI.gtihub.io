import React from 'react'
import styled from 'styled-components'
function ButtonContainer({gap, fill, vertical, children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
`
export default ButtonContainer