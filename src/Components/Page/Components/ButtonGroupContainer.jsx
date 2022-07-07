import React from 'react'
import styled from 'styled-components'

function ButtonGroup({gap, fill, vertical, children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`
export default ButtonGroup