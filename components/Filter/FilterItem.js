// import { useCallback, useEffect, useState } from "react";
// import styles from "./Filter.module.scss";
// import SingleOption from "./SingleOption";
// import Image from "next/image";
// import PriceContainer from "./PriceContainer";

// const FilterItem = ({
//   singleData,
//   filters,
//   setFilters,
//   current,
//   setCurrent,
//   mobile,
//   setMobileOpen,
//   isBlack,
//   city,
// }) => {
//   const { key } = singleData;
//   const isRoomsCount = key === "rooms";
//   const isPriceRange = key === "price";
//   const isCurrent = key === current;
//   const windowClickHandler =useCallback((event)=> {
//     setCurrent("");
//   },[setCurrent])
//   useEffect(() => {
//     window.addEventListener("click", windowClickHandler);
//     return () => window.removeEventListener("click", windowClickHandler);
//   }, [windowClickHandler]);

//   return (
//     <>
//       <li
//         onClick={(e) => {
//           if (!isCurrent) {
//             e.stopPropagation();
//             setCurrent(key);
//           }
//         }}
//         className={styles.li}
//       >
//         <div className={styles["li__container"]}>
//           <span
//             className={`${styles.span} ${mobile ? styles["span-black"] : ""}`}
//           >
//             {singleData.name}
//           </span>
//           <div
            
//             className={`${styles["image_container"]} ${
//               isCurrent ? styles.rotate : ""
//             }`}
//           >
//             <Image
//               src={
//                 isBlack
//                   ? "/images/arrows/down-white.svg"
//                   : "/images/arrows/down-black.svg"
//               }
//               alt="arrow"
//               width={20}
//               height={20}
//             />
//           </div>
//         </div>

//         {mobile || isCurrent ? (
//           <div
//             className={`${
//               isRoomsCount
//                 ? styles.rooms
//                 : isPriceRange
//                 ? styles["price-cont"]
//                 : null
//             } ${styles["option__container"]}`}
//             onClick={(e) => {
//               e.stopPropagation();
//             }}
//           >
//             {singleData.name !== "Цена" ? (
//               singleData.variants.map((option, index) => {
//                 return (
//                   <SingleOption
//                     isActive={filters[key] === option.value}
//                     key={index}
//                   >
//                     <input
//                       className={styles.input}
//                       type="radio"
//                       value={option.value}
//                       name={singleData.name}
//                       onChange={(e) =>
//                         setFilters((prev) => {
//                           return {
//                             ...prev,
//                             [key]: e.target.value,
//                           };
//                         })
//                       }
//                     />
//                     {option.label}
//                   </SingleOption>
//                 );
//               })
//             ) : (
//               <PriceContainer
//                 city={city}
//                 isBlack={isBlack}
//                 setMobileOpen={setMobileOpen}
//                 mobile={mobile}
//                 filters={filters}
//                 setFilters={setFilters}
//               />
//             )}
//           </div>
//         ) : null}
//       </li>
//     </>
//   );
// };

// export default FilterItem;
