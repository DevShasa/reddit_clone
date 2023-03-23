import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Icon, MenuList, MenuItem, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import {FaRedditSquare} from "react-icons/fa"
import {VscAccount} from "react-icons/vsc"
import {IoSparkles} from "react-icons/io5"

type Props = {
    user?: User | null;
};

const UserMenu = ({user}:Props) => {
	return (
		<Menu>
			<MenuButton 
                cursor="pointer" 
                padding="0px 6px" 
                borderRadius={4}
                _hover={{outline:"1px solid", outlineColor:"gray.200"}}
                >
				{user 
                    ?(<Flex alignItems="center">
                        <Icon as={FaRedditSquare} fontSize={24} mr={1} color="gray.300"/>
                        <ChevronDownIcon />   
                    </Flex>)
                    :(<div>No User</div>)
                }
			</MenuButton>
			<MenuList>
				<MenuItem>Download</MenuItem>
				<MenuItem>Create a Copy</MenuItem>
				<MenuItem>Mark as Draft</MenuItem>
				<MenuItem>Delete</MenuItem>
				<MenuItem>Attend a Workshop</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default UserMenu;
