import { Button, Link } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid"

const Pagination = ({ totalPage,setPage }) => {
  const pages = [...Array(totalPage).keys()].map((num) => num + 1);
  return (
    <div >
        {
        pages.map((item)=><Button key={uuid()} onClick={()=>setPage(item)}>{item}</Button>)
      }
    </div>
  );
};

export default Pagination;
