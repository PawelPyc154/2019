import React from 'react';
import './FirstSection.scss';

export interface FirstSectionProps {
  data: { name: string; text: string; image: string };
}

const FirstSection: React.SFC<FirstSectionProps> = ({ data }) => {
  const { name, text, image } = data;
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
