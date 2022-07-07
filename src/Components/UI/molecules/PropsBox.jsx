import React from 'react'
import styled from 'styled-components'

function PropsBox({items}) {
    const setPropsItem = (items) => {
        const result = [];
        for (const [key, value] of Object.entries(items)) {
            result.push({
                key,
                value,
            } )
        }
        return result
    }
  return (
    <Wrapper>
        {
            setPropsItem(items).map((i,idx) => {
                const {key, value} =i;
                return (
                    <ItemBox key={idx} className='itemBox'>
                        <strong>{key}</strong>
                        {value}
                    </ItemBox>
                )
            })
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-bottom:40px;
    border:1px solid #ced4de;
    border-radius: 5px;
    background-color:#374f890f;
`

const ItemBox = styled.div`
    display:flex;
    padding:10px 20px;
    font-size:16px;
    line-height:18px;
    strong {
        color:#143074;
        flex:0 0 150px;
    }
    + .itemBox {
        border-top:1px solid #ced4de;
    }
`
export default PropsBox