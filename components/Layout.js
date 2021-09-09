/* TODO: set up css custom scrollbar https://codepen.io/trstnpr/pen/abomLGa */

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}) {
  return (
    <div class="bg-colour">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}