import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import GlobalStyle from "../Components/GlobalStyle"
import Header from "./Header"
import Auth from "../hoc/auth"
import Home from "../Routes/Home";
import Login from "../Routes/Login"
import Register from "../Routes/Register"
import Upload from "../Routes/Upload"
import DetailProduct from "../Routes/DetailProduct/DetailProduct"
import CartPage from "../Routes/Cart/CartPage";
import MyProfile from "../Routes/Profile/MyProfile"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Auth(Home, null)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/register" component={Auth(Register, false)} />
          <Route exact path="/upload" component={Auth(Upload, true)} />
          <Route exact path="/product/:id" component={Auth(DetailProduct, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/user/my-profile" component={Auth(MyProfile, true)} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
