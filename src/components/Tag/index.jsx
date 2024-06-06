// import React, { useState, useEffect } from 'react';
// import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from "./styles";

export function Tag({...rest }) {

  return (
    <Container >
      <input
        type="text"
        {...rest}
      />
      <button type="button"> 
        {/* {isNew ? <FiPlus /> : <FiX />} */}
      </button>
    </Container>
  );
}

