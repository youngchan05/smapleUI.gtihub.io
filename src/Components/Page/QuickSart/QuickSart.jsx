import React from 'react'
import styled from 'styled-components'
import ContentBox from '../../UI/organisms/ContentBox'
import HeadLine from '../../../Common/UI/atoms/HeadLine'
import Editor from '../../UI/molecules/Editor'

function QuickSart() {
    const code = `
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { Provider } from 'react-redux';
    import { BrowserRouter } from 'react-router-dom';
    import { ThemeProvider } from 'styled-components';
    import App from './App';
    import { store } from './Common/store';
    import theme from './Components/UI/theme';  /* import   theme.js  */
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <ThemeProvider theme={theme}>  /* ThemeProvider theme props 적용  */
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
    `
    const scope = { };
  return (
    <ContentBox>
        <Wrapper>
            <HeadLine el={'h1'} size={'h1'}>SMAPLE UI</HeadLine>
            <HeadLine size={'h4'}>
            <p className='desc'>SMAPLE 프로젝트들을 위해 만들어졌습니다.</p>
            </HeadLine>
            <HeadLine size={'h3'}>
            <a href="#Quick Start" className='sectionTit' name='Quick Start'>Quick Start</a>
            </HeadLine>
            <HeadLine el={'strong'} size={'h4'}>
                Git Clone
            </HeadLine>
            <pre className='codePre'>
                git clone 가이드 주소 UI 폴더
            </pre>
            <HeadLine el={'strong'} size={'h4'}>
                install
            </HeadLine>
            <pre className='codePre'>
                npm i styled-components
            </pre>
            <HeadLine el={'strong'} size={'h4'}>
                import
            </HeadLine>
            <pre className='codePre'>
                ThemeProvider에 theme props 적용
            </pre>
            <HeadLine el={'strong'} size={'h4'}>
                <Editor code={code}/>
            </HeadLine>
        </Wrapper>
    </ContentBox>
  )
}

const Wrapper = styled.div`
    .editor {
        .LivePreview {
            display:none;
        }
        textarea {
            display:none !important;
        }
         > pre {
            display:none;
         }
    }
`

export default QuickSart