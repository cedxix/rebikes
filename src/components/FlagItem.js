import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from './../styles/colors';

const FlagItemContainer = styled.div`
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

export const FlagItem = (props) => (
  <FlagItemContainer
    key={props.countryCode}
    className={props.isActive ? 'active': ''}
    onClick={() => props.onSelect(props.countryCode)}
    data-testid={props.countryCode}
  ><Flag country={props.countryCode}  />
  </FlagItemContainer>
);

FlagItem.propTypes = {
  countryCode: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};
FlagItem.defaultProps = {
  isActive: false
};

export default FlagItem;
