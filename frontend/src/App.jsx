import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './assets/components/Register.jsx'
import Login from './assets/components/Login.jsx';
import Dashboard from './assets/components/Dashboard.jsx';

import Start from './assets/components/Start.jsx';
import Interview from './assets/components/Interview.jsx';
import SidebarDashboard from './assets/components/SidebarDashboard.jsx';
import Videos from './assets/components/Videos.jsx';
import Pdf from './assets/components/Pdf.jsx';
import Page from './assets/components/Page.jsx';
import CodeEditor from './assets/components/CodeEditor.jsx';
import Quiz from './assets/components/Quiz.jsx';
import HtmlQuiz from './assets/components/Htmlquiz.jsx';
import Java from './assets/components/Java.jsx';
import C from './assets/components/C.jsx';
import Python from './assets/components/Python.jsx';
import Profile from './assets/components/Profile.jsx';
import Signout from './assets/components/Signout.jsx';
import OpenAI from './assets/components/OpenAi.jsx';
import Course from './assets/components/Course.jsx';
import Settings from './assets/components/Settings.jsx';
import About from './assets/components/About.jsx';
import Contact from './assets/components/Contact.jsx';






function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/SidebarDashboard' element={<SidebarDashboard/>}/>
          <Route path='/Pdf' element={<Pdf/>}/>
           <Route path='/Interview' element={<Interview/>}/>
           <Route path="/videos" element={<Videos />} />
           <Route path="/page" element={<Page/>} />
           <Route path="/CodeEditor" element={<CodeEditor/>} />
           <Route path="/Quiz" element={<Quiz/>} />
           <Route path="/HtmlQuiz" element={<HtmlQuiz/>} />
           <Route path="/Java" element={<Java/>} />
           <Route path='/c' element={<C/>}/>
           <Route path='/python' element={<Python/>}/>
           <Route path='/Profile' element={<Profile/>}/>
           <Route path='/signout' element={<Signout/>}/>
           <Route path='/openai' element={<OpenAI/>}/>
           <Route path='/course' element={<Course/>}/>
           <Route path='/settings' element={<Settings/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
