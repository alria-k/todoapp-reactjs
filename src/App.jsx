import { Routes, Route } from "react-router-dom";
import { Form, FormList } from "./components";
import { Finished, Uncompleated } from "./components/Menu";

import "./components/Form/Form.scss";
import "./components/FormList/FormList.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />}>
          <Route index element={<FormList />} />
          <Route path="compleated" element={<Finished />} />
          <Route path="uncompleated" element={<Uncompleated />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
