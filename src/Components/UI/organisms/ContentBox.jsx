import React from 'react'
import styled from 'styled-components'

function ContentBox({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    margin-bottom:20px;
  }
  h4 {
    margin-bottom:40px;
    p {
      font-weight:400;
    }
  }
  .sectionTit {
    display:inline-block;
    margin:30px 0;
    color:#000;
    font-weight: 600;
    &:hover {
      text-decoration:underline;
    }
  }
  .desc {
    padding-bottom:20px;
    border-bottom: 1px solid #eee;
  }
  .codePre {
    margin:20px 0;
    padding:20px;
    background-color: #374f890f;
  }
`
export default ContentBox