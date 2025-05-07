import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Products from "./Products";

const SearchItem = ({cart,setCart}) => {
  const [filterData, setFilterData] = useState([]);
  const { term } = useParams();

  useEffect(()=>{
    const searchedData=()=>{
        const filterDataBy = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
        setFilterData(filterDataBy)
    }
    searchedData();
  },[term]) 

  return (
    <Products cart={cart} setCart={setCart} items={filterData} itemsPresent={filterData.length > 0}/>
  );
};

export default SearchItem;
