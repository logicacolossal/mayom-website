import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import "./index.css";
import { RootLayout } from "./pages/layout";
import { HomePage } from "./pages/page";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="mayom-website-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
