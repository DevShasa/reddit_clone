import { authModalStateAtom } from "@/atoms/authModalAtom";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import Signup from "./Signup";


const AuthInputs = () => {

    const {view} = useRecoilValue(authModalStateAtom)
    
	return(
        <Flex direction="column" align="center" width="100%" mt={4}>
            {view === "login" && <Login />}
            {view === "signup" && <Signup />}
        </Flex>
    )
};

export default AuthInputs;
