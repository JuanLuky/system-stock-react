import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../shared/components/Table";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { api } from "../service/api";

export function Produtos() {
  const [product, setProduct] = useState<Product[]>([]);
  const [page, setPage] = useState(0); // Começa com 0 (Spring Boot padrão)
  const [totalPages, setTotalPages] = useState(0);
  const size = 10;

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get(`/produtos?page=${page}&size=${size}`);
        setProduct(response.data.product);
        console.log("API response:", response.data.product);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Erro ao buscar dados::", error);
      }
    };
    fetchProdutos();
  }, [page]);

  const handleNextPage = () => {
    if (page + 1 < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const columns: ColumnDef<Product>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "nome", header: "Nome" },
    { accessorKey: "codigo", header: "Código" },
    { accessorKey: "quantidade", header: "Estoque" },
  ];

  console.log("produtos:", product);

  return (
    <div className="mt-1 p-4 shadow-md rounded-md">
      <button className="bg-white absolute top-6 right-8 cursor-pointer text-orange-500 px-4 py-1 rounded-full font-semibold shadow hover:opacity-85 transition">
        Cadastrar Produto
      </button>
      <h2 className="text-2xl text-gray-600 font-bold mb-4">
        Lista de Produtos
      </h2>

      {Array.isArray(product) && product.length > 0 ? (
        <DataTable data={product} columns={columns} />
      ) : (
        <p className="text-gray-500">Nenhum produto encontrado.</p>
      )}

      {/* Paginação */}
      <div className="flex justify-between items-center mt-6 text-gray-600 font-semibold">
        <button
          onClick={handlePrevPage}
          disabled={page === 0}
          className="bg-orange-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span>
          Página {page + 1} de {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={page + 1 >= totalPages}
          className="bg-orange-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
