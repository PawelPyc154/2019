import React from 'react';
import './FirstSection.scss';

export interface FirstSectionProps {
  name: string;
  text: string;
  image: string;
}

const FirstSection: React.SFC<FirstSectionProps> = ({ name, text, image }) => {
  return (
    <section className="firstSection" style={{ background: `url(${image})` }}>
      <div>
        <header>
          <h1>{name}</h1>
          <span>{text}</span>
        </header>
      </div>
    </section>
  );
};

export default FirstSection;
