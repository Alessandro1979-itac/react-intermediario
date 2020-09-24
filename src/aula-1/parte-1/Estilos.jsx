import React from 'react';
import Inline from './components/Inline';
import ClassName from './components/ClassName';
import Styled from './components/Styled';

const Estilos = () => (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Inline />
        <ClassName />
        <Styled />
    </div>
);

export default Estilos;
