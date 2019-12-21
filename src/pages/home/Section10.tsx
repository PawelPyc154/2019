import React from 'react';
import styled from 'styled-components';
import { style1Type, style1 } from '../../state/style/style1';

export interface Section3Props { }

const Section3: React.SFC<Section3Props> = () => <Section styled={style1}>j</Section>;

export default Section3;

const Section = styled.section<style1Type>``;
