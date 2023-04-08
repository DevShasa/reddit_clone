import { SearchIcon } from "@chakra-ui/icons";
import {Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { User } from "firebase/auth";

type SearchInputProps = {
    user:User
};

const SearchInput = ({user}: SearchInputProps) => {
	return (
		<Flex flexGrow={1} mr={2} ml={2} align="center" maxWidth={user ? "auto" : "600px"}>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					// eslint-disable-next-line react/no-children-prop
					children={<SearchIcon color="gray.300" mb={1}/>}
				/>
				<Input 
                    placeholder="Search reddit" 
                    fontSize="10pt"
                    _placeholder={{color:"gray.500"}} // :placeholder pseudo class
                    _hover={{
                        bg:"white",
                        border:"1px solid",
                        borderColor:"blue.500"
                    }}
                    _focus={{
                        outline:"none",
                        border:"1px solid red",
                        borderColor:"blue.500"
                    }}
                    height="34px"
                    bg="gray.50"
                />
			</InputGroup>
		</Flex>
	);
};

export default SearchInput;
