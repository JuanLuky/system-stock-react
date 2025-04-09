import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../shared/components/Table";

type Produto = {
  id: number;
  codigo: number;
  nome: string;
  categoria: string;
  estoque: number;
};

const data: Produto[] = [
  { id: 1, codigo: 121324, nome: "Notebook", categoria: "Eletrônicos", estoque: 15 },
  { id: 2, codigo: 323424, nome: "Mouse", categoria: "Periféricos", estoque: 40 },
];

const columns: ColumnDef<Produto>[] = [
  { accessorKey: "codigo", header: "Código" },
  { accessorKey: "nome", header: "Produto" },
  { accessorKey: "categoria", header: "Categoria" },
  { accessorKey: "estoque", header: "Estoque" },
];

export function Produtos() {
  return (
    <div>
      <h2 className="text-2xl text-yellow-950 font-bold mb-4">Lista de Produtos</h2>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
