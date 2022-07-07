import React from 'react'
import styled from 'styled-components'
import ContentBox from '../../UI/organisms/ContentBox'
import HeadLine from '../../../Common/UI/atoms/HeadLine'
import CheckBox from '../../../Common/UI/atoms/CheckBox'
import ButtonGroup from '../../../Common/UI/molecules/ButtonGroup'
import Editor from '../../UI/molecules/Editor'
import PropsBox from '../../UI/molecules/PropsBox'

function CheckboxContainer() {
    const PropsItem = {
        onChange:'((event: MouseEvent<HTMLElement, MouseEvent>) => void) | undefined',
        disabled:'boolean | undefined',
        checked:'boolean | undefined',
        className:'string | undefined',
        type:'"checkbox" | "radio" | default = checkbox',
        text:'string | undefined',
      }
  return (
    <ContentBox>
      <Wrapper>
        <HeadLine el={'h1'} size={'h1'}>Checkbox</HeadLine>
        <HeadLine size={'h4'}>
          <p className='desc'>
            체크박스 컴포넌트 기능 및 사용법 입니다.
          </p>
        </HeadLine>
        <HeadLine el={'h2'} size={'h2'}>
          <a href="#props" className='sectionTit' name='props'>Props</a>
        </HeadLine>
        <PropsBox items={PropsItem}/>
        <HeadLine el={'h2'} size={'h2'}>
          <a href="#Basic usage" className='sectionTit' name='Basic usage'>Basic usage</a>
        </HeadLine>
        <CheckBox text={'dsad'}/>
      </Wrapper>
    </ContentBox>
  )
}
const Wrapper = styled.div`

`
export default CheckboxContainer