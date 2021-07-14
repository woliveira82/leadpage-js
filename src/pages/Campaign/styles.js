import styled from 'styled-components';
   
export const Page = styled.div`
    background: rgba(255, 255, 255, 0.3);
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
`;

export const PageContent = styled.div`
    padding: 0.1rem;
    width: 100%;
    display: flex;
`;
    
export const H1 = styled.h1`
    font: bold 1.4rem Arial, sans serif;
    margin: 0.5rem 0 0.2rem 0;
`;
    
export const H2 = styled.h2`
    font: bold 1.0rem Arial, sans serif;
    margin: 0.5rem 0 0.2rem 0;
`;

export const P = styled.p`
    margin-bottom: 0.1rem;
`;
    
export const PageRight = styled.div`
    text-align: right;
`;
    
export const PageLeft = styled.div`
    text-align: left;
`;

export const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.8rem;
`;
