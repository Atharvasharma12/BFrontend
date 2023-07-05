import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected(props) {
  const { _id } = useSelector((state) => state.loggedInUser);
  const { userCookie } = useSelector((state) => state.cookie);

  const { Component } = props;
  const Navigate = useNavigate();

  useEffect(() => {
    if (!_id) {
      Navigate("/Login");
    }
  });

  return (
    <>
      <Component />
    </>
  );
}

export default Protected;
