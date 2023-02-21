import { authModalStateAtom } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

const AuthButtons = () => {
    const setAuthModalState = useSetRecoilState(authModalStateAtom);


	return (
		<>
			<Button
				variant="outline"
				height="28px"
				display={{ base: "none", sm: "flex" }}
				width={{ base: "78px", md: "110px" }}
				mr={2}
				onClick={() => setAuthModalState({open:true, view:"login"})}
			>
				Log in
			</Button>
			<Button
				variant="solid"
				height="28px"
				display={{ base: "none", sm: "flex" }}
				width={{ base: "78px", md: "110px" }}
				mr={2}
				onClick={() => setAuthModalState({open:true, view:"signup"})}
			>
				Sign Up
			</Button>
		</>
	);
};

export default AuthButtons;
