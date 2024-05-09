import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
        </div>
    );
};

export default App;
