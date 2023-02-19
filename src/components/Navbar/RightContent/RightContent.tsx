import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";

type Props = {
	//user: any
};

const RightContent = (props: Props) => {
	return (
		<>
			<AuthModal />
			{/* <Flex justify="center" alignItems="center" /> */}
			<AuthButtons />
		</>
	);
};

export default RightContent;
