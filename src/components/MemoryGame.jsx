import React from 'react';
import './MemoryGame.css'
import Cards from './Cards';

function MemoryGame() {
    return(
    <section className='memory'>
        <h2>Memory</h2>
        <div className="memogame-area">
           <Cards/>
        </div>
    </section>
    )
}


export default MemoryGame;