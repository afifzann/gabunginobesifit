import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import EmailPage from "@/pages/auth/EmailPage";
import HapePage from "@/pages/auth/HapePage";
import LoginDokterPage from "@/pages/auth/LoginDokterPage";
import RegisterDokterPage from "@/pages/auth/RegisterDokterPage";
import EmailDokterPage from "./pages/auth/EmailDokterPage";
import HapeDokterPage from "./pages/auth/HapeDokterPage";
import LoginAdminPage from "./pages/auth/LoginAdminPage";
import Dashboard from "./pages/DashboardPage";
import HomeUser from "./pages/HomeUser";
import ArtikelUser from "./pages/ArtikelUser";
import VideoUser from "./pages/VideoUser";
import HomeDokter from "./pages/HomeDokter";
import IsiArtikelUserPage from "./pages/IsiArtikelUserPage";
import IsiVideoUserPage from "./pages/IsiVideoUserPage";
import ArtikelDokter from "./pages/ArtikelDokter";
import VideoDokter from "./pages/VideoDokter";
import IsiArtikelDokterPage from "./pages/IsiArtikelDokterPage";
import IsiVideoDokterPage from "./pages/IsiVideoDokterPage";
import BuatArtikelDokterPage from "./pages/BuatArtikelDokterPage";
import BuatVideoDokterPage from "./pages/BuatVideoDokterPage";
import HomeAdmin from "./pages/HomeAdmin";
import KelolaPenggunaPage from "./pages/KelolaPenggunaPage";
import KelolaArtikelPage from "./pages/KelolaArtikelPage";
import KelolaVideoPage from "./pages/KelolaVideoPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/email",
    element: <EmailPage />,
  },
  {
    path: "/hape",
    element: <HapePage />,
  },
  {
    path: "/login-dokter",
    element: <LoginDokterPage />,
  },
  {
    path: "/register-dokter",
    element: <RegisterDokterPage />,
  },
  {
    path: "/email-dokter",
    element: <EmailDokterPage />,
  },
  {
    path: "/hape-dokter",
    element: <HapeDokterPage />,
  },
  {
    path: "/login-admin",
    element: <LoginAdminPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/homeuser",
    element: <HomeUser />,
  },
  {
    path: "/artikeluser",
    element: <ArtikelUser />,
  },
  {
    path: "/videouser",
    element: <VideoUser />,
  },
  {
    path: "/homedokter",
    element: <HomeDokter />,
  },
  {
    path: "/isiartikeluser",
    element: <IsiArtikelUserPage />,
  },
  {
    path: "/isivideouser",
    element: <IsiVideoUserPage/>,
  },
  {
    path: "/artikeldokter",
    element: <ArtikelDokter/>,
  },
  {
    path: "/videodokter",
    element: <VideoDokter/>,
  },
  {
    path: "/isiartikeldokter",
    element: <IsiArtikelDokterPage/>,
  },
  {
    path: "/isivideodokter",
    element: <IsiVideoDokterPage/>,
  },
  {
    path: "/buatartikeldokter",
    element: <BuatArtikelDokterPage/>,
  },
  {
    path: "/buatvideodokter",
    element: <BuatVideoDokterPage/>,
  },
  {
    path: "/homeadmin",
    element: <HomeAdmin/>,
  },
  {
    path: "/kelolapengguna",
    element: <KelolaPenggunaPage/>,
  },
  {
    path: "/kelolaartikel",
    element: <KelolaArtikelPage/>,
  },
  {
    path: "/kelolavideo",
    element: <KelolaVideoPage/>,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);