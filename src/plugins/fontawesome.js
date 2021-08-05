

import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { faHome } from '@fortawesome/free-solid-svg-icons' call =>  <font-awesome-icon icon="home"/>
import { faDatabase, faTools } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faYoutube, faGithub, faTwitter, faJs, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add( faVuejs, faYoutube, faGithub, faTwitter, faJs, faDatabase, faGoogle, faTools);

Vue.component('font-awesome-icon', FontAwesomeIcon)