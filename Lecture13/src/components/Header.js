import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Pokemons</h1>
        </header>
    )
}

const headerStyle = {
    background: 'white',
    color: 'black',
    textAlign: 'center',
}

export default Header;