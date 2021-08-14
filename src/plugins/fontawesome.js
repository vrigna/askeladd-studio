

import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faTools, faLightbulb, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faYoutube, faGithub, faTwitter, faJs, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add( 
    faVuejs, 
    faYoutube, 
    faGithub, 
    faTwitter, 
    faJs, 
    faDatabase, 
    faGoogle, 
    faTools,
    faLightbulb,
    faArrowUp,
    faArrowDown
);

Vue.component('font-awesome-icon', FontAwesomeIcon)