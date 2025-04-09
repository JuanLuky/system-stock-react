import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../shared/components/Table";

type Movimentacao = {
  id: number;
  codigo: number;
  produto: string;
  tipo: "Entrada" | "Saída";
  quantidade: number;
  data: string;
};

const data: Movimentacao[] = [
  {
    id: 1,
    codigo: 651324,
    produto: "Teclado",
    tipo: "Entrada",
    quantidade: 10,
    data: "2025-04-08",
  },
  {
    id: 2,
    codigo: 121324,
    produto: "Mouse",
    tipo: "Saída",
    quantidade: 5,
    data: "2025-04-09",
  },
];

const columns: ColumnDef<Movimentacao>[] = [
  { accessorKey: "codigo", header: "Código" },
  { accessorKey: "produto", header: "Produto" },
  { accessorKey: "tipo", header: "Tipo" },
  { accessorKey: "quantidade", header: "Qtd" },
  { accessorKey: "data", header: "Data" },
];

export function Movimentacoes() {
  return (
    <div className="mt-1 p-4 shadow-md rounded-md">
      <h2 className="text-2xl text-yellow-950  font-bold mb-4">Movimentações</h2>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
