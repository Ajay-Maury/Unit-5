import styled from "styled-components";

export const GridBox = styled.div`
  width: 90%;
  ${'' /* border: 5px solid red; */}
  margin: auto auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${'' /* grid-template-rows: repeat(9,350px); */}
  grid-gap: 6%;
  grid-row-gap: 2%;
  padding: 2%;
`;

export const Card = styled.div`
  display: grid;
  height:350px;
  grid-template-rows: 60% 40%;
  
  grid-gap: 2%;
  text-align: center;
  ${
    "" /* background-color: rgba(235, 124, 124, 0.658);
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @div{width:100%} */
  }
  border: 1px solid green;
`;
