import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import styled from 'styled-components';

function Editor({code,scope}) {
  return (
    <Wrapper className='editor'>
      <LiveProvider code={code} scope={scope}>
        <LivePreview className='LivePreview'/>
        <div className="LiveEditor">
          <LiveEditor style={{'fontFamily': 'Noto Sans KR'}}/>
        </div>
        <LiveError />
      </LiveProvider>
    </Wrapper>
  )
}
const Wrapper = styled.code`
  .LivePreview{
    padding:20px 20px;
    border: 1px solid #CED4DE;
    border-radius: 4px 4px 0px 0px;
    p {
      margin:20px 0;
    }
  }
  .LiveEditor{
    padding:10px 10px;
    background-color: #374f890f;
    border-radius: 0 0 4px 4px;
  }
`

export default Editor