import React from "react";
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useTheme } from "./contexts/ThemeContext";
import ProductList from "./components/ProductList";

const Container = styled.div`
  background-color: ${({ theme }) => (theme.isDark ? "#333" : "#fff")};
  color: ${({ theme }) => (theme.isDark ? "#fff" : "#000")};
  min-height: 100vh;
  padding: 20px;
`;

const App = () => {
  const { isDark, toggleTheme } = useTheme(); // Destructure correctly

  return (
    <StyledThemeProvider theme={{ isDark }}>
      <Container>
        <button onClick={toggleTheme}>
          Switch to {isDark ? "Light" : "Dark"} Theme
        </button>
        <ProductList />
      </Container>
    </StyledThemeProvider>
  );
};

export default App;
