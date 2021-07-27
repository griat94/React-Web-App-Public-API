import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text1 = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-size: 22px;
    font-weight: 900;
    text-align: left;
    padding: 15px;
    width: 40%;
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
    width: 35%;
    padding: 10px 0;
`;

export const FormRowButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    padding: 100px 0 50px 0;
`;

export const BBLabel = styled.label`
    font-family: 'Abril Fatface', cursive;
    font-size: 24px;
    font-weight: 700;
    color: darkgreen;
`;

export const GotLabel = styled.label`
    font-family: 'Marcellus', serif;
    font-size: 26px;
    font-weight: 700;
    color: darkgoldenrod;
`;

export const BothLabel = styled.label`
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #494949;
`;

export const Button1 = styled.input`
    color: #494949 !important;
	text-transform: uppercase;
	text-decoration: none;
	background: lightgreen;
	padding: 10px 20px;
	border: 2px solid green !important;
	display: inline-block;
	transition: all 0.4s ease 0s;
    &:hover {
        color: #ffffff !important;
	    background: green;
	    border-color: green !important;
	    transition: all 0.4s ease 0s;
    }
`;

export const Button2 = styled.input`
    color: #494949 !important;
	text-transform: uppercase;
	text-decoration: none;
	background: lightpink;
	padding: 10px 20px;
	border: 2px solid red !important;
	display: inline-block;
	transition: all 0.4s ease 0s;
    &:hover {
        color: #ffffff !important;
	    background: red;
	    border-color: red !important;
	    transition: all 0.4s ease 0s;
    }
`;

export const Dropdown = styled.select`
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    padding: 5px;
`;