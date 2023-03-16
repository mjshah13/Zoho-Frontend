import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

const AppRoutes = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRoutes;
