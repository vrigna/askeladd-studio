import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAd } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube, faNode, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faYoutube, faNode, faTwitter, faAd,)

Vue.component('font-awesome-icon', FontAwesomeIcon)