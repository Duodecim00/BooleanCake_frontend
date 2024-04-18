import AdminNav from "../AdminNav/AdminNav";
import NavLogin from "../UserNav/UserNav";
import Cookies from "js-cookie";

function RenderNav() {
  const rol = Cookies.get("role");
  if (rol == "admin") {
    return <AdminNav rol={rol} />;
  }
  return <NavLogin rol={rol} />;
}
export default RenderNav;
