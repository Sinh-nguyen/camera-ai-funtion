import React from 'react';
import { Redirect } from 'react-router-dom';

function Home() {
    const isLoggedIn=false
    let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';
    return (
        <Redirect to={linkToRedirect} />
    );
}

export default Home;