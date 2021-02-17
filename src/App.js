import Nevbar from './components/Nevbar';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Add_item from './components/Add_item';
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import Detail from "./components/Detail";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Edit_item from "./components/Edit_item";
import SearchItem from "./components/SearchItem";
function App() {
  return (
    <>
      <Provider store={store}>
        <Nevbar />
        <Switch>
          <Route exact path="/" component={Shop}></Route>
          <Route exact path="/add_item" component={Add_item}></Route>
          <Route exact path="/Detail/:id" component={Detail}></Route>
          <Route exact path="/Edit/:id" component={Edit_item}></Route>
          <Route exact path="/Cart" component={Cart}></Route>
          <Route exact path="/item" component={SearchItem}></Route>
        </Switch>
      </Provider>
    </>
  );
}

export default App;
