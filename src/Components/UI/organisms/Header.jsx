import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <Wrapper className='header'>
        <h1 className='logo'>
            <Link to={'/'}>SMAPLE UI</Link>
        </h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:80px;
    padding:0 40px;
    background-color:#F5F6F7;
    border-bottom:1px solid #ced4de;
    .logo {
        a {
            display:inline-block;
            font-size:24px;
            line-height:26px;
            color:#1B1C1D;
            font-weight: 500;
            letter-spacing: -1px;
            &:hover {
                color:#143074;
            }
        }
    }
`
export default Header