import React from 'react'
import styled from 'styled-components'
function Layout({children}) {
    return (
        <Wrapper>{children}</Wrapper>
    )
}
const Wrapper = styled.div`
    padding:100px 40px 40px 340px;
`
export default Layout