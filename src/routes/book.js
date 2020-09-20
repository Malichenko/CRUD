// Pages
import {
  PageHome,
  ProfilePage,
  ContactsPage,
  ContactPage,
  NoMatchPage,
} from "../pages";

export const book = Object.freeze({
  home: {
    url: "/",
    component: PageHome,
    id: "home",
  },
  profile: {
    url: "/profile",
    component: ProfilePage,
    id: "profile",
  },
  contacts: {
    url: "/contacts",
    component: ContactsPage,
    id: "contacts",
  },
  contact: {
    url: "/contacts/:id",
    component: ContactPage,
    id: "contact",
  },
  noMatch: {
    url: "*",
    component: NoMatchPage,
    id: "noMatch",
  },
});
