import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import MyFolders from "./MyFolders";
import Profile from "./Profile";
import Cards from "./Cards";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/sign_up' element={<SignUp />} />
                <Route exact path='/log_in' element={<LogIn />} />
                <Route exact path='/my_folders' element={<MyFolders />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/my_folders/folder' element={<Cards />} />
            </Routes>
        </div>
    )
}

export default App;