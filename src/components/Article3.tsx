import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import useScroll from '../middleware/useScroll';
import './Article3.scss';

export interface Article3Props {
  data: {
    title: string;
    name: string;
    text: string;
    image: string;
    image2: string;
    link?: string;
  };
}

const Article3: React.FC<Article3Props> = ({ data }) => {
  const { title, name, text, image, image2, link } = data;

  const variable = {
    firstImage: {
      start: { x: 0, transition: { duration: 1 } },
      end: { x: '-2000px', transition: { duration: 0 } },
    },
    secondImage: {
      start: { x: 0, transition: { duration: 1 } },
      end: { x: '2000px', transition: { duration: 0 } },
    },
    article: {
      start: { opacity: 1, y: 0, transition: { duration: 1 } },
      end: { opacity: 0, y: '1000px', transition: { duration: 0 } },
    },
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <motion.section ref={scrollRef} className="Article3" animate={useScroll(scrollRef, 1) ? 'start' : 'end'}>
      <figure>
        <motion.img src={image} alt="" variants={variable.firstImage} />
        <motion.img src={image2} alt="" variants={variable.secondImage} />
      </figure>
      <motion.article variants={variable.article}>
        <h2>{title}</h2>
        <span>{name}</span>
        <p>{text}</p>

        {link ? <Link to="/reservation">...</Link> : null}
      </motion.article>
    </motion.section>
  );
};

export default Article3;
