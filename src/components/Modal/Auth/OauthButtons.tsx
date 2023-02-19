import { Flex, Button, Image } from '@chakra-ui/react'
import React from 'react'

const OauthButtons = () => {
    return (
        <Flex direction="column" width="100%">
            <Button variant="oauth" mb={2}>
                <Image 
                    src="/images/googlelogo.png" 
                    alt="google"
                    height="20px"
                    mr={4}
                    />
                Continue with Google
            </Button>
        </Flex>
    )
}

export default OauthButtons