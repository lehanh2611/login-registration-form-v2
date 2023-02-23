import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((page, index) => {
            const Component = page.component;
            return (
              <Route key={index} path={page.path} element={<Component />} />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
