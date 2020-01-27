import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from './../styles/colors';
import FlagItem from './FlagItem';

const CountryContainer = styled.div`
  background-color: ${colors.sidebar};
  padding: 10px 0;
  min-width: 70px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`;
const CountryUl = styled.div`
  margin: 0;
  padding: 0;
`;

export const CountryList = (props) => (
  <CountryContainer>
    <CountryUl data-testid="countryListUl">
      {Object.keys(props.countries).map((countryCode) => {
        return (
          <FlagItem
            key={countryCode}
            countryCode={countryCode}
            isActive={props.active === countryCode}
            onSelect={props.onSelect}
          />
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

export default memo(CountryList);
