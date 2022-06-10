
import {Route,Routes,Link} from "react-router-dom";
import Home from "./Components/Home";
import CreateUser from "./Components/CreateUser";
import EditUser from "./Components/EditUser";
import ShowUser from "./Components/ShowUser";
import User from "./Components/User";
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route exact path="/users" element={<User />} />
        <Route exact path="/users/create" element={<CreateUser />} />
        <Route exact path="/user/:id" element={<ShowUser />} />
        <Route exact path="/users/:id/edit" element={<EditUser />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App
