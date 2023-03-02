import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

// TODO: Kolla vilken typ movieData är

interface Props {
  key: number;
  title: string;
}

export default function WatchlistCard(props: Props) {
  return (
    <WatchCardWrapper>
      <LeftColumn>
        <img src="src/assets/defaultPoster.jpg" height="150px" />
        <RemoveButton>Remove</RemoveButton>
      </LeftColumn>
      <LeftColumn>
        <MovieTitle>{props.title}</MovieTitle>
        <MovieDescription>
          Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugit vel sint provident ducimus? Quaerat, perferendis pariatur harum
          consectetur provident maxime illo id quae nesciunt quidem numquam,
          neque repellendus a beatae.
        </MovieDescription>
      </LeftColumn>
    </WatchCardWrapper>
  );
}

const WatchCardWrapper = styled.div`
  width: 45rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  gap: 1rem;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const MovieTitle = styled.h2`
  color: black;
  font-weight: bold;
`;
const MovieDescription = styled.p`
  color: black;
`;

const RemoveButton = styled.button`
  color: black;
  border: none;

  width: 100%;
  height: 30px;
  background: red;
`;

const poster = styled.img;
