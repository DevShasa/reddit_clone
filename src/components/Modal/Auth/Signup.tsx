import { authModalStateAtom } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { FIREBASE_ERRORS } from "@/firebase/errors";

const Signup = () => {
	const [signupForm, setSignupForm] = useState({
		email: "",
		password: "",
        confirmPassword:""
	});
	const [ error, setError ] = useState("")
	const setAuthModalState = useSetRecoilState(authModalStateAtom);
	const [ createUserWithEmailAndPassword, user, loading, createUserError ] = useCreateUserWithEmailAndPassword(auth)
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// update the form state
		setSignupForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if(error) setError("")
		const { password, confirmPassword } = signupForm
		if(password !== confirmPassword){
			setError("Passwords do not match")
			return
		}
		createUserWithEmailAndPassword(
			signupForm.email,
			signupForm.password
		)
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
			<Input
				required
				name="confirmPassword"
				placeholder="Confirm Password"
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

			{(error || createUserError) && ( 
				<Text textAlign="center" color="red" fontSize="10pt">
					{error || FIREBASE_ERRORS[createUserError?.message as keyof typeof FIREBASE_ERRORS]}
				</Text>
			)}

			<Button type="submit" width="100%" my={2} isLoading={loading}>
				Sign Up
			</Button>
			<Flex fontSize="9pt" justifyContent="center">
				<Text mr={1}>Already a redditor?</Text>
				<Text
					color="blue.500"
					fontWeight={700}
					cursor="pointer"
					onClick={() =>
						setAuthModalState({
							open: true,
							view: "login",
						})
					}
				>
					LOG IN
				</Text>
			</Flex>
		</form>
	);
};

export default Signup;
