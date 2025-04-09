// src/pages/Home.tsx
export function Home() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl text-yellow-950 font-bold mb-2">Controle de Estoque</h2>
      <p className="text-gray-400 text-[1.2rem] mb-8 font-semibold">
        Faça login como Administrador ou Operador <br /> para ter acessos a mais opções.
      </p>
      <img src="/src/assets/image/file.png" alt="Estoque" className="mx-auto w-146" />
    </div>
  );
}