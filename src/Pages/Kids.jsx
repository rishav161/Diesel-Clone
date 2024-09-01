import { Heading, Grid, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NormalCard from "./Card/NormalCard";
import Pagination from "../Pagination/Pagination";

const Men = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [filterBy, setFilterBy] = useState("kidjeans");
  
  const handlePage = (newPage) => {
    setPage(newPage);
  };
  
  const fetchAndRender = (page, filterBy) => {
    setLoading(true);
    axios
      .get(`https://dieselbackend.onrender.com/${filterBy}?_page=${page}&_limit=6`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAndRender(page, filterBy);
  }, [page, filterBy]);

  if (loading) {
    return <Heading>Loading...</Heading>;
  }

  if (error) {
    return <Heading>Something Went To Wrong</Heading>;
  }

  return (
    <div>
      <Flex>
      <div className="checkbox_group">
        <label>
          <input
            type="checkbox"
            value="menjeans"
            checked={filterBy === "menjeans"}
            onChange={(e) => setFilterBy(e.target.checked ? "menjeans" : "")}
          />
          Men Jeans
        </label>
        <label>
          <input
            type="checkbox"
            value="womenjeans"
            checked={filterBy === "womenjeans"}
            onChange={(e) =>
              setFilterBy(e.target.checked ? "womenjeans" : "")
            }
          />
          Women Jeans
        </label>
        <label>
          <input
            type="checkbox"
            value="kidjeans"
            checked={filterBy === "kidjeans"}
            onChange={(e) => setFilterBy(e.target.checked ? "kidjeans" : "")}
          />
          Kids Jeans
        </label>
      </div>
      <div className="checkbox_group">
        <label>
          <input
            type="checkbox"
            value="menshoes"
            checked={filterBy === "menshoes"}
            onChange={(e) => setFilterBy(e.target.checked ? "menshoes" : "")}
          />
          Men Shoes
        </label>
        <label>
          <input
            type="checkbox"
            value="womenshoes"
            checked={filterBy === "womenshoes"}
            onChange={(e) =>
              setFilterBy(e.target.checked ? "womenshoes" : "")
            }
          />
          Women Shoes
        </label>
        <label>
          <input
            type="checkbox"
            value="kidshoes"
            checked={filterBy === "kidshoes"}
            onChange={(e) => setFilterBy(e.target.checked ? "kidshoes" : "")}
          />
          Kids Shoes
        </label>
      </div>
      <div className="checkbox_group">
        <label>
          <input
            type="checkbox"
            value="mennewcollection"
            checked={filterBy === "mennewcollection"}
            onChange={(e) => setFilterBy(e.target.checked ? "mennewcollection" : "")}
          />
          Men New Collection
        </label>
        <label>
          <input
            type="checkbox"
            value="womennewcollection"
            checked={filterBy === "womennewcollection"}
            onChange={(e) =>
              setFilterBy(e.target.checked ? "womennewcollection" : "")
            }
          />
          Women New Collection
        </label>
        <label>
          <input
            type="checkbox"
            value="kidnewcollection"
            checked={filterBy === "kidnewcollection"}
            onChange={(e) => setFilterBy(e.target.checked ? "kidnewcollection" : "")}
          />
          Kids New Collection
        </label>
      </div>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data.map((el) => (
          <NormalCard key={el.id} {...el} link="menjeans" />
        ))}
      </Grid>
      <Pagination
        totalPages={3} // You should calculate the total number of pages dynamically based on the data length and the limit per page
        currentPage={page}
        handlePageChange={handlePage}
      />
    </div>
  );
};

export default Men;
