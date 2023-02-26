// db.collection.aggregate([
//     { $match: { _id: q} },
//     { $project: { answer: { $arrayElemAt: [ "$answer", i ] } } },
//     { $addFields: { 
//         likeIndex: { $indexOfArray: [ "$answer.like", userID ] }
//     }},
//     { $project: { 
//         answer: { 
//             $cond: {
//               if: { $ne: [ "$likeIndex", -1 ] }, // if string is already in like array
//               then: { 
//                   $filter: { 
//                       input: "$answer.like", 
//                       as: "like", 
//                       cond: { $ne: [ "$$like", userID ] } // remove the string from the like array
//                   }
//               },
//               else: { 
//                   $concatArrays: [ "$answer.like", [userID] ] // add the string to the like array
//               }
//             }
//         }
//     }},
//     { $replaceRoot: { newRoot: { $mergeObjects: [ "$$ROOT", "$answer" ] } } }, // merge the updated answer object with the original document
//     { $project: { answer: 0 } } // remove the answer field from the final result
//   ])