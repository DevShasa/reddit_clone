import { useEffect } from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next';
import { auth, firestore } from "../../../firebase/config";
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc } from 'firebase/firestore';
import safeJsonStringify from "safe-json-stringify";
import { Community } from '@/atoms/communitiesAtom'; 
import CommunityNotFound from '@/components/Community/CommunityNotFound';


type CommunityPageProps = {
    communityData: Community
}
const CommunityPage:NextPage<CommunityPageProps> = (props)=> {

    const { communityData } = props

    if(!communityData){
        return <CommunityNotFound/>
    }

    return ( 
        <div>
            welcome to {communityData?.id}
        </div>
    )
}

export default CommunityPage


export async function getServerSideProps(context: GetServerSidePropsContext){
    console.log("GET THE SERVER SIDE PROPS RUNNING")

    try {
        const communityDocRef = doc(firestore, "communities", context.query.communityName as string)
        const communityDoc = await getDoc(communityDocRef)

        return{
            props:{
                communityData: communityDoc.exists() 
                                ? JSON.parse(safeJsonStringify({id: communityDoc.id, ...communityDoc.data()}))
                                : ""
            },
        }

    } catch (error) {
        console.log(`ERROR FETCHING COMMUNITY PAGE---->`, error)
    }
}