import React from 'react';
import img from './error.jpg';

import styled from "styled-components";

const RandomImageError = styled.img`
  width: 100%;
`

const ErrorMessage = () => {
    return (
        <>
            <RandomImageError src={img} alt='error'/>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;