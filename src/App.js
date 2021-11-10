
import Table from "./table/Table";
import "./style/App.scss";
import "./style/pagination.scss";
import 'antd/dist/antd.css';
import { useEffect, useState } from "react";
import { INFO } from "./constant/Constant";
import ReactPaginate from 'react-paginate';
import Tasks from "./table/Tasks";



function App() {
  // const URL = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211108T145225Z&X-Amz-Expires=86400&X-Amz-Signature=566faf977413f59c23a3eaf2dcffcb82a1c6ff076db3a5a9a55f61449789a1fb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22?_page=1_limit=200`;

  const [data, setData] = useState(INFO);
  const [total, setTotal] = useState(INFO.length);
  const [pageNumber, setPageNamber] = useState(0);
  const [dataPerPage] = useState(5);

  const [openNewPage, setOpenNewPage] = useState(false);


// При вызове функции выдается ошибка .
  // useEffect(() => {

  //   const getTabl = async () => {
  //     const res = await fetch(URL);
  //     const data = await res.json();
  //     setData(data);
  //     console.log("effect", data)
  //     setTotal(data.length);
  //   };
  //   getTabl();
  // })



  const pageCount = Math.ceil(total / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNamber(selected);
    const currentPage = selected + 1
  }

  const pageVisited = pageNumber * dataPerPage
  const displayData = data.slice(pageVisited, pageVisited + dataPerPage)

  const openTasc = (e) => {
    setOpenNewPage(!openNewPage);
  }


  return (
    <div className="App">
      {openNewPage ?
        <Tasks
          breakTable={openTasc}
        /> :
        <div className="wrapper">
          <Table
            openTasc={openTasc}
            displayData={displayData}
          />
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"previousBttn"}
            pageCount={pageCount}
            onPageChange={changePage}
            total={total}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            breakClassName={"previousBttn"}
          />
        </div>
      }
    </div>
  );
}

export default App;


