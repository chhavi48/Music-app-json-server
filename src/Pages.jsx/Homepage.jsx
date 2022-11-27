import React from "react";
import FilterSort from "../Components/FilterSort";
import MusicRecords from "./MusicRecords";
import styled from "styled-components";

const Homepage = () => {
  return (
    <div>
      <HomePageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <MusicRecorderWrapper>
          <MusicRecords />
        </MusicRecorderWrapper>
      </HomePageWrapper>
    </div>
  );
};

export default Homepage;

const HomePageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const FilterSortWrapper = styled.div`
  width: 230px;
  backgroudcolor: yellow;
  border: 3px solid red;
`;

const MusicRecorderWrapper = styled.div`
  width: 100%;
  border: 4px solid black;
  display:grid;
  grid-template-column : repeat(auto-fit,minmax(300px,max-content));
  justify-content : center;
  gap : 10px;
`;
