import { Flex, Icon } from "@chakra-ui/react";
import {
	BsArrowRightCircle,
	BsArrowUpRightCircle,
	BsChatDots,
} from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
	IoFilterCircleOutline,
	IoNotificationsOutline,
	IoVideocamOutline,
} from "react-icons/io5";

type Props = {};

const Icons = (props: Props) => {
	return (
		<Flex>
			<Flex
				// container for the icons
				display={{ base: "none", md: "flex" }}
				align="center"
				borderRight="1px solid"
				borderColor="gray.200"
			>
				<Flex
					marginInline={1.5}
					padding={1}
					cursor="pointer"
					borderRadius={4}
					_hover={{ bg: "gray.200" }}
				>
					<Icon as={BsArrowRightCircle} fontSize={20} />
				</Flex>
				<Flex
					marginInline={1.5}
					padding={1}
					cursor="pointer"
					borderRadius={4}
					_hover={{ bg: "gray.200" }}
				>
					<Icon as={IoFilterCircleOutline} fontSize={22} />
				</Flex>
				<Flex
					marginInline={1.5}
					padding={1}
					cursor="pointer"
					borderRadius={4}
					_hover={{ bg: "gray.200" }}
				>
					<Icon as={IoVideocamOutline} fontSize={22} />
				</Flex>
			</Flex>
			<>
				<Flex
					marginInline={1.5}
					padding={1}
					cursor="pointer"
					borderRadius={4}
					_hover={{ bg: "gray.200" }}
				>
					<Icon as={BsChatDots} fontSize={20} />
				</Flex>
				<Flex
					marginInline={1.5}
					padding={1}
					cursor="pointer"
					borderRadius={4}
					_hover={{ bg: "gray.200" }}
				>
					<Icon as={IoNotificationsOutline} fontSize={20} />
				</Flex>
				<Flex
                    display={{base:"none", md:"flex"}}
					marginInline={1.5}
					padding={1}
					cursor="pointer"
					borderRadius={4}
					_hover={{ bg: "gray.200" }}
				>
					<Icon as={GrAdd} fontSize={20} />
				</Flex>
			</>
		</Flex>
	);
};

export default Icons;
