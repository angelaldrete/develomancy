// import axios from 'axios'

export const state = () => ({
  services: [
    { id: 1, name: 'Vue', imageUrl: require('~/assets/vuejs-brands.svg') },
    { id: 2, name: 'React', imageUrl: require('~/assets/react-brands.svg') },
    { id: 3, name: 'Angular', imageUrl: require('~/assets/angular-brands.svg') },
    { id: 4, name: 'Laravel', imageUrl: require('~/assets/laravel-brands.svg') },
    { id: 5, name: 'Node', imageUrl: require('~/assets/node-js-brands.svg') },
    { id: 6, name: 'Django', imageUrl: require('~/assets/python-brands.svg') },
    { id: 7, name: 'AWS', imageUrl: require('~/assets/aws-brands.svg') },
    { id: 8, name: 'Android', imageUrl: require('~/assets/android-brands.svg') },
    { id: 9, name: 'iOS', imageUrl: require('~/assets/swift-brands.svg') },
  ],
})

export const getters = {
  allServices: (state) => state.services
}

export const actions = {}

export const mutations = {}

