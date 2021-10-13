import { gql, useQuery } from "@apollo/client";
import AdminContext from "@app/context/AdminContext";
import ProductUpdateContext from "@app/context/ProductUpdateContext";
import React from "react";
import { Link } from "react-router-dom";

// queries 

function HomeView() {
    React.useEffect(() => {
        document.title = "Movie Library Home"
    });

    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoginContext);
    const [movieUpdate] = React.useContext(MovieUpdateContext);

    const { data } = useQuery();

    const handleClick = () => {}

    return ();
}

export default HomeView;