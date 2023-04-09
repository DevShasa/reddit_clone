import {
	Box,
	Button,
	Checkbox,
	Divider,
	Flex,
	Icon,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
  Stack,
  Text
} from "@chakra-ui/react";
import { useState } from "react"
import {BsFillPersonFill, BsFillEyeFill} from "react-icons/bs"
import { HiLockClosed } from "react-icons/hi"
import { doc, getDoc, runTransaction, serverTimestamp, setDoc } from "firebase/firestore"
import { firestore, auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Transaction } from "@google-cloud/firestore";

type Props = {
	open: boolean;
	handleClose: () => void;
};

const CreateCommunityModal = (props: Props) => {

  const [user] = useAuthState(auth)
	const { open, handleClose } = props;
  const [ name, setName ] = useState("")
  const [charsRemaining, setCharsRemaining] = useState(21)
  const [ error, setError ] = useState("")
  const [ communityType, setCommunityType ] = useState("public")
  const [ loading, setLoading ] = useState(false)


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    // Do nothing if whatever is in the input is greater than 21
    if(e.target.value.length > 21) return 

    setName(e.target.value)
    setCharsRemaining(21 - e.target.value.length)
  }

  const onCommunityTypeChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {target:{name}} = e
    if(name === communityType) return
    setCommunityType(name)
  }

  const handleCreateCommunity = async()=>{
    // begin by resetting errors
    if(error) setError("")
    
    // regex will return true if text contains special characters, empty spaces and other unwanteds
    const comunityNameRegex = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(comunityNameRegex.test(name) || name.length < 3){
      // name does not meet standards
      return setError("Names must be 3 to 21 characters, and can only have letters, numbers and underscores")
    }

    //name meets all the parameters
    setLoading(true);
    try {
      // create the community document and the community snipped subcollection for user
      // also check that name is not taken
      const communityDocRef = doc(firestore, "communities", name)

      await runTransaction(firestore, async (transaction)=>{
          //check if the community exists
          const communityDoc = await transaction.get(communityDocRef)
          if(communityDoc.exists()){
            throw new Error(`Sorry r/${name} is already taken, Try another`)
          }

          // create community
          transaction.set(communityDocRef, {
            creatorId: user?.uid,
            createAt: serverTimestamp(),
            numberOfMembers: 1,
            privacyType: communityType
          })

          // create community snippet for user by writing a new subdocument in  user object
          transaction.set(
            doc(firestore, `users/${user?.uid}/communitySnippets`, name),
            {
              communityId: name,
              isModerator: true
            }
          )
      })

      setLoading(false)
    } catch (error: any) {
      setError(error.message)
      console.log("FIREBASE ERROR WHEN CREATING DOCUMENT", error)
      setLoading(false)
    }


    setLoading(false)
  }

	return (
		<Modal isOpen={open} onClose={handleClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					display="flex"
					fontSize={15}
					padding={3}
					flexDirection="column"
				>
					Create a community
				</ModalHeader>
				<Box paddingInline={3}>
					<Divider />
					<ModalCloseButton />
					<ModalBody display="flex" flexDirection="column"  padding="10px 0px" >
            <Text fontWeight={600} fontSize={15}>Name</Text>
            <Text fontSize={11} color="gray.500">
                Comunity names, including capitalization cannot be changed
            </Text>
            <Text
              color="gray.400"
              position="relative"
              top="28px"
              left="10px"
              width="20px"
            >
              r/
            </Text>
            <Input 
              position="relative"
              name="name"
              onChange = {handleChange}
              pl="22px" // to account for the relatively positioned text haha hack
              type={""}
              size="sm"
            />
            <Text
              fontSize="9pt"
              pt={2}
              color={charsRemaining === 0 ? "red" : "gray.500"}
            > 
              {charsRemaining} characters remaining
            </Text>
            <Text fontSize="9pt" color="red" pt={1}>
              {error}
            </Text>
            <Box marginBlock={4}>
                <Text fontWeight={600} fontSize={15}>Community Type</Text>
                <Stack spacing={2} pt={1}>
                  <Checkbox 
                    colorScheme="blue"
                    name="public"
                    isChecked={communityType === "public"}
                    onChange={onCommunityTypeChange}
                  >
                    {/* checkbox has a flex container inside it */}
                    <Flex alignItems="center">
                        <Icon as={BsFillPersonFill} mr={2} color="gray.500"/>
                        <Text fontSize="10pt" mr="1">Public</Text>
                        <Text fontSize="8pt" color="gray.500" pt={1}>
                          Anyone can view, post and comment to this community
                        </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox 
                    colorScheme="blue"
                    name="restricted"
                    isChecked={communityType === "restricted"}
                    onChange={onCommunityTypeChange}
                  >
                    {/* checkbox has a flex container inside it */}
                    <Flex alignItems="center">
                        <Icon as={BsFillEyeFill} mr={2} color="gray.500"/>
                        <Text fontSize="10pt" mr="1">Restricted</Text>
                        <Text fontSize="8pt" color="gray.500" pt={1}>
                          Anyone can view but only aprooved users can post
                        </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox 
                    colorScheme="blue"
                    name="private"
                    isChecked={communityType === "private"}
                    onChange={onCommunityTypeChange}
                  >
                    {/* checkbox has a flex container inside it */}
                    <Flex alignItems="center">
                        <Icon as={HiLockClosed} mr={2} color="gray.500"/>
                        <Text fontSize="10pt" mr="1">Private</Text>
                        <Text fontSize="8pt" color="gray.500" pt={1}>
                          Only aprooved users can view and submit to this community
                        </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
            </Box>
          </ModalBody>
				</Box>

				<ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
					<Button variant="outline" height="30px" mr={2} onClick={handleClose}>
						Cancel
					</Button>
					<Button 
            variant="solid"
            height="30px"
            onClick={handleCreateCommunity}
            isLoading={loading}
          >
            Create community
          </Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CreateCommunityModal;
