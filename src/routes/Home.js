import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Home() {
    const isLoggedIn = useSelector(state=>state.user.isLoggedIn)
    let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';
    return (
        <Redirect to={linkToRedirect} />
    );
}

export default Home;