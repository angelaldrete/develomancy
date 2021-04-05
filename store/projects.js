// import axios from 'axios'

export const state = () => ({
  projects: [
    { id: 1, title: 'Codemmunication', description: 'Developer forum for developers', thumbnail: '', status: 'in-progress', stLabel: 'In Progress'},
    { id: 2, title: 'Apptograph', description: 'Build projects with repository, hosting and CI / CD in a click', thumbnail: '', status: 'in-progress', stLabel: 'In Progress'},
    { id: 3, title: 'InTheHometown', description: 'Platform for buying, renting a property', thumbnail: '', status: 'in-progress', stLabel: 'In Progress'},
    { id: 4, title: 'UpAndHired', description: 'Job recruitment tool for companies', thumbnail: '', status: 'in-progress', stLabel: 'In Progress'},
    // { id: 5, title: 'Develomancy', description: 'Saas Platform for requesting an app', thumbnail: '', status: 'in-progress', stLabel: 'In Progress'},
  ],
})

export const getters = {
  allProjects: (state) => state.projects
}

export const actions = {}

export const mutations = {}