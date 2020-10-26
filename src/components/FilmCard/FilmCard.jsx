import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 180px;
  height: 300px;
  background-color: aquamarine;
  border-radius: 20px;
`



export const FilmCard = () => (
    <StyledCard>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur earum enim expedita illum optio quae rem sit suscipit tenetur?</p>
    </StyledCard>
)