import AuthModal from "@/components/Modal/Auth/AuthModal";
import { auth } from "@/firebase/config";
import { Button, Flex,  } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type Props = {
	user?: User | null
};

const RightContent = ({user}: Props) => {

	return (
		<>
			<AuthModal />
			<Flex justify="center" alignItems="center"  >
				{ user 
					? <Icons /> // Icons does not do anything yet they just mimic the look and feel of reddit
					: <AuthButtons /> // buttons that toggle the login auth modal 
				}
				 <UserMenu user={user}/> {/*displays different states based on whether user is logged in  */}
			</Flex>
			
		</>
	);
};

export default RightContent;
