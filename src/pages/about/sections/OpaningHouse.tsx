import React from 'react';
import './OpeningHouse.scss';

const ID1bk = require('../../../images/about/ID1_bk.png');
const ID2bp = require('../../../images/about/ID2_bp.png');
const ID3bu = require('../../../images/about/ID3_bu.png');
const ID4bz = require('../../../images/about/ID4_bz.png');
const ID5b = require('../../../images/about/ID5_b.png');
const ID6ca = require('../../../images/about/ID6_ca.png');
const ID1bk2 = require('../../../images/about/ID1_bk@2x.png');
const ID2bp2 = require('../../../images/about/ID2_bp@2x.png');
const ID3bu2 = require('../../../images/about/ID3_bu@2x.png');
const ID4bz2 = require('../../../images/about/ID4_bz@2x.png');
const ID5b2 = require('../../../images/about/ID5_b@2x.png');
const ID6ca2 = require('../../../images/about/ID6_ca@2x.png');

export interface OpeningHouseProps {}

const OpeningHouse: React.SFC<OpeningHouseProps> = () => {
  return (
    <section className="OpeningHouse">
      <figure>
        <div>
          <a href={ID1bk2}>
            <img src={ID1bk} alt="" />
          </a>
          <a href={ID2bp2}>
            <img src={ID2bp} alt="" />
          </a>
          <a href={ID3bu2}>
            <img src={ID3bu} alt="" />
          </a>
          <a href={ID4bz2}>
            <img src={ID4bz} alt="" />
          </a>
          <a href={ID5b2}>
            <img src={ID5b} alt="" />
          </a>
          <a href={ID6ca2}>
            <img src={ID6ca} alt="" />
          </a>
        </div>
      </figure>
      <article>
        <h3>OPENING HOURS</h3>
        <div>
          <p>MONDAY - FRIDAY</p>
          <p>9:00 - 22:00</p>
        </div>
        <div>
          <p>SATURDAY - SUNDAY </p>
          <p>10:00 - 21:00</p>
        </div>
      </article>
    </section>
  );
};

export default OpeningHouse;
