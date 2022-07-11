import React from 'react';
import Homepage from './components/Hompage/Homepage';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Findpage from './components/Findpage/Findpage';
import MealDetailsPage from './components/MealDetailsPage/MealDetailsPage';
import CategoryList from './components/CategoryList/CategoryList';
import Category from './components/Category/Category';
import Random from './components/Random/Random';
import {AnimatePresence} from 'framer-motion';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <div className="content">
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/find" element={<Findpage/>}/>
              <Route path="/meal/:idMeal" element={<MealDetailsPage/>}/>
              <Route path="/categories" element={<CategoryList/>}/>
              <Route path="/category/:strCategory" element={<Category/>}/>
              <Route path="/random" element={<Random/>}/>
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
