// import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// // import "./styles.css";
// import Image from "next/image";

// const PER_PAGE = 10;

// export default function PafintTest() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function fetchData() {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }

//   function handlePageClick({ selected: selectedPage }) {
//     setCurrentPage(selectedPage);
//   }

//   const offset = currentPage * PER_PAGE;

//   const currentPageData = data
//     .slice(offset, offset + PER_PAGE)
//     .map((item) => <div key=>{item.id}</div>);

//   const pageCount = Math.ceil(data.length / PER_PAGE);

//   return (
//     <div className="App">
//       <h1>React Paginate Example</h1>
//       <div style={{ background: "red" }}>{currentPageData}</div>
//       <ReactPaginate
//         // previousLabel={
//         // //   <Image
//         // //     src="/public/images/arrows/white-left.svg"
//         // //     width={28}
//         // //     height={28}
//         // //   />
//         // }
//         // nextLabel={
//         // //   <Image
//         // //     src="/public/images/arrows/white-right.svg"
//         // //     width={28}
//         // //     height={28}
//         // //   />
//         // }
//         pageCount={pageCount}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination"}
//         previousLinkClassName={"pagination__link"}
//         nextLinkClassName={"pagination__link"}
//         disabledClassName={"pagination__link--disabled"}
//         activeClassName={"pagination__link--active"}
//       />
//     </div>
//   );
// }
