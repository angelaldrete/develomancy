// import axios from 'axios'

export const state = () => ({
  comments: [
    { id: 1, userId: 1, postId: 1, comment: 'This is a comment', likes:225, dislikes: 15995, date: 1616602286, replies: [
      { id: 1, toComment: 1, toUserId: 1, comment: 'This is a message reply', likes:225, dislikes: 15995, date: 1616602286},
      { id: 2, toComment: 1, toUserId: 1, comment: 'This is a message reply', likes:225, dislikes: 15995, date: 1616602286}
    ]},
    { id: 2, userId: 2, postId: 1, comment: 'This is a comment', likes:225, dislikes: 15995, date: 1616602286},
    { id: 3, userId: 3, postId: 1, comment: 'This is a comment', likes:225, dislikes: 15995, date: 1616602286},
    { id: 4, userId: 4, postId: 1, comment: 'This is a comment', likes:225, dislikes: 15995, date: 1616602286},
    { id: 5, userId: 5, postId: 1, comment: 'This is a comment', likes:225, dislikes: 15995, date: 1616602286},
  ]
})

export const getters = {
  getComments: (state) => (postId) => state.comments.filter(comment => comment.postId == postId)
}

export const actions = {
  fetchComments: ({ commit }) => {
    // commit('setComments', state.comments)
  },
  addComment: ({ commit }, comment) => {
    commit('newComment', comment)
  }
}

export const mutations = {
  setComments: (state, comments) => (state.comments = comments),
  newComment: (state, comment) => state.comments.unshift(comment)
}