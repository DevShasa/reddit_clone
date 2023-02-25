import { Flex, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { auth } from "@/firebase/config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const OauthButtons = () => {


    const [signInWithGoogle,  user, loading, error ] = useSignInWithGoogle(auth)

	return (
		<Flex direction="column" width="100%">
			<Button variant="oauth" mb={2} isLoading={loading} onClick={()=>signInWithGoogle()}>
				<Image
					src="/images/googlelogo.png"
					alt="google"
					height="20px"
					mr={4}
				/>
				Continue with Google
			</Button>
            {error && <Text>{error.message}</Text>}
		</Flex>
	);
};

export default OauthButtons;
