import styled from 'styled-components';

export const List = styled.div`
    display: flex;
    gap: 20px;
    align-items: baseline;
`;

export const Btn = styled.button`
    display: block;
    cursor: pointer;
    width: 90px;
    height: 30px;

    &:hover,
    &:focus {
        border: 2px solid black;
    }
`