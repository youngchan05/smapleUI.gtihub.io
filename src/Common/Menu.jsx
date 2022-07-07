import React from 'react'
import ButtonContainer from '../Components/Page/Components/ButtonContainer';
import ButtonGroupContainer from '../Components/Page/Components/ButtonGroupContainer';
import CheckboxContainer from '../Components/Page/Components/CheckboxContainer';
import Colors from "../Components/Page/Core/Colors";
import Typography from "../Components/Page/Core/Typography";
import QuickSart from '../Components/Page/QuickSart/QuickSart';

function Menu() {
  return [
        {
            title:'Smaple UI',
            depth:[
                {
                    title:'Quick Start',
                    url:'/quick-Start',
                    el:<QuickSart/>
                },
            ]
        },
        {
            title:'Core',
            depth:[
                {
                    title:'Colors',
                    url:'/core/Colors',
                    el:<Colors/>
                },
                {
                    title:'Typography',
                    url:'/core/typography',
                    el:<Typography/>
                },
            ]
            
        },
        {
            title:'Components',
            depth:[
                {
                    title:'Button',
                    url:'/components/button',
                    el:<ButtonContainer/>
                },
                {
                    title:'ButtonGroup',
                    url:'/components/buttonGroup',
                    el:<ButtonGroupContainer/>
                },
                {
                    title:'CheckBox',
                    url:'/components/checkBox',
                    el:<CheckboxContainer/>
                },
            ]
        }
    ]
}

export default Menu



