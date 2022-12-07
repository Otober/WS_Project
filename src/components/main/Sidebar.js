import styled from "styled-components"
import UserPofile from "./UserProfile";
import { WorkspaceList } from "../sidebar";
import { LogoutSeq } from "../login";

import logo from "../../asset/logo/nodeBook_Logo_horizon_blue.png";

export default function Sidebar() {
    return (
        <StSidebar>
            <StLogo src={logo} />
            <UserPofile />
            <LogoutSeq />
            <WorkspaceList />
        </StSidebar>
    );
}

const StSidebar = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    overflow-x: hidden;
    transition: 0.5s;
`;

const StLogo = styled.img`
    display: block;
    margin: 20px 20px 10px auto;
    width: 150px;
`;