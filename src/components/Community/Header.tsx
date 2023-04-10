import React from "react";
import { Community } from "@/atoms/communitiesAtom";
import { Flex, Box, Button, Icon, Text, Image } from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";

type CommunityHeaderProps = {
	communityData: Community;
};

const Header = (props: CommunityHeaderProps) => {
	const { communityData } = props;
	return (
		<Flex direction="column" width="100" height="146px">
			<Box height="50%" backgroundColor="blue.500" />
			<Flex justifyContent="center" flexGrow={1} backgroundColor="white">
				<Flex border="1px solid red" width="95%" maxWidth="860px">
                    {communityData.imageUrl
                        ? <Image src={`${communityData?.imageUrl}`} alt="Community logo"/>
                        : (
                            <Icon
                            as={FaReddit}
                            fontSize={64}
                            position="relative"
                            top={-3}
                            color="blue.500"
                            border="4px solid white"
                            borderRadius="50%"
                            padding={0}
                        />
                        )
                    }
                    <Flex padding="10px 10px">
                        <Flex flexDirection="column" mr={6}>
                            <Text fontWeight={800} fontSize="16pt">{communityData?.id}</Text>
                            <Text fontWeight={600} fontSize="10pt" color="gray.400">{communityData?.id}</Text>
                        </Flex>
                    </Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Header;
