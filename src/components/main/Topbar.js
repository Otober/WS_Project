import styled from "styled-components";

import { AddMember, EditMember, Input_searching } from "../topbar";
//import { Input_searching } from "../topbar";

export default function Topbar(props) {
    return (
        <>
            <AddMember />
            <EditMember />
            <Input_searching />
            <StChangeButton onClick={props.changeView}> change view </StChangeButton>
        </>
    );
};

const StChangeButton = styled.div`
    height: 50px;
    width: 100px;
    background-color: #7AC5CA;
    font-family: sans-serif;
    &:hover {
        background-color: #6699FF;
    }
`;