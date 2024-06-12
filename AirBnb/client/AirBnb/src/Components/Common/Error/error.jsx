import React from 'react';

export default function ErrorDisplay({error}){
    return(
        <>
        <div className="alert alert-danger col-6 offset-3 position-absolute" role="alert">
            {error}
        </div>
        </>
    )
}