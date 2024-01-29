// TypewriterComponent.jsx

import React from "react";
import { Typewriter } from "react-simple-typewriter";


const ArticleReType = ({ rewriters }) => {
    const combinedContent = rewriters.map((writer) => writer.generated_article).join('\n\n');
  
    const formattedContent = combinedContent.split('\n\n').map((content, i) => {
      if (content.startsWith('introduction')) {
        return <strong key={i} style={{ display: 'block' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></strong>;
      } else if (content.startsWith('Subsection')) {
        return <p key={i} style={{ margin:'15px', display: 'block', fontSize: '17px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></p>;
      } else if (content.startsWith('Title')) {
        return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></b>;
      } else {
        return <div style={{ margin:'15px', display: 'block', fontSize: '17px' }} key={i}><Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} /></div>;
      }
    });
  
    return (
      <div>
        {formattedContent}
      </div>
    );
  };
  
  export default ArticleReType;

