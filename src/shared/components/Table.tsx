// src/components/DataTable.tsx
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";

type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
};

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto border border-gray-300">
      <table className="min-w-full text-sm text-left bg-white">
        <thead className="bg-gray-100 text-gray-700 uppercase">

          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
          
        </thead>
        <tbody className="text-gray-700">

          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-orange-50">

              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border-t">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
