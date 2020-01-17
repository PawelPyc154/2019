import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';

export interface NavIconsProps {
  state: {
    isOpen: boolean;
    basketOpen: boolean;
    setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setFreatures: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const NavIcons: React.SFC<NavIconsProps> = ({ state }) => {
  const { isOpen, basketOpen, setBasketOpen, setFreatures, setIsOpen } = state;

  return (
    <ContainerLi>
      <ol>
        <button
          type="button"
          onClick={() => {
            setBasketOpen(!basketOpen);
            setIsOpen(false);
            setFreatures(false);
          }}
        >
          <FaShoppingCart />
        </button>
        <div>2</div>
      </ol>
      <ol>
        <HamburgerMenu
          toggle={() => {
            setIsOpen(!isOpen);
            setFreatures(false);
            setBasketOpen(false);
          }}
        />
      </ol>
    </ContainerLi>
  );
};

export default NavIcons;

const ContainerLi = styled.li`
  display: flex;
  justify-content: space-between;
  & > ol {
    flex-basis: 30px;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 13px;

    &:first-child {
      & > div,
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border: none;
        background-color: transparent;
      }
      & > button {
        cursor: pointer;
      }
      &::after {
        content: '';
        height: 15px;
        width: 1px;
        background-color: #000000;
        transform: translateX(10px);
      }
    }
  }

  @media screen and (min-width: 1000px) {
    & > ol {
      margin: initial;
      &:first-child {
        &::after {
          display: none;
        }
      }
    }
  }
`;
