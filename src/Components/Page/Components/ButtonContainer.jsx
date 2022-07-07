import React from 'react'
import styled from 'styled-components'
import ContentBox from '../../UI/organisms/ContentBox'
import HeadLine from '../../../Common/UI/atoms/HeadLine'
import Button from '../../../Common/UI/atoms/Button'
import ButtonGroup from '../../../Common/UI/molecules/ButtonGroup'
import Editor from '../../UI/molecules/Editor'
import PropsBox from '../../UI/molecules/PropsBox'
import { CalendarOutlined, CheckCircleOutlined, CheckOutlined, HomeOutlined, LoadingOutlined, PlusCircleFilled } from '@ant-design/icons'

function ButtonContainer() {
  const PropsItem = {
    fill:'boolean | undefined',
    color:'string | undefined',
    onClick:'((event: MouseEvent<HTMLElement, MouseEvent>) => void) | undefined',
    disabled:'boolean | undefined',
    className:'string | undefined',
    type:'button" | "submit" | "reset" | undefined',
    size:'xs | sm | md | lg | default = md',
    theme:'navy | red | default | string ',
    loading:'boolean | undefined',
    leftIcon:'ReactElement<IconProps, string |undefined',
    rightIcon:'ReactElement<IconProps, string |undefined'
  }

  
  const scope = { 
    Button, 
    HeadLine, 
    ButtonGroup,
    LoadingOutlined, 
    HomeOutlined,
    CheckCircleOutlined,
    CalendarOutlined,
    CheckOutlined,
    PlusCircleFilled,
  };
  const codeBasic = `<Button onClick={ () => alert('click!')}>click Me</Button>`
  const codeTheme = `<>
    <HeadLine el={'p'} size={'h4'}>Default</HeadLine>
    <ButtonGroup>
      <Button>Button</Button>
      <Button disabled>Button</Button>
      <Button leftIcon={<LoadingOutlined/>}>Button</Button>
      <Button rightIcon={<HomeOutlined/>}>Button</Button>
    </ButtonGroup>
    <HeadLine el={'p'} size={'h4'}>navy</HeadLine>
    <ButtonGroup>
      <Button Theme={'navy'} >Button</Button>
      <Button Theme={'navy'} disabled>Button</Button>
      <Button Theme={'navy'} leftIcon={<LoadingOutlined/>}>Button</Button>
      <Button Theme={'navy'} rightIcon={<HomeOutlined/>}>Button</Button>
    </ButtonGroup>
    <HeadLine el={'p'} size={'h4'}>red</HeadLine>
    <ButtonGroup>
      <Button Theme={'red'} >Button</Button>
      <Button Theme={'red'} disabled>Button</Button>
      <Button Theme={'red'} leftIcon={<LoadingOutlined/>}>Button</Button>
      <Button Theme={'red'} rightIcon={<HomeOutlined/>}>Button</Button>
    </ButtonGroup>
  </>`
  const codeSize = `<>
    <Button size={'xs'} rightIcon={<HomeOutlined/>} >Button</Button>
    <Button size={'sm'} rightIcon={<HomeOutlined/>} >Button</Button>
    <Button size={'md'} rightIcon={<HomeOutlined/>} >Button</Button>
    <Button size={'lg'} rightIcon={<HomeOutlined/>} >Button</Button>
    <br/>
    <br/>
    <Button size={'xs'} Theme={'navy'} rightIcon={<HomeOutlined/>} >Button</Button>
    <Button size={'sm'} Theme={'navy'} rightIcon={<HomeOutlined/>} >Button</Button>
    <Button size={'md'} Theme={'navy'} rightIcon={<HomeOutlined/>} >Button</Button>
    <Button size={'lg'} Theme={'navy'} rightIcon={<HomeOutlined/>} >Button</Button>
    <br/>
    <br/>
    <Button size={'xs'} Theme={'red'} rightIcon={<HomeOutlined/>} >Button</Button>
    <Button size={'sm'} Theme={'red'} rightIcon={<HomeOutlined/>} >Button</Button>
    <Button size={'md'} Theme={'red'} rightIcon={<HomeOutlined/>} >Button</Button>
    <Button size={'lg'} Theme={'red'} rightIcon={<HomeOutlined/>} >Button</Button>
  </>`
  const codeFill = `<>
    <ButtonContainer><Button fill>Button</Button><Button>Button</Button></ButtonContainer>
    <Button fill>Button</Button><Button>Button</Button>
  </>`
  const codeIcon = `<>
    <Button leftIcon={<CheckCircleOutlined/>}>Button</Button>
    <Button rightIcon={<PlusCircleFilled/>} leftIcon={<CalendarOutlined/>}>Button</Button>
    <Button className={'test'} rightIcon={<CheckOutlined/>}>Button</Button>
  </>`
  return (
    <ContentBox>
      <Wrapper>
        <HeadLine el={'h1'} size={'h1'}>Button</HeadLine>
        <HeadLine size={'h4'}>
          <p className='desc'>
            버튼 컴포넌트 기능 및 사용법 입니다.
          </p>
        </HeadLine>
        <HeadLine el={'h2'} size={'h2'}>
          <a href="#props" className='sectionTit' name='props'>Props</a>
        </HeadLine>
        <PropsBox items={PropsItem}/>
        <HeadLine el={'h2'} size={'h2'}>
          <a href="#Basic usage" className='sectionTit' name='Basic usage'>Basic usage</a>
        </HeadLine>
        <Editor code={codeBasic} scope={scope}/>
        <HeadLine el={'h2'} size={'h2'}>
          <a href="#theme" className='sectionTit' name='theme'>Theme</a>
        </HeadLine>
        <Editor code={codeTheme} scope={scope}/>
        <HeadLine el={'h2'} size={'h2'}>
          <a href="#size" className='sectionTit' name='size'>size</a>
        </HeadLine>
        <Editor code={codeSize} scope={scope}/>
        <HeadLine el={'h2'} size={'h2'}>
          <a href="#fill" className='sectionTit' name='fill'>fill</a>
        </HeadLine>
        <Editor code={codeFill} scope={scope}/>
        <HeadLine el={'h2'} size={'h2'}>
          <a href="#withIcon" className='sectionTit' name='withIcon'>withIcon</a>
        </HeadLine>
        <Editor code={codeIcon} scope={scope}/>
      </Wrapper>
    </ContentBox>
  )
}
const Wrapper = styled.div`

`
export default ButtonContainer