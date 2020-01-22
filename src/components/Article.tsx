import React, { useRef } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Scroll from '../middleware/Scroll';
import './Article.scss';

export interface ArticleProps {
  title: string;
  name: string;
  text: string;
  image: string;
  image2: string;
  link?: string;
}

const Article: React.FC<ArticleProps> = ({ title, name, text, image, image2, link }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <motion.section className="article" ref={scrollRef} animate={Scroll(scrollRef) ? 'start' : 'end'}>
      <figure>
        <motion.img src={image} alt="" variants={variable.firstImage} />
        <motion.img src={image2} alt="" variants={variable.secondImage} />
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
export default Article;
