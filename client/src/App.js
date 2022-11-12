import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Privacy from "./screens/Privacy";
import Product from "./screens/Product";
import About from "./screens/About";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00e575",
      },
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </ThemeProvider>
    </Router>
  );
}

export default App;
