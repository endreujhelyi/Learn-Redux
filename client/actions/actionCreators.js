// increment
export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKE',
    index
  }
}


// add comments
export const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}


// remove comment
export const removeComment = (postId, index) => {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}
