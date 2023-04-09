import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'

admin.initializeApp(); // boot up the app
const db =  admin.firestore();

// create a user document once a user is created
export const createUserDocument = functions.auth
            .user()
            .onCreate(async(user)=>{
                db.collection("users")
                    .doc(user.uid)
                    .set(JSON.parse(JSON.stringify(user))) /// convert into a json and then into an object
            });

// export const deletePostComments = functions.firestore
//             // When a post is deleted delete the comments too ??
//             .document(`posts/{postId}`)
//             .onDelete(async(snap)=>{
//                 const postId = snap.id;
//                 console.log("HERE IS THE POST ID", postId)

//                 // finding and deleting teh comments
//                 admin.firestore()
//                     .collection("comments")
//                     .get()
//                     .then((snapshot)=>{
//                         snapshot.forEach((doc)=>{
//                             if(doc.data().postId === postId){
//                                 console.log("DELETING COMMENT: ", doc.id, doc.data().text)
//                                 doc.ref.delete()
//                             }
//                         })
//                     })
//                     .catch(error => console.log("Error deleting post comments"))

//             })
