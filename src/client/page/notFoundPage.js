import React from 'react';

const NotFoundPage = ({staticContext = {}}) => {
    staticContext.notFound = true;
    return(
        <div style={{fontSize: 40, color: 'orange', textAlign: 'center', marginTop: '10%'}}>OOPs couldn't find this page</div>
    )
}

export default {
    component: NotFoundPage
}