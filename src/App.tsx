import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import "../languages/i18n";
import { RootLayout } from "./pages/layout";
import { HomePage } from "./pages";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="mayom-website-theme">
      <BrowserRouter basename="/mayom-website">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
