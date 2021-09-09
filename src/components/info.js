import React from "react";
import styled, {keyframes}  from 'styled-components';
    
    const kf = keyframes`
        50%{
        transform: scale(0.8);
        }
        100%{
        opacity: 1;
        transform: scale(1);
        }
    `

    const StyledDiv = styled.div`
        transform: scale(2);
        opacity: 0;
        animation: ${kf} 0.3s ease-in-out forwards;
        padding: 25px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        h1 {
            font-size:32px;
            display: inline-block;
            padding: 5px;
            margin: 0px;
            color:
                ${props => props.type === 'materialDark' ? props.theme.materialTitle : null}
                ${props => props.type === 'regular' ? props.theme.regularTitle : null}
            ;
        }
        h2 {
            padding: 5px;
            margin: 0px 0px 0px 5px;
            color:
                ${props => props.type === 'materialDark' ? props.theme.materialDate : null}
                ${props => props.type === 'regular' ? props.theme.regularDate : null}
            ;
          }
        h3 {
            padding: 5px;
            margin: 10px 50px 0px 0px;
            align-self: flex-end;
            color:
                ${props => props.type === 'materialDark' ? props.theme.materialDate : null}
                ${props => props.type === 'regular' ? props.theme.regularDate : null}
            ;
          }
        p {
            padding: 0px;
            color:
                ${props => props.type === 'materialDark' ? props.theme.materialGray : null}
                ${props => props.type === 'regular' ? props.theme.regularBlack : null}
            ;
        }
    `

const Info = (props) => {
    const {explanation, title, date, theme, credit} = props;

    return (
        <StyledDiv type={theme} >
            <h1 type={theme} >{title}</h1>
            <h2>{date}</h2>
            <p>{explanation}</p>
            <h3>Photographer - {credit} </h3>
        </StyledDiv>
    )
} 
 
export default Info;