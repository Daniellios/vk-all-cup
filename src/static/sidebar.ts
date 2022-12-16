import Archive from "../svg/Archive";
import Drafts from "../svg/Drafts";
import Important from "../svg/Important";
import Incoming from "../svg/Incoming";
import Sent from "../svg/Sent";
import Spam from "../svg/Spam";
import Trash from "../svg/Trash";

const sideBarLinks = [
  { path: "/", title: "Входящие", icon: Incoming },
  { path: "/important", title: "Важное", icon: Important },
  { path: "/sent", title: "Отправленные", icon: Sent },
  { path: "/drafts", title: "Черновики", icon: Drafts },
  { path: "/archive", title: "Архив", icon: Archive },
  { path: "/spam", title: "Спам", icon: Spam },
  { path: "/trash", title: "Корзина", icon: Trash },
];

export default sideBarLinks;
