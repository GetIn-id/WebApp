import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Privacy from "./screens/Privacy";
import Product from "./screens/Product";
import About from "./screens/About";
import Header from "./components/Header";
import CustomFooter from "./components/CustomFooter";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00e575",
      },
      secondary: {
        main: '#FFFFFF'
      }
    },
    typography: {
      button: {
        textTransform: "none"
      }
    }
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
        <CustomFooter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
