import logo from '../../assets/image/logo.png';

export function Header() {

  return (
    <header className="flex items-center justify-between p-4 bg-orange-500 h-full text-white">
      <a className='btn' href="/">
        <img className='w-36' src={logo} alt="logo" />
      </a>
      <button className="bg-white cursor-pointer text-orange-500 px-4 py-1 rounded-full font-semibold shadow hover:opacity-85 transition">
        Cadastrar Produto
      </button>
    </header>
  );
}