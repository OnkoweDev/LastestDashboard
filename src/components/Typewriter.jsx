// TypewriterComponent.jsx

import React from "react";
import { Typewriter } from "react-simple-typewriter";


const TypewriterComponent = ({ writers }) => {
    const combinedContent = writers.map((writer) => writer.generated_contents).join('\n\n');
  
    const formattedContent = combinedContent.split('\n\n').map((content, i) => {
      if (content.startsWith('Section')) {
        return <strong key={i} style={{ display: 'block' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} cursor/></strong>;
      } else if (content.startsWith('Subsection')) {
        return <b key={i} style={{ display: 'block', fontSize: '17px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} cursor/></b>;
      } else if (content.startsWith('Title')) {
        return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} cursor/></b>;
      } else {
        return <div key={i}><Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} cursor/></div>;
      }
    });
  
    return (
      <div>
        {formattedContent}
      </div>
    );
  };
  
  export default TypewriterComponent;

