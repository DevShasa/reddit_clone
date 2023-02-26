import AuthModal from "@/components/Modal/Auth/AuthModal";
import { auth } from "@/firebase/config";
import { Button, Flex,  } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";

type Props = {
	user: any
};

const RightContent = ({user}: Props) => {


	return (
		<>
			<AuthModal />
			<Flex justify="center" alignItems="center"  >
				{ user 
					? <div onClick={()=>signOut(auth)}>
						{user.email}
						</div> 
					: <AuthButtons />
				}
			</Flex>
			
		</>
	);
};

export default RightContent;
