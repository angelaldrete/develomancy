// import axios from 'axios'

export const state = () => ({
  items: [
    'Web Development',
    'Devops',
    'Feature',
    'Bug Fix',
    'Mobile Development',
    'Frontend',
    'Backend',
    'Other'
  ],
})

export const getters = {
  allItems: (state) => state.items
}

export const actions = {}

export const mutations = {}