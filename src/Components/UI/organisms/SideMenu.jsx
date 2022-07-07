import { CaretDownFilled, DownOutlined, SearchOutlined, UpOutlined } from '@ant-design/icons'
import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { getMenu, onClickMenu } from '../../../features/menu/menuSlice'


function SideMenu() {
    const [ menuData, setMenuData] = useState([])
    const [ sectionTit, setSectionTit] = useState([])
    const header = useRef()
    const location = useLocation();
    const dispatch = useDispatch();
    const menus  = useSelector(getMenu);
    const classHendler = (target, type) => (cls) => target.classList[type](cls)
    //window scroll check
    const fixedHendler = () => {
        const target = header.current;
        const headerHeight = document.querySelector('.header').clientHeight;
        const scrollY = window.scrollY;
        if(headerHeight < scrollY && classHendler(target,'contains')('fixed') ) return;
        headerHeight < scrollY ? classHendler(target,'add')('fixed') : classHendler(target,'remove')('fixed')
    }

    //init menus
    const setMenu = (menu , index=0) => {
        return (
            <ul className={index > 0 ? `depth${index}` : 'dpeth'}>
                {
                    menu.map( (i, idx) => {
                        const { title,depth,url,isActive, subDepth} = i;
                        return <li key={idx} className={isActive ? 'active' :''}>
                            <button type="button" onClick={() => dispatch(onClickMenu(title))}>
                                {
                                url ? 
                                <Link className={location.pathname.search(url) < 0 ? "":" active"} to={url}>{title}</Link> :
                                <span >
                                    {title}
                                    <CaretDownFilled />
                                </span>
                                }
                            </button>
                            {
                                subDepth && <div>
                                    {
                                        subDepth.map( (i, idx)=>
                                            <a key={idx} href={i.url}>{i.title}</a>
                                        )
                                    }
                                </div>
                            }
                            {depth ? setMenu(depth , index + 1) : ''}
                        </li>
                    })
                }
            </ul>
        )
    }
    
    const getSectoinTitle = () => {
        const title = document.querySelectorAll('.sectionTit');
        if(!title) return;
        const dapth = [];
        for(let i = 0; i < title.length; i++){
            dapth.push({
                title:title[i].innerText,
                url:title[i].getAttribute('href')
            })
        }
        setSectionTit(dapth)
    }

    useEffect( () => {
        setMenuData(menus)
        getSectoinTitle();
    },[location.pathname, menus])
    

    useEffect(() => {
        window.addEventListener('scroll',fixedHendler)
        return () => {
            window.removeEventListener('scroll',fixedHendler)
        }
    },[])

    return (
        <Wrapper ref={header}>
            <SearchBox>
                <button type="button">
                    <SearchOutlined />
                </button>
                <input type="text"  placeholder='Type to search...'/>
            </SearchBox>
            <Menu>
                {setMenu(menuData)}
            </Menu>
            {
                sectionTit.length > 0 ?
                <QuickMenu className='quickMenu'>
                    {
                        sectionTit.map( (i, idx) => {
                            return <a key={idx} href={i.url}>{i.title}</a>
                        })
                    }
                </QuickMenu>
                :null
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position:fixed;
    left:0;
    top:80px;
    width:300px;
    height:calc(100% - 80px);
    padding:30px 40px;
    border-right:1px solid #ced4de;
    background-color:#fff;
    z-index:10;
    &.fixed {
        height:100%;
        top:0;
        transition: all .2s ease-in;
    }
`

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:20px;
    button {
        margin-right:4px;
        svg {
            width:20px;
            height:20px;
            fill:#ced4de;
        }
    }
    input {
        width:100%;
        font-size:14px;
        border:none;
    }
`

const Menu = styled.div`
    .dpeth {
        > li {
            button {
                width:100%;
                text-align:left;
            }
            span {
                display:flex;
                align-items:center;
                font-size:18px;
                line-height:20px;
                font-weight:600;
                .anticon-caret-down {
                    margin-left:auto;
                    svg {
                        height:14px;
                    }
                }
            }
            + li {
                margin-top:16px;
            }
            &.active {
                .depth1 {
                    height:auto;
                    max-height:100vh;
                }
                .anticon-caret-down {
                    transform: rotate(180deg);
                }
            }
        }
    }
    .depth1 {
        padding-left:10px;
        transition: all .3s ease;
        max-height:0;
        overflow:hidden;
        li {
            margin-top:10px;
            button{
                a {
                    display:inline-block;
                    font-size:14px;
                    line-height:16px;
                    color:#67788a;
                    font-weight:400;
                    &:hover{ 
                        color:#143074;
                    }
                    &.active {
                        color:#143074;
                        font-weight:500;
                    }
                }
            }
        }
    }
`

const QuickMenu = styled.div`
    position:fixed;
    right:20px;
    top:50%;
    z-index:10;
    background-color:#fff;
    border-radius: 5px;
    padding: 20px;
    transform: translateY(-50%);
    box-shadow: 3px 3px 10px #0000001a;
    a {
        display:block;
        font-size:14px;
        line-height:16px;
        color:#707070;
        + a {
            margin-top:8px;
        }
        &:hover {
            color:#000;
        }
    }   
    
`
export default SideMenu