// TypewriterComponent.jsx

import React from "react";
import { Typewriter } from "react-simple-typewriter";


const EmailFormatter = ({ gene }) => {
    const combinedContent = gene.map((writer) => writer.generated_emails).join('\n\n');
  
    const formattedContent = combinedContent.split('\n\n').map((content, i) => {
      if (content.startsWith('Subject')) {
        return <strong key={i} style={{ display: 'block' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></strong>;
      } else if (content.startsWith('Subsection')) {
        return <b key={i} style={{ display: 'block', fontSize: '17px', lineHeight:'1em' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></b>;
      } else if (content.startsWith('Title')) {
        return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></b>;
      } else {
        return <div key={i}><Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></div>;
      }
    });
  
    return (
      <div>
        {formattedContent}
      </div>
    );
  };
  
  export default EmailFormatter;

