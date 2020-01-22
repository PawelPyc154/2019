import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

const mapImage = require('../../../images/contact/ID1720x400px.png');

export interface MapProps {}

const Map: React.SFC<MapProps> = () => {
  return (
    <Figure>
      <FaMapMarkerAlt />
    </Figure>
  );
};

export default Map;

const Figure = styled.figure`
  height: 200px;
  background: url(${mapImage}) no-repeat center;
  width: 100%;

  @media screen and (min-width: 1000px) {
    height: 400px;
  }
`;
