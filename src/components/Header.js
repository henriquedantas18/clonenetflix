import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
       <header className= {black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://fontmeme.com/permalink/231005/61bf6791a4dcc082dab3f2e197dc3202.png" alt="Rickflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="usuário" />
                </a>
            </div>
       </header> 
    );
}