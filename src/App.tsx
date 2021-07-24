import React from 'react';
import './App.css';
import DashBoard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Home from './components/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={DashBoard} />
        </BrowserRouter>
    );
};

export default App;
