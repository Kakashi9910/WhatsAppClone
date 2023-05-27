import { Box ,styled,Typography} from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";


const ImageContainer=styled(Box)`
 display:flex;
 justify-content:center;
 height:200px;
 align-items:center;
`
const Image=styled('img')({
    width:180,
    height:180,
    borderRadius:"50%",

})
const Wrapper=styled(Box)`
background:#ffffff;
padding:12px 30px 2px;
box-shadow:0 1px 3px rgba(0,0,0,0.08);
& :first-child{
    color:#009688;
    font-size:13px;
    font-weight:200;
}
& :last-child{
    margin:14px 0;
    color:#4a4a4a;

}
`
const Description=styled(Box)`
padding:15px 20px 28px 30px;
   & > p{
    color:#8696a0;
    font-size:13px;
   }
`
const Profile=()=>{
    const {account}=useContext(AccountContext);
    console.log("Palash"+account.picture);
    return (
   <>
      <ImageContainer>
      <Image src={account.picture} alt="awdf" />
      </ImageContainer>
      <Wrapper>
      <Typography>Your name</Typography>
      <Typography>{account.name}</Typography>
      </Wrapper>
      <Description>
        <Typography>This is not your username or pin. This name will be visible to your whatsApp contacts.</Typography>
      </Description>
      <Wrapper>
        <Typography>About</Typography>
        <Typography>Eat! sleep! code! repeat</Typography>

      </Wrapper>
   </>

        )
}

export default Profile;