import styled from "styled-components"
import png from "./logo.png"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import StarIcon from '@material-ui/icons/Star';
import TheatersIcon from '@material-ui/icons/Theaters';
import TvIcon from '@material-ui/icons/Tv';
import { auth, provider } from "../firebase";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import {selectUserName,selectUserEmail,selectUserPhoto, setUserLoginDetails, setSignOutState} from "../features/user/userSlice"
import {useEffect} from "react"; 

function Header(props){

    const dispatch= useDispatch();
    const history=useHistory();
    const userName=useSelector(selectUserName);
    {userName && console.log(userName)}
    const email=useSelector(selectUserEmail);
    const photo=useSelector(selectUserPhoto);


    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user) {
                setUser(user)
                history.push("/home")
            }
        })
    },[userName]);

 //methord comes build in with auth
    const handleAuth=()=>{
        if(!userName){
            auth.signInWithPopup(provider).then((result)=>{
                console.log(result);
                setUser(result.user);
            }).catch((error)=>{
                alert(error.message);
            })
        } else if(userName) {
            auth.signOut().then(()=>{
                dispatch(setSignOutState());
                history.push("/");
            }).catch((err)=>{
                alert(err.message);
            })
        }
    }
       //here we are setting our user info in our redux store
   //user info is coming from auth result
   const setUser=(user)=>{
    //we are creating payload inside this function
    //it can be a variable,object anything
 dispatch(setUserLoginDetails({
  name: user.displayName,
  email: user.email,
  photo: user.photoURL, 
 }));
};
    return (
       <Nav>
        <Logo>
            <img src={png} alt="Netflix" />
        </Logo>
        {
            !userName? <Login onClick={handleAuth}>Login</Login> : 
            <>
        <NavMenu>
        <a href="/home">
            <HomeIcon alt="HOME" />
            <span>HOME</span>
        </a>
        <a href="/search">
            <SearchIcon alt="SEARCH" />
            <span>SEARCH</span>
        </a>
        <a href="/watchlist">
            <AddToQueueIcon alt="WATCHLIST" />
            <span>WATCHLIST</span>
        </a>
        <a href="/originals">
            <StarIcon alt="ORIGINALS" />
            <span>ORIGINALS</span>
        </a>
        <a href="/movies">
            <TheatersIcon alt="MOVIES" />
            <span>MOVIES</span>
        </a>
        <a href="/series">
            <TvIcon alt="SERIES" />
            <span>SERIES</span>
        </a>
        </NavMenu>
        <SignOut>
        <UserImg src={photo} alt={userName} />
        <DropDown>
            <span className="so" onClick={handleAuth}>Sign Out</span>
        </DropDown>
        </SignOut>
        </>
        }
       </Nav>
    )
}



const Nav=styled.nav`
position: fixed;
background-color: black;
color: white;
top: 0;
left: 0;
right: 0;
height: 70px;
z-index:3;
display:flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
`;

const Logo=styled.a`
padding: 0;
width: 100px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;
img {
    display: block;
    width: 100%;
}
`;

const NavMenu=styled.div`
align-items: center;
display:flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
margin-right: auto;
position: relative;
margin-left: 25px;

@media (max-width: 768px){
    display: none;
}

a {
    display:flex;
    align-items:center;
    padding: 0 12px;
    z-index: auto;

   span{
       color: rgb(249, 249, 249);
       margin-left: 5px;
       margin-top: 2px;
       font-size: 14px;
       letter-spacing: 1.42px;
       line-height: 1.08;
       padding: 2px 0px;
       
       white-space: nowrap;
       position: relative;
       font-family: 'Montserrat', sans-serif;
   
       &:before{
       background-color: rgb(249,249,249);
       border-radius: 0px 0px 4px 4px;
       bottom: -6px;
       content:"";
       height: 2px;
       opacity: 0;
       position: absolute;
       right: 0px;
       left: 0px;
       transform-origin: left center;
       transform: scaleX(0);
       transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
       visibility: hidden;
       width:auto;
   }
   
   }
   
   &:hover {
       
       span:before{
           transform: scaleX(1);
           visibility:visible;
           opacity: 1 !important;
       }
   }
}
`;


const Login=styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #db0000;
border-radius: 4px;
transition:  0.08s ease-in;
-o-transition:      0.08s ease-in;
  -ms-transition:     0.08s ease-in;
  -moz-transition:    0.08s ease-in;
  -webkit-transition: 0.08s ease-in;
position:relative;
z-index:1;
text-decoration:none;

&:hover {
    color: white;
    cursor:pointer;
    font-weight: 700;
}
&:before{
    content:"";
    position:absolute;
    background: #db0000;
    left:0;
    right:100%;
    bottom:0;
    top:0;
    z-index:-1;
    -webkit-transition: right 0.09s ease-in;
}
&:hover:before{
    right:0;
}
`;


const UserImg =styled.img`
height: 100%;
`;

const DropDown=styled.div`
position: absolute;
top: 50px;
right: 0px;
background: rgb(19,19,19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 4px;
box-shadow: rgba(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100px;
opacity: 0;
overflow: hidden;
    white-space: nowrap;
`;

const SignOut=styled.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;


${UserImg} {
    border-radius: 50%;
     width: 100%;
     height: 100%;
}

&:hover {
  ${DropDown} {
      opacity:1;
      transition-duration: 1s;
  }
}
`;

export default Header;