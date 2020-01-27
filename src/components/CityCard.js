import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import colors from './../styles/colors';

const CityCardContainer = styled.div`
  color: ${colors.text};
  padding: 10px 15px;
  margin: 15px auto;  
  max-width: 60%;
  
  background: ${colors.lightBackground};
  box-shadow: 0px 2px 8px 0px ${colors.dropShadow}; 
  border-radius: 2px; 
  
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  align-items: center;
`;
const CityName = styled.h1`
  font-size: 2em;
  margin-top: 0;
  margin-bottom: 15px;
`;
const CompaniesList = styled.div`
  width: 100%;
  margin-top: 20px;
  & > div {
    margin: 5px 0;
  }
`;
const BikeStats = styled.div`
  width: 100%;
`;

export const CityCard = (props) => {
  const { location, company } = props.city;
  return (
    <CityCardContainer>
      <CityName>{location.city}</CityName>
      <BikeStats>
        <span><u>Companies:</u></span>
        <span>{` 0 bikes / 114 spots`}</span>
      </BikeStats>
      <CompaniesList>
        {company && company.map((companyName) => (
          <div key={companyName}>{companyName}</div>
        ))}
      </CompaniesList>
    </CityCardContainer>
  )
};

CityCard.propTypes = {
  city: PropTypes.shape({
    location: PropTypes.object,
    company: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    id: PropTypes.string.isRequired,
  }),
};
CityCard.defaultProps = {};

export default CityCard;
