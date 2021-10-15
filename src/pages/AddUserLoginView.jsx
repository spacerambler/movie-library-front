import { useMutation } from "@apollo/client";
import UserContext from "../context/UserContext";
import UserService from "../services/User";
import { ADD_USER, LOGIN } from "@app/utils/graphql/mutations";
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

    const [addUser, { error: addUserError }] = useMutation(ADD_USER, {
        onCompleted: ({ addUser: { token, user }}) => {
            UserService.login(token);
            setUser(user);
        }
    });

    // mutations from schema addUser 

    const handleSubmit = (e) => {};

    return ();
}

export default AddUserLoginView;