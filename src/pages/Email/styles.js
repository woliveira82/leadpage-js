import styled from 'styled-components';
   

export const PageGrid = styled.div`
    display: grid;
    grid-template-columns: 20% auto;
    grid-gap: 0.8rem;
`;

export const Page = styled.div`
    background: rgba(255, 255, 255, 0.3);
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
`;

export const H2 = styled.h2`
    font: bold 1.0rem Arial, sans serif;
    margin: 0.5rem 0 0.2rem 0;
`;

export const Input = styled.input`

    type: text;
    width: 100%;
    placeholder: lskdf;
`;

export const Textarea = styled.textarea`
    height: 6rem;    
    width: 100%;
`;