/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './Pagination.scss';

export interface PaginationProps {
  pages: number;
  activePage: { active: number; setActive: React.Dispatch<React.SetStateAction<number>> };
}

const Pagination: React.SFC<PaginationProps> = ({ pages, activePage }) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const { active, setActive } = activePage;

  useEffect(() => {
    setPageNumbers([]);
    for (let i = 1; i <= pages; i++) {
      setPageNumbers(prevArray => [...prevArray, i]);
    }
  }, [pages]);

  return (
    <div className="pagination">
      <button type="button" className="pagination__btn" disabled={active === 1} onClick={() => setActive(active - 1)}>
        <MdKeyboardArrowLeft className="pagination__btn__arrow" />
      </button>

      <div className="pagination__pageLinks">
        {pageNumbers.map(pageNumber => (
          <button
            type="button"
            key={pageNumber}
            className="pagination__pageLinks__btn"
            style={active === pageNumber ? { color: '#985e5b' } : {}}
            onClick={() => setActive(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="pagination__btn"
        disabled={active === pages}
        onClick={() => setActive(active + 1)}
      >
        <MdKeyboardArrowRight className="pagination__btn__arrow" />
      </button>
    </div>
  );
};

export default Pagination;

// const Pagination: React.SFC<PaginationProps> = ({ pages, activePage }) => {
//   const [pageNumbers, setPageNumbers] = useState<number[]>([]);
//   useEffect(() => {
//     for (let i = 1; i < pages; i++) {
//       setPageNumbers(prevArray => [...prevArray, i]);
//     }
//   }, []);

//   return (
//     <div className="pagination">
//       <MdKeyboardArrowLeft className="pagination__arrow" />
//       <div className="pagination__pageLinks">
//         {pageNumbers.map(pageNumber => (
//           <NavLink
//             to={`/shop/allproducts/${pageNumber}`}
//             key={pageNumber}
//             className="pagination__Link"
//             activeClassName="activeLinkMenu"
//           >
//             {pageNumber}
//           </NavLink>
//         ))}
//       </div>
//       <MdKeyboardArrowRight className="pagination__arrow" />
//     </div>
//   );
// };

// export default Pagination;
