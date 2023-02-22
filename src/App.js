

import Labs from './labs/index.js';
import Tuiter from './tuiter';
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router';





function App() {
  return (
    <BrowserRouter>
      <div className="container">
        

        {/* ROUTES OPERATE AS IF-ELSE STATEMENTS */}
        <Routes>
          {/* if statement that operates off the url path */}
          <Route path="/hello" element={<h1>Hello World</h1>} />
          {/* sets index to labs */}
          <Route path ="/*" element={<Labs/>} />
          {/* sets tuiter to tuiter  and allows for routeing to be created there*/}
          <Route path="/tuiter/*" element={<Tuiter/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
