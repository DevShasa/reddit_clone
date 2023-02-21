import { authModalStateAtom } from "@/atoms/authModalAtom";
import { auth } from  "../../../firebase/config";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";


const Login = () => {
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});


	const [
            signInWithEmailAndPassword, 
            user, 
            loading, 
            error
        ] = useSignInWithEmailAndPassword(auth);

	const setAuthModalState = useSetRecoilState(authModalStateAtom);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// update the form state
		setLoginForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	// firebase logic
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("LOG IN FORM", loginForm);
		setAuthModalState((prev) => ({
			...prev,
			open: false,
		}));
	};

	return (
		<form onSubmit={(e) => onSubmit(e)}>
			<Input
				required
				name="email"
				placeholder="email"
				type="email"
				mb={2}
				onChange={onChange}
				fontSize="10pt"
				_placeholder={{ color: "gray.500" }}
				_hover={{
					bg: "white",
					border: "1px solid",
					borderColor: "blue.500",
				}}
				_focus={{
					outline: "none",
					bg: "white",
					border: "1px solid",
					borderColor: "blue.500",
				}}
				bg="gray.50"
			/>
			<Input
				required
				name="password"
				placeholder="password"
				type="password"
				mb={2}
				onChange={onChange}
				fontSize="10pt"
				_placeholder={{ color: "gray.500" }}
				_hover={{
					bg: "white",
					border: "1px solid",
					borderColor: "blue.500",
				}}
				_focus={{
					outline: "none",
					bg: "white",
					border: "1px solid",
					borderColor: "blue.500",
				}}
				bg="gray.50"
			/>

			<Button type="submit" width="100%" my={2}>
				Log in
			</Button>
			<Flex fontSize="9pt" justifyContent="center">
				<Text mr={1}>New Here ?</Text>
				<Text
					color="blue.500"
					fontWeight={700}
					cursor="pointer"
					onClick={() =>
						setAuthModalState({
							open: true,
							view: "signup",
						})
					}
				>
					Sign Up
				</Text>
			</Flex>
		</form>
	);
};

export default Login;
