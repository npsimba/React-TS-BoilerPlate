import { RecoilRoot } from "recoil"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";







export const Router = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/login"/>
                    <Route path="/register"/>
                    <Route element={<ProtectedRoute />}/>
                </Routes>            
            </BrowserRouter>
        </RecoilRoot>
    )
}