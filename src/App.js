import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./theme/globalStyle";
import HomeContainer from "./containers/HomeContainer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeContainer />
    </ThemeProvider>
  );
};

export default App;
