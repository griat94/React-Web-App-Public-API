import styled from 'styled-components';

export const DisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SmallGap = styled.div`
    padding: 30px 0;
`;

export const NoGap = styled.div`
    padding: 0;
`;

export const QuoteBlock = styled.blockquote`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px double darkgrey !important;
    width: 45%;
    margin: 10px 0;
    background: #dddddd;
`;

export const Quote = styled.p`
    font-size: 24px;
    font-weight: 500px;
    text-align: center;
    margin: 5px;
`;

export const Author = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 5px;
`;

export const BBText = styled.div`
    font-family: 'Abril Fatface', cursive;
    font-size: 24px;
    font-weight: 700;
    color: darkgreen;
`;

export const GotText = styled.div`
    font-family: 'Marcellus', serif;
    font-size: 26px;
    font-weight: 700;
    color: darkgoldenrod;
`;