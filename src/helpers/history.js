import { createBrowserHistory } from "history";
const history = createBrowserHistory()

//dev only, remove in PROD!
window.routerHistory = history

export default history
