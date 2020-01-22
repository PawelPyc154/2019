import React, { useRef } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Scroll from '../middleware/Scroll';
import './Article2.scss';

export interface Article2Props {
  data: {
    title: string;
    name: string;
    text: string;
    image: string;
    image2: string;
    link?: string;
  };
}

const Article2: React.FC<Article2Props> = ({ data }) => {
  const { title, name, text, image, image2, link } = data;
  const scrollRef = useRef<HTMLDivElement>(null);

  const variable = {
    firstImage: {
      start: { x: 0, transition: { duration: 1, ease: 'linear' } },
      end: { x: '2000px', transition: { duration: 0, ease: 'linear' } },
    },
    secondImage: {
      start: { x: 0, transition: { duration: 1, ease: 'linear' } },
      end: { x: '-2000px', transition: { duration: 0, ease: 'linear' } },
    },
    article: {
      start: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      end: { opacity: 0, y: '1000px', transition: { duration: 0 } },
    },
  };

  return (
    <motion.section className="Article2" ref={scrollRef} animate={Scroll(scrollRef, 1) ? 'start' : 'end'}>
      <figure>
        <motion.img src={image} variants={variable.firstImage} />
        <motion.img src={image2} variants={variable.secondImage} />
      </figure>
      <motion.article variants={variable.article}>
        <h2>{title}</h2>
        <span>{name}</span>
        <p>{text}</p>

        {link ? <Link to={link}>...</Link> : null}
      </motion.article>
    </motion.section>
  );
};

export default Article2;
