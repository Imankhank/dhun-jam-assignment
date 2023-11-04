import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AssiduusDahboard from '../modules/assiduus-dahboard';


const MainRoute = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<AssiduusDahboard />} />
                </Routes>
            </Router>
        </>
    )
}

export default MainRoute