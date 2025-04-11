export interface Movement {
  id: number;
  quantidade: number;
  tipo: "Entrada" | "Saída";
  dataHora: string;
  produtoId: number;
  produtoNome: string;
}