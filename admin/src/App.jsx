import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Dashboard from "./Component/Dashboard";
import Products from "./Component/Products";
function App() {
    return (
    
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                <Route index element={<Dashboard />} />
                 <Route path="products" element={<Products />} /> 
                 </Route>
                 <Route path="login" element={<div>this is login page</div>}/>
            </Routes>
        </Router>
    );
}
export default App;