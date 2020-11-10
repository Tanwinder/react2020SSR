import React from 'react';

const LoginPage = () => {
    return(
        <div style={{margin: '7% 29%'}}>
            <a href="/api/auth/google" class="waves-effect waves-light btn">Please Login First to see the Admin Page</a>
        </div>
    )
}

export default {
    component: LoginPage
}