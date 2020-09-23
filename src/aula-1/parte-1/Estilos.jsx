import React from 'react';
import Inline from './components/Inline';
import ClassName from './componentes/ClassName';
import Styled from './componentes/Styled';

const Estilos = () => (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Inline />
        <ClassName />
        <Styled />
    </div>
);

export default Estilos;
