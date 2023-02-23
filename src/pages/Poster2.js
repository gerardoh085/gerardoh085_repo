import React, { useState } from 'react';
import pdf2 from '../ResearchPoster/machine_learning_for_cell_identification.pdf';


function Poster2() {
  
  return (
    <div>
      <h2><u>Machine Learning for Cell Identification</u></h2>
      <iframe src={pdf2} width={900} height={800}/>
    </div>
  )
}

export default Poster2;
