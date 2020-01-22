import React from 'react';
import FirstSection from '../../components/FirstSection';

const Layer22 = require('../../images/blog/Layer_22.png');

export interface BlogProps {}

const Blog: React.SFC<BlogProps> = () => (
  <>
    <FirstSection name="blog" text="news, recipes and much more" image={Layer22} />
  </>
);

export default Blog;
