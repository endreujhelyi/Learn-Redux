// increment
export const increment = (index) => (
  type: 'INCREMENT_LIKE',
  index
)


// add comments
export const addComment = (postId, author, comment) => (
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
)


// remove comment
export const removeComment = (postId, index) => (
  type: 'REMOVE_COMMENT',
  index,
  postId
)
