import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/Api';



const Component = styled(Box)`
  display:flex;
`
const dialogStyled = {
    height: '96%',
    width: '60%',
    marginTop: '12%',
    boxShadow: 'none',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
}
const Container = styled(Box)`
padding:56px 0 56px 56px 
`
const QrCode = styled('img')(
    {
        height: 264,
        width: 264,
        margin: '50px 0 0 50px',
    }
);
const Title = styled(Typography)`
   font-size:26px;
   color:#525252;
   font-weight:300;
   font-family:inherit;
   margin-bottom:25px;
`
const StyledList = styled(List)`
     & > li {
        padding:0,
        margin-top:15px,
        font-size:18px,
        line-height:28px,
        color:#4a4a4a,
     }
`
const LoginDialog =() => {
    const {setAccount}=useContext(AccountContext);
    const OnLoginSuccess=async(res)=>{
          const decoded=jwt_decode(res.credential);
          setAccount(decoded);
           await addUser(decoded);
        }
    return (
        <Dialog open={true}
            PaperProps={{ sx: dialogStyled }}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>To use WhatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1.Open WhatsApp on your phone</ListItem>
                        <ListItem>2.Tap menu setting and select WhatsWeb web</ListItem>
                        <ListItem>3.Point your phone to this screen to capture screen</ListItem>

                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QrCode src={qrCodeImage} alt="alt" />
                    <Box style={{position:'absolute',top:'50%',left:'25%'}}>
                        <GoogleLogin
                            onSuccess={OnLoginSuccess}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;