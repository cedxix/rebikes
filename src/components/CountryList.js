import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from './../styles/colors';

const CountryContainer = styled.div`
  background-color: ${colors.sidebar};
  padding: 10px 0;
  min-width: 70px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`;
const CountryUl = styled.ul`
  margin: 0;
  padding: 0;
`;
const FlagItem = styled.li`
  margin: 0;
  padding: 0 5px;
  cursor: pointer;
  text-align: center;
  
  &.active {
    background-color: ${colors.selected};
  }

  &:hover {
    background-color: ${colors.hover};
  }
`;
const Flag = styled.div`
  background: url(${({country}) => `https://www.countryflags.io/${country}/shiny/48.png`});
  width: 100%;
  height: 48px;
`;

export const CountryList = (props) => (
  <CountryContainer >
    <CountryUl data-testid="countryListUl">
      {Object.keys(props.countries).map((countryCode) => {
        const isActive = props.active === countryCode;
        return (
          <FlagItem
            key={countryCode}
            className={isActive ? 'active': ''}
            onClick={() => props.onSelect(countryCode)}
            data-testid={countryCode}
          ><Flag country={countryCode}  /></FlagItem>
        );
      })}
    </CountryUl>
  </CountryContainer>
);

CountryList.propTypes = {
  active: PropTypes.string,
  countries: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};
CountryList.defaultProps = {
  countries: {},
};

export default CountryList;
