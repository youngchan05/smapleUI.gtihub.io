
const deviceSizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "450px",
    tablet: "768px",
    tabletL: "1024px",
};

const colors = {
    black: "#000000",
    white: "#FFFFFF",
    navy:'#143074',
    gray_1: "#222222",
    gray_2: "#767676",
    gray_3: "#AAAAAA",
    green_1: "#3cb46e",
};
const HeadLine = {
    h1:{fontSize:'48px', lineHeight:'60px',},
    h2:{fontSize:'32px', lineHeight:'44px',},
    h3:{fontSize:'24px', lineHeight:'34px',},
    h4:{fontSize:'20px', lineHeight:'28px',},
}
const button = {
    size: {
        lg:{
            fontSize:'22px',
            lineHeight:'28px',
            padding:'10px 16px'
        },
        md:{
            fontSize:'18px',
            lineHeight:'24px',
            padding:'8px 14px'
        },
        sm:{
            fontSize:'14px',
            lineHeight:'20px',
            padding:'6px 12px'
        },
        xs:{
            fontSize:'10px',
            lineHeight:'16px',
            padding:'4px 10px'
        },
    },
    theme : {
        default:{
            color:colors.gray_3,
            background:colors.white,
            border:`1px solid #ccc`,
            hover: {
                color:'#5A6D9D',
                border:'1px solid #5A6D9D'
            },
            disabled:{
                color:'#DDDDDD',
            },
            focus:{
                color:'#143074',
                border:'1px solid #5A6D9D'
            }
        },
        navy:{
            color:colors.white,
            background:colors.navy,
            border:'1px solid transparent',
            hover: {
                background:'#5A6D9D',
            },
            disabled:{
                background:'#DCE0EA'
            }
        },
        red:{
            color:colors.white,
            background:'rgb(253, 48, 73);',
            border:'1px solid transparent',
            hover: {
                background:'rgb(240 101 118);',
            },
            disabled:{
                color:'rgb(255, 255, 255)',
                background:'rgb(255, 242, 233);'
            }
        }
    },
}
const theme = {
    button,
    HeadLine,

};

export default theme;