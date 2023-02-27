import { authModalStateAtom } from "@/atoms/authModalAtom";
import {
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OauthButtons from "./OauthButtons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useEffect } from "react";
import ResetPassword from "./ResetPassword";

const AuthModal = () => {
	const [user, loading, error] = useAuthState(auth);
	const [modalState, setModalState] = useRecoilState(authModalStateAtom);
	const { open, view } = modalState;

	const handleClose = () => {
		setModalState((prev) => ({
			...prev,
			open: false,
		}));
	};

	useEffect(() => {
		if (user)handleClose();
	}, [user]);

	return (
		<Modal isOpen={open} onClose={handleClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader textAlign="center">
					{view === "login" && "Login"}
					{view === "signup" && "Sign Up"}
					{view === "resetPassword" && "Reset Password"}
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					pb={6}
				>
					<Flex
						direction="column"
						alignItems="center"
						justifyContent="center"
						width="70%"
						//border="1px solid red"
					>
						{view === "login" || view === "signup" ? (
							<>
								<OauthButtons />
								<Text color="gray.500" fontWeight="700">
									OR
								</Text>
								<AuthInputs />
							</>
						) : (
							<ResetPassword />
						)}
					</Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default AuthModal;
