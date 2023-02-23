import React, { useState } from 'react';
import '../styles/posters.css'
import pdf1 from '../ResearchPoster/machine_learning_spMatrix_Matrix_Multiplication.pdf';


function Poster1() {

  return (
    <div>
      <h2><u>Sparse Matrix Matrix Multiplication Accelerator</u></h2>
    
      <div className='poster'>
        <iframe src={pdf1} width={900} height={800}/>      
      </div>
    </div>
  )
}

export default Poster1;
