export function Aguarde() {
  return (
    <div className="flex mt-[-100px] flex-col items-center justify-center h-full text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-4">🚧 Aguarde...</h2>
      <p className="text-gray-600 font-bold text-lg">Em breve atualizações chegarão por aqui!</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/5832/5832581.png"
        alt="Em breve"
        className="w-48 mt-6 opacity-80"
      />
    </div>
  );
}
