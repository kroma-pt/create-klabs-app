import { Outlet } from "react-router-dom";

export default function UnauthLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
