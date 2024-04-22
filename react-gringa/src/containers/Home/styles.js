import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Content = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding-bottom: 100px;
`

export const ContainerItems = styled.div`
display: grid;
grid-template-columns: 240px 240px 240px 240px;
gap: 16px;

@media ${breakpoints.bg}{
    grid-template-columns: 240px 240px 240px;

}

@media ${breakpoints.md}{
    grid-template-columns: 240px 240px;
}

@media ${breakpoints.sm}{
    grid-template-columns: 80vw;

}
`