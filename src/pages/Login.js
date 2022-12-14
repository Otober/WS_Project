import styled from "styled-components";
import { Link } from "react-router-dom";

import { LoginSeq } from "../components/login";
import logo from "../asset/logo/nodeBook_Logo_white.png"

export default function Login() {
    return (
        <StLoginCont>
            <StLoginBox>
                <Link to='/'>
                    <StLogo src={logo} alt='home'/>
                </Link>
                <LoginSeq />
            </StLoginBox>
        </StLoginCont>
    );
}

const StLoginCont = styled.div`
    margin: auto;

    height: 100%;
    width: 80%;
`;

const StLoginBox = styled.div`
    margin: 150px auto;
    height: 730px;
    width: 900px;
    background-color: #EAEAEA;
    boarder-radius: 10px 10px;
`;

const StLogo = styled.img`
    display: block;
    margin: 20px auto;
    padding: 40px 0px 0px;
`;