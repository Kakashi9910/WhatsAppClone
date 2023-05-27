import { Drawer,Box,Typography,styled} from "@mui/material";
import {ArrowBack} from '@mui/icons-material';
import Profile from "./Profile";


const Header=styled('Box')`
background:#008069;
height:107px;
color:#ffffff;
display:flex;
& > svg,& > p{
  margin-top:auto;
  padding:15px;
  font-weight:600;
}
`
const Component=styled(Box)`
background:#ededed;
height:85%;
`
const drawerStyle={
  left:20,
  top:35,
  height:'90%',
  width:'409px',
  boxShadow:'none'
}
const DrawerMenu=({open,setOpen})=>{
   
    const toggleDrawer=()=>{
        setOpen(false);
        
    }
    
    return(
        <Drawer
        open={open}
        onClose={toggleDrawer}
        PaperProps={{sx:drawerStyle}}
        // hideBackdrop={true}
        style={{zIndex:1500}}
      >
        <Header>
        <ArrowBack onClick={toggleDrawer}></ArrowBack>
        <Typography>Profile</Typography>
        </Header>
        <Component>
           <Profile/>
        </Component>
      </Drawer>
    )
}

export default DrawerMenu;