import logo from '../../assets/image/logo.png';

export function Header() {

  return (
    <header className="flex items-center justify-center p-4 bg-orange-500 h-full text-white">
      <a className='btn' href="/">
        <img className='w-36' src={logo} alt="logo" />
      </a>
    </header>
  );
}