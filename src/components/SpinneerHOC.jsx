import React from "react";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
`;

const SpinnerHOC = (WrappedComponent) => ({ loading, ...props }) => {
  return loading ? (
    <SpinnerWrapper>Loading...</SpinnerWrapper>
  ) : (
    <WrappedComponent {...props} />
  );
};

export default SpinnerHOC;
