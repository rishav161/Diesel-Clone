import { Button } from "@chakra-ui/react";
import React from "react";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ currentPage, totalPages, handlePageChange  }) {
  const pages = createArrayOfSize(totalPages).map((_, index) => {
    const pageNumber = index + 1;
    const isActive = pageNumber === currentPage;
    return (
      <Button
        key={pageNumber}
        data-testid="page-btn"
        style={{
          border: isActive ? "1px solid red" : "1px solid gray",
          marginRight: "5px",
        }}
        onClick={() => handlePageChange (pageNumber)}
        disabled={isActive}
      >
        {pageNumber}
      </Button>
    );
  });
  return <div>{pages}</div>;
}

export default Pagination;
