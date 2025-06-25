import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PageNotFound from "../pages/PageNotFound";
import BookDetail from "../pages/BookDetail";
import Favourites from "../pages/Favourites";

function AppRoutes(props) {
  return (
    <Routes>

      {/* Route to pass bookID to BookDetail page on click */}
      <Route path="/" element={<Home />} />
      <Route path="/books/:bookId" element={<BookDetail />} />

      {/* index matches on default/home URL: / */}
      <Route index element={<Home {...props} />} />

      {/* nested routes, matches on /login, /bitcoin */}
      <Route path="register" element={<Register {...props} />} />
      <Route path="login" element={<Login {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />

      {/* Favourites route */}
      <Route path="/favourites" element={<Favourites />} />

    </Routes>
  );
}

export default AppRoutes;
