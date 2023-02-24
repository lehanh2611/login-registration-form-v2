import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <div className="App">
        <Auth /> {/* Demo */}
        {/* <Routes>
          {publicRoutes.map((page, index) => {
            const Component = page.component;
            return (
              <Route key={index} path={page.path} element={<Component />} />
            );
          })}
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
