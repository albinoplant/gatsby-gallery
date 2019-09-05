import styled from 'styled-components';
import color from './color';

const Button = styled.button`
    height:2em;
    margin: 0 0.2em 0 0.2em;
    background: transparent;
    color: ${color.mainColorDark};
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    border: transparent solid 2px;
    border-radius: 7px;
    z-index:10002;
    cursor: pointer;
    transition: 0.2s all ease-out;
    &:hover {

        box-shadow: 1px 3px 5px rgba(0,0,0,0.3);
        border: solid 2px ${color.alertColorLight};
    }

`;
export default Button;