import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import RightContent from './RightContent/RightContent'
import SearchInput from './SearchInput'

const Navbar = () => {
    return (
        <Flex height="44px" padding="6px 12px" bg="white">
            <Flex align="center">
                <Image src="/images/redditFace.svg" alt="reddit" height="30px"/>
                <Image src="/images/redditText.svg" alt="reddit" height="46px" display={{base:'none', md:"unset"}}/>
            </Flex>
            {/* <Directory /> */}
            <SearchInput />
            <RightContent />
        </Flex>
    )
}

export default Navbar