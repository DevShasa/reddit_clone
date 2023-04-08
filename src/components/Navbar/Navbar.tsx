import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import RightContent from './RightContent/RightContent'
import SearchInput from './SearchInput'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import Directory from './Directory/Directory';
import { User } from "firebase/auth";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)

    return (
        <Flex height="44px" padding="6px 12px" bg="white" justifyContent="space-between">
            <Flex align="center">
                <Image src="/images/redditFace.svg" alt="reddit" height="30px"/>
                <Image src="/images/redditText.svg" alt="reddit" height="46px" display={{base:'none', md:"unset"}}/>
            </Flex>
            {user && <Directory />}
            <SearchInput user={user as User}/>
            <RightContent user={user}/>
        </Flex>
    )
}

export default Navbar