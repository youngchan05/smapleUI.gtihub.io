import React from 'react'
import styled from 'styled-components'

function Button({Theme, fill, color, onClick, disabled, className, type, size, loading, leftIcon,rightIcon, children}) {
  return (
    <Wrapper className={className}
      Theme={Theme} 
      fill={fill} 
      color={color}
      onClick={onClick}
      disabled={disabled}
      type={type}
      size={size}
      loading={loading || undefined}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      >
      <span className='tit'>
        {
          leftIcon ? <i className='leftIcon'>{leftIcon}</i>: ''
        }
        {children}
        {
          rightIcon ? <i className='rightIcon'>{rightIcon}</i>: ''
        }
      </span>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  width:${props => props.fill ? '100%' : 'auto'};
  border-radius: 3px;
  flex: ${props => props.fill ? '0 1 auto' : '0 0 auto;'};
  .tit {
    display:inline-block;
    font-size:inherit;
    line-height:inherit;
    color: inherit;
  }
  .leftIcon {
    margin-right:6px;
  }
  .rightIcon {
    margin-left:6px;
  }
  /* Theme  */
  ${props => {
    const selectedSize = props.size ?  props.size : 'md';
    const buttonSize = props.theme.button.size[selectedSize];
    return buttonSize
  }}
  /* Theme  */
  ${props => {
    const selectedTheme = props.Theme ?  props.Theme : 'default';
    const buttonTheme = props.theme.button.theme[selectedTheme];
    return buttonTheme
  }}
  &:not(:disabled):not(:focus):hover {
      ${props => {
        const selectedTheme = props.Theme ?  props.Theme : 'default';
        const buttonTheme = props.theme.button.theme[selectedTheme];
        return buttonTheme.hover
      }
    }
  }
  &:disabled {
    cursor: no-drop;
    ${props => {
      const selectedTheme = props.Theme ?  props.Theme : 'default';
      const buttonTheme = props.theme.button.theme[selectedTheme];
      return buttonTheme.disabled
    }
  }}
  &:focus {
    ${props => {
      const selectedTheme = props.Theme ?  props.Theme : 'default';
      const buttonTheme = props.theme.button.theme[selectedTheme];
      return buttonTheme.focus
    }
  }}
`

Button.defaultProps = {
  Theme:false,
  fill:false,
  color:null,
  onClick:()=> {},
  disabled:false,
  className:null,
  type:'button',
  loading:false,
  leftIcon:false,
  rightIcon:false
}
export default Button