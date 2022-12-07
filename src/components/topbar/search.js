import styled from "styled-components";

import axios from "axios";

import ReactModal from "react-modal";

import { useState } from "react";

import { useRecoilValue } from "recoil";
import { workspaceState, isLoginState } from "../../utils/atom";

import { config } from "../../definitions";

export default function Input_searching(props) {
    let { style = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.45)",
            zIndex: 10,
        },
        content: {
            display: "flex",
            justifyContent: "center",
            background: "#ffffff",
            overflow: "auto",
            top: "10vh",
            left: "10vw",
            right: "10vw",
            bottom: "10vh",
            WebkitOverflowScrolling: "touch",
            borderRadius: "14px",
            outline: "none",
            zIndex: 10
        }
    } } = props;
    const currentWorkspace = useRecoilValue(workspaceState);
    const userState = useRecoilValue(isLoginState);

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const searching = async (event) => {
        event.preventDefault();
        try {
            let server = config.ip + config.port;
            let params = { workspace_id: currentWorkspace.id, str: text }
            const res = await axios.post(server + '/bookmark/search', params);
            if (res.status == 200) Input_searching(event);
            else console.log(res.status);
        }
        catch (error) { console.log(error); }

    }

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={searching}>search</button>
        </div>
    );
};