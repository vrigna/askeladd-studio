

import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { faHome } from '@fortawesome/free-solid-svg-icons' call =>  <font-awesome-icon icon="home"/>
import { faVuejs, faYoutube, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add( faVuejs, faYoutube, faGithub, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon)