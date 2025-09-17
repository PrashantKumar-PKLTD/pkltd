// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Content } from "./screens/Content/Content";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import  DataPage  from "./screens/Content/services/DataPage";
import TechPage  from "./screens/Content/services/TechPage";
import DigitalPage  from "./screens/Content/services/DigitalPage";
import CreativesPage from "./screens/Content/services/CreativesPage";
import AIPage  from "./screens/Content/services/AIPage";
import AgilePage  from "./screens/Content/services/AgilePage";
import SustainabilityPage  from "./screens/Content/services/SustainabilityPage";
import LegalPage  from "./screens/Content/services/LegalPage";



createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter /* basename={import.meta.env.BASE_URL} */>
    
  <Header />
      {/* push content below fixed header */}
      <main className="pt-16">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Content />} />

          {/* Services */}
          <Route path="/services/digital" element={<DigitalPage />} />
          <Route path="/services/tech" element={<TechPage />} />
          <Route path="/services/data" element={<DataPage />} />
          <Route path="/services/creatives" element={<CreativesPage />} />
          <Route path="/services/ai" element={<AIPage />} />
          <Route path="/services/agile" element={<AgilePage />} />
          <Route path="/services/sustainability" element={<SustainabilityPage />} />
          <Route path="/services/legal" element={<LegalPage />} />

          {/* Fallback */}
  
        </Routes>
      </main>



    </BrowserRouter>
  </StrictMode>
);
