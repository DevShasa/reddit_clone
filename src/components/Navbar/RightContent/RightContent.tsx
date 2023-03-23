import AuthModal from "@/components/Modal/Auth/AuthModal";
import { auth } from "@/firebase/config";
import { Button, Flex,  } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";

type Props = {
	user?: User | null
};

const RightContent = ({user}: Props) => {

	return (
		<>
			<AuthModal />
			<Flex justify="center" alignItems="center"  >
				{ user 
					? <Icons />
					: <AuthButtons />
				}
			</Flex>
			
		</>
	);
};

export default RightContent;
