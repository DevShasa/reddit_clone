import {atom} from "recoil"
import { FieldValue, Timestamp } from "firebase/firestore"

export interface Community {
    id:string,
    creatorId:string,
    numberOfMembers: number,
    privacyType: "public" | "private" |"restricted",
    createdAt?: Timestamp,
    imageUrl?: string
}

export interface CommunitySnippet{
    communityId: string,
    isModerator: boolean,
    imageUrl: string
}


export const defaultCommunity: Community ={
    id:"",
    creatorId:"",
    numberOfMembers:0,
    privacyType:"public"
}
