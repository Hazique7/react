import { Button , Menu,Drawer } from 'antd';

import Addmission from '../addmission form/Addmission';
function Navbar({isInline = false}){
    return(
        
        <Menu mode={"horizontal"} style={{justifyContent:'center',backgroundColor:'#6ee1c4',border:'none' , height:70,alignItems:"center"}} items={[{label:"HOME",key:" home"},
        {label:"ABOUT",key:"about"},
        {label:"MEDIA",key:"media"},
        {label:"CONTACT",key:"contact"},
       {label:"ADDMISION",key:"addmission"}]}></Menu>
        
        
        
       
    )
}
export default Navbar;


