import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

library.add(faSearch, faPen, faTrashCan);

const app = createApp(App);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
