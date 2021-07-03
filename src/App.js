
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { createContext, useState } from "react";

export const UserContext = createContext();
function App() {
    const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
    {" "}
    <div className="app">
    {!user ? ( 
      <Login />
    ):(
      <>
      <Header />
    <div className="app_body">
    <Sidebar />
    <Feed />
    <Widgets />
    
    </div>
    </>
    )}
    </div>
    </UserContext.Provider>
  );
}

export default App;