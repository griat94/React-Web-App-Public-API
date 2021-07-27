import React from 'react';
import { Author, BBText, DisplayContainer, GotText, NoGap, Quote, QuoteBlock, SmallGap } from './style';

const DisplayQuotes = (props) => {
    return (
        <DisplayContainer>
            {props.gotQuotes.length > 0 ? <GotText>GAME OF THRONES QUOTES</GotText> : null}
            {props.gotQuotes && props.gotQuotes.map((q, index) => (
                <QuoteBlock key={index}>
                    <Quote>{q.sentence}</Quote>
                    <Author>- {q.character.name}</Author>
                </QuoteBlock>
            ))}
            {props.gotQuotes.length > 0 ? <SmallGap /> : <NoGap />}
            {props.bbQuotes.length > 0 ? <BBText>BREAKING BAD QUOTES</BBText> : null}
            {props.bbQuotes && props.bbQuotes.map((q, index) => (
                <QuoteBlock key={index}>
                    <Quote>{q.quote}</Quote>
                    <Author>- {q.author}</Author>
                </QuoteBlock>
            ))}
        </DisplayContainer>
    );
}

export default DisplayQuotes;