import styled from "styled-components"

function Login(props){
    return (
        <Container>
            <Content>
            <SU>
             <D1>Unlimited films, TV programmes and more.</D1>
            <BB>GET STARTED</BB>
            <D2>Watch anywhere. Cancel at any time.</D2>
            </SU>
             <BgImage></BgImage>
            </Content>
        </Container>
    )
}

const Container= styled.section`
overflow:hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content=styled.section`
margin-bottom: 10vw;
width: 100%;
position:relative;
min-height: 100vh;
box-sizing:border-box;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
padding: 80px 40px;
background: rgba(0,0,0,0.4);
background-image: linear-gradient(
to top,
rgba(0,0,0,0.9) 0,
rgba(0,0,0,0) 60%,
rgba(0,0,0,0.9) 100%
);
`;

const BgImage=styled.section`
height: 100%;
background: url("./images/bg.png");
top:0;
left:0;
right:0;
z-index:-1;
background-position: top;
background-size:cover;
background-repeat: no-repeat;
position: absolute;
height: 100%;
`;

const SU=styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:0;
align-items:center;
text-align:center;
margin-right:auto;
margin-left:auto;
transiton-timimg-function: ease-out;
transition: opacity 0.2s;
width: 100%;
`;
const D1=styled.p`
font-size: 3rem;
font-weight: 550;
`;

const BB= styled.a`
font-weight: 800;
color: white;
background-color: #db0000;
margin-botton: 12px;
width: 85%;
letter-spacing: 1.5px;
font-size: 20px;
padding: 16px 0;
border: 1px solid transparent;
border-radius: 4px;
margin-top: 12px;
margin-bottom: 8px;
font-family: sans-serif;
transition: 0.3s;
&:hover {
    background-color: black;
    border: 0.5px solid #db0000;
    color: white;
}
`;

const D2=styled.p`
font-size: 1.4rem;
font-weight: 450;
opacity: 0.9;
`;

export default Login