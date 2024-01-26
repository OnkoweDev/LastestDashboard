import React from "react";
import { Typewriter } from "react-simple-typewriter";

const ProductType = ({ lands }) => {
  const combinedContent = lands.map((writer) => writer.generated_pages).join('\n\n');

  const formattedContent = combinedContent.split('\n\n').map((content, i) => {
    if (content.startsWith('Subtitle')) {
      return <strong key={i} style={{ display: 'block' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content.slice(0, 1), content.slice(1)]} /></strong>;
    } else if (content.startsWith('Feature')) {
      return <b key={i} style={{ display: 'block', fontSize: '17px', lineHeight:'1em' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content.slice(0, 1), content.slice(1)]} /></b>;
    } else if (content.startsWith('Title')) {
      return <b key={i} style={{ display: 'block', fontSize: '20px' }}> <Typewriter deleteSpeed={false} typeSpeed={20} words={[content.slice(0, 1), content.slice(1)]} /></b>;
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

export default ProductType;
