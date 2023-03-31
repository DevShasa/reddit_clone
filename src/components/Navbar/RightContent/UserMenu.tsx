import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Menu,
	MenuButton,
	Icon,
	MenuList,
	MenuItem,
	Flex,
	MenuDivider,
	Text
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { auth } from "@/firebase/config";
import { useSetRecoilState } from "recoil";
import { authModalStateAtom } from "@/atoms/authModalAtom";

type Props = {
	user?: User | null;
};

const UserMenu = ({ user }: Props) => {

	const setAuthModalState = useSetRecoilState(authModalStateAtom)

	return (
		// <Menu>
		// 	<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
		// 		Actions
		// 	</MenuButton>
		// 	<MenuList>
		// 		<MenuItem>Download</MenuItem>
		// 		<MenuItem>Create a Copy</MenuItem>
		// 		<MenuItem>Mark as Draft</MenuItem>
		// 		<MenuItem>Delete</MenuItem>
		// 		<MenuItem>Attend a Workshop</MenuItem>
		// 	</MenuList>
		// </Menu>
		<Menu>
			<MenuButton
				cursor="pointer"
				padding="0px 6px"
				borderRadius={4}
				_hover={{ outline: "1px solid", outlineColor: "gray.200" }}
			>
				<Flex alignItems="center">
					{user ? (
						<>
							<Icon
								as={FaRedditSquare}
								fontSize={24}
								mr={1}
								color="gray.200"
							/>
							<Flex
								direction="column"
								display={{base:"none", lg:"flex"}}
								fontSize="8pt"
								alignItems="flex-start"
								mr={5}
							>
								<Text fontWeight={700}>
									{user?.displayName || user.email?.split("@")[0]}
								</Text>
								<Flex>
									<Icon as={IoSparkles} color="brand.100" mr={1} />
									<Text color="gray.500">1 Karma</Text>
								</Flex>
							</Flex>
						</>
					) : (
						<Icon
							fontSize={24}
							color="gray.400"
							mr={1}
							as={VscAccount}
						/>
					)}
					<ChevronDownIcon />
				</Flex>
			</MenuButton>
			<MenuList>
				{user ? (
					<>
						<MenuItem
							fontSize="10pt"
							fontWeight={700}
							_hover={{ bg: "blue.500", color: "white" }}
						>
							<Flex alignItems="center" gap={2}>
								<Icon as={CgProfile} fontSize={20} />
								Profile
							</Flex>
						</MenuItem>
						<MenuDivider />
						<MenuItem
							fontSize="10pt"
							fontWeight={700}
							_hover={{ bg: "blue.500", color: "white" }}
							onClick={() => signOut(auth)}
						>
							<Flex alignItems="center" gap={2}>
								<Icon as={MdOutlineLogin} fontSize={20} />
								Log Out
							</Flex>
						</MenuItem>
					</>
				) : (
					<>
						<MenuItem
							fontSize="10pt"
							fontWeight={700}
							_hover={{ bg: "blue.500", color: "white" }}
							onClick={() => setAuthModalState({
								open:true,
								view:"login"
							})}
						>
							<Flex alignItems="center" gap={2}>
								<Icon as={MdOutlineLogin} fontSize={20} />
								Log In / Sign Up
							</Flex>
						</MenuItem>
					</>
				)}
			</MenuList>
		</Menu>
	);
};

export default UserMenu;
