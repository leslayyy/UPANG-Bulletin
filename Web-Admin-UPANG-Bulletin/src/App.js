import React, {useState} from 'react';
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Settings from './components/Settings';

export default function App() {

  const [closedNav, setClosedNav] = useState(false)

  const toggleNav = () => {
    setClosedNav(!closedNav)
  }

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <div className='flex'>
        {/* nav section*/}
        <div className={getNavWidth() + " min-h-screen bg-green-800 transition-width border-r"}>
            <div className="sticky top-0">
            <Navbar closed={closedNav}/>
            </div>
        </div>
        
        
        
        {/* content section*/}
        <div className=" flex-1 min-h-screen ">
          <div className='sticky top-0'>
          <div className='flex item-center p-2 space-x-2'>
          <button onClick={toggleNav}>
           {closedNav ? (
               <AiOutlineMenuUnfold size={25}/> 
           ) : (
               <AiOutlineMenuFold size={25}/> 
           )}
          </button>
          <SearchForm/>
          </div> 
          </div>
    


          <div className="max-w-screen-lg mx-auto">

            <Routes>
              
              <Route path='/' element={<Home/>} />
              <Route path='/create-post' element={<CreatePost/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/settings' element={<Settings/>} />
              <Route path='/update-post' element={<UpdatePost/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
           
          </div>
        </div>
    </div>
  );
}


