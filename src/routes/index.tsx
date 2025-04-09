import { createBrowserRouter } from "react-router-dom";
import { Produtos } from "../pages/Produtos";
import { Movimentacoes } from "../pages/Movimentacoes";
import {Home} from "../pages/Home";
import {Aguarde} from "../shared/components/Wait";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "produtos", element: <Produtos /> },
      { path: "movimentacoes", element: <Movimentacoes /> },
      { path: "sair", element: <Aguarde /> },
    ],
  },
]);