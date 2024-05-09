import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <h2>{greeting}</h2>
            <p>Contenido del contenedor...</p>
        </div>
    );
};

export default ItemListContainer;
