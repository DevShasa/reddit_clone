import CreateCommunityModal from '@/components/Modal/CreateComunityModal/CreateCommunityModal'
import { Flex, Icon, MenuItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import {GrAdd} from 'react-icons/gr'

type Props = {}

const Communities = (props: Props) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            {/* the modal */}
            <CreateCommunityModal open={open} handleClose={()=>setOpen(false)}/>
            <MenuItem 
                width="100%"
                fontSize="10pt"
                _hover={{bg:"gray.100"}}
                onClick = {()=>{setOpen(true)}}
            >
                <Flex alignItems="center">
                    <Icon as={GrAdd} fontSize={20} mr={2}/>
                    Create community
                </Flex>
            </MenuItem>
            {/* the meubuttons that open the modal */}
        </>
    )
}

export default Communities