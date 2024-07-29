import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../view/Home.vue";
import About from "../view/About.vue";
import StartForm from "../view/StartForm.vue";
import EndForm from "../view/EndForm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/startform", component: StartForm },
  { path: "/endform", component: EndForm },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
