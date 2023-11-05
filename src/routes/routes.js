import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AssiduusDahboard from '../modules/assiduus-dahboard';
import Layout from '../components/layout/layout';


const MainRoute = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path='/' element={<AssiduusDahboard />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default MainRoute