import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMusicRecords } from "../AppReducer/action";
import { useSearchParams, useLocation ,Link } from "react-router-dom";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const { musicRecords } = useSelector((store) => store.AppReducer);
  // console.log(1, musicRecords);
  const [searchParams] = useSearchParams();
  
  const location = useLocation();

  // console.log("location", location);

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      // console.log("called");
      dispatch(getMusicRecords(queryParams));
    }
  }, [location.search]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "4",
          margin: "10",
        }}
      >
        {musicRecords?.map((album) => (
          <MusicRecordssWrapper key={album.id}>
            <Link to={`/music/${album.id}`}>
              <div> {album.name} </div>
              <div>
                <img src={album.img} />
              </div>
              <div> {album.genre} </div>
              <div> {album.year} </div>
            </Link>
          </MusicRecordssWrapper>
        ))}
      </div>
    </>
  );
};

export default MusicRecords;

const MusicRecordssWrapper = styled.div`
  width: 300px;

  border: 2px solid green;
`;
