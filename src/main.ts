import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// Importação dos ícones do Material Design
import "@mdi/font/css/materialdesignicons.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faPen,
  faTrashCan,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

// Configuração do Vuetify
const vuetify = createVuetify({
  components,
  directives,
});

library.add(faSearch, faPen, faTrashCan, faCirclePlus);

const app = createApp(App);
app.use(vuetify);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
