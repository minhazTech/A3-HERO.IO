import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout  from "./components/Layout";
// import { Home } from "./pages/Home";
// import { AllApps } from "./pages/AllApps";
// import { AppDetails } from "./pages/AppDetails";
// import { MyInstallations } from "./pages/MyInstallations";
// import { NotFound } from "./pages/NotFound";
import './App.css'

function App() {


  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="apps" element={<AllApps />} />
          <Route path="apps/:id" element={<AppDetails />} />
          <Route path="installation" element={<MyInstallations />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
