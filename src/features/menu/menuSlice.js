import { createSlice } from "@reduxjs/toolkit"
import Menu from "../../Common/Menu";
const initialState = {
    mneuItems:Menu().map( i=> {
        return i ?  
        {
            ...i,
            depth:i.depth.map(j =>{
                return {
                    title:j.title,
                    url:j.url,
                }
            })
        } 
        : i
    }),
    seletedUrl:'',
}


const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        onClickMenu : (state, {payload}) => {
            console.log(payload ,'payload')
            state.mneuItems = state.mneuItems.map(i => i.title === payload ? {...i,isActive :!i.isActive} : i )
        },
        setLocation:(state,{payload}) => {
            state.seletedUrl = payload
        },
        testFn: (state,{payload}) => {
            console.log(payload ,'payload')
            // state.mneuItems = state.mneuItems.map( i=> {
            //     return {
            //         ...i,
            //         depth:i.depth.map(j =>{
            //             return j.url === state.seletedUrl ? {...j ,subDepth:payload} :   {...j ,subDepth:[]}
            //         })
            //     }
            // })
        }
    }
})

export const getMenu = (state) => state.menu.mneuItems;
export const getMenuState = (state) => state.menu;
export const { onClickMenu, setLocation, testFn} = menuSlice.actions;
export default menuSlice