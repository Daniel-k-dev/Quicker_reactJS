import React, { useRef } from "react";
import BottomBar from "../components/BottomBar";
import TopBarOthers from "../components/topBarOthers"
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";

function SearchPage() {
  const navigate = useNavigate()

    return (
      <div>
        <TopBarOthers title="의뢰목록" redirectLogic={function () {
          navigate("/")
        } }></TopBarOthers>
        <Search/>
        <BottomBar></BottomBar>
      </div>
    );
  }
  
  export default SearchPage;