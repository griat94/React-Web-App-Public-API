import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const Text1 = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-size: 48px;
    font-weight: 1000;
    text-align: center;
    padding: 20px 0;
    background: -webkit-linear-gradient(left, red , yellow);
    background: -o-linear-gradient(right, red, yellow);
    background: -moz-linear-gradient(right, red, yellow);
    background: linear-gradient(to right, red , yellow);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;