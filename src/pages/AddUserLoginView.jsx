import { useMutation } from "@apollo/client";
import UserContext from "../context/UserContext";
import UserService from "../services/User";
import { ADD_USER, LOGIN } from "../utils/graphql/";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function AddUserLoginView() {
    const [user, setUser] = React.useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    React.useEffect(()=>{
        if (user) {
            history.push("/");
        }
    })

        // mutations from schema addUser , login
    const [addUser, { error: addUserError }] = useMutation(ADD_USER, {
        onCompleted: ({ addUser: { token, user }}) => {
            UserService.login(token);
            setUser(user);
        }
    });

    const [login, { error: loginError }] = useMutation(LOGIN, {
        onCompleted: ({ login: { token, user }}) => {
            UserService.login(token);
            setUser(user);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        switch(location.pathname) {
            case "/signup": 
            addUser({variables: Object.fromEntries(new FormData(e.target))});
            break;
            case "/login": 
            login({variables: Object.fromEntries(new FormData(e.target))})
            break;
            default: 
            break;
        }
    };

    return (
        <>
            TESTING
      </>
    );
}

export default AddUserLoginView;