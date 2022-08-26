import styled from "styled-components";

export const FormWrapper = styled.form`
display: flex;
align-items: center;

& input {
    border-radius: 0px 4px 4px 0px;
    border: none;
    height: 40px;
    width: 300px;
    font-size: 14px;
    padding-left: 8px;
    padding-right: 8px;
}
& button {
    background-color: #E0E0E0;
    font-size: 16px;
    border: none;
    border-radius: 4px 0px 0px 4px;
    height: 40px;
    padding-left: 12px;
    padding-right: 12px;
}
`