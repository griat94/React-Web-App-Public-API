import React, { useState } from 'react';
import { FormContainer, Text1, FormRow, FormRowButtons, BBLabel, GotLabel, BothLabel, Button1, Button2, Dropdown } from './style';
import { options } from './options';
import { getBreakingBadQuotes, getGameofThronesQuotes } from '../apiCalls';
import DisplayQuotes from '../displayQuotes';

const Form = () => {

    const [show, setShow] = useState('');
    const [quotesAmount, setQuotesAmount] = useState(0);
    const [breakingBadQuotes, setBreakingBadQuotes] = useState([]);
    const [gameOfThronesQuotes, setGameOfThronesQuotes] = useState([]);

    const handleSetShow = (event) => {
        setShow(event.target.value);
    }

    const handleQuotesAmount = (event) => {
        setQuotesAmount(event.target.value);
    }

    const handleGetQuotes = (event) => {
        event.preventDefault();

        setBreakingBadQuotes([]);
        setGameOfThronesQuotes([]);

        if (show === "bb") {
            getBreakingBadQuotes(quotesAmount, setBreakingBadQuotes);
        } else if (show === "got") {
            getGameofThronesQuotes(quotesAmount, setGameOfThronesQuotes);
        } else {
            getBreakingBadQuotes(quotesAmount, setBreakingBadQuotes);
            getGameofThronesQuotes(quotesAmount, setGameOfThronesQuotes);
        }
    }

    const handleClearForm = () => {
        setBreakingBadQuotes([]);
        setGameOfThronesQuotes([]);
    }

    return (
        <>
            <FormContainer onSubmit={handleGetQuotes}>
                <Text1>Which famous TV show would you like to see quotes from?</Text1>
                <FormRow>
                    <input
                        id="radio-input_got"
                        type="radio"
                        value="got"
                        onChange={handleSetShow}
                        checked={show === "got"} />
                    <GotLabel>GAME OF THRONES</GotLabel>
                </FormRow>
                <FormRow>
                    <input
                        id="radio-input_bb"
                        type="radio"
                        value="bb"
                        onChange={handleSetShow}
                        checked={show === "bb"} />
                    <BBLabel>BREAKING BAD</BBLabel>
                </FormRow>
                <FormRow>
                    <input
                        id="radio-input_both"
                        type="radio"
                        value="both"
                        onChange={handleSetShow}
                        checked={show === "both"} />
                    <BothLabel>I can't decide! How about both?</BothLabel>
                </FormRow>
                <Text1>How many quotes would you like to see?</Text1>
                <FormRow>
                    <Dropdown value={quotesAmount.value} onChange={handleQuotesAmount}>
                        <option default>Select</option>
                        {options && options.map((opt, index) => (
                            <option key={index} value={opt.value}>{opt.label}</option>
                        ))}
                    </Dropdown>
                </FormRow>
                <FormRowButtons>
                    <Button1 type="submit" value="Get Quotes" />
                    <Button2 type="button" value="Clear" onClick={handleClearForm} />
                </FormRowButtons>
            </FormContainer>

            <DisplayQuotes bbQuotes={breakingBadQuotes} gotQuotes={gameOfThronesQuotes} />
        </>
    );
}

export default Form;