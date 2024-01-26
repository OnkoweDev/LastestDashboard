// TypewriterComponent.jsx

import React from "react";
import { Typewriter } from "react-simple-typewriter";


const TypewriterComponent = ({ writers }) => {
    const combinedContent = writers.map((writer) => writer.generated_contents).join('\n\n');
  
    const formattedContent = combinedContent.split('\n\n').map((content, i) => {
      if (content.startsWith('Title')) {
        return <strong key={i} style={{ display: 'block' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></strong>;
      } else if (content.startsWith('Subsection')) {
        return <p key={i} style={{ margin:'15px', display: 'block', fontSize: '17px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></p>;
      } else if (content.startsWith('Section')) {
        return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></b>;
      } 
      else if (content.startsWith('Introduction')) {
        return <p key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></p>;
      }

      else if (content.startsWith('Conclusion')) {
        return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></b>;
      }
      

      else if (content.startsWith('a')) {
        return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></b>;
      }

      else if (content.startsWith('b')) {
        return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></b>;
      }

      else if (content.startsWith('c')) {
        return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></b>;
      }

      else if (content.startsWith('d')) {
        return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></b>;
      }
      
      else {
        return <div style={{ margin:'15px', display: 'block', fontSize: '17px' }} key={i}><Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></div>;
      }
    });
  
    return (
      <div>
        {formattedContent}
      </div>
    );
  };
  
  export default TypewriterComponent;

