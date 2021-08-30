
import { Logo } from '@/components/index';

const Header = () => {

  return (
    <header className="sticky top-0 bg-white z-10 shadow" style={{ color: '#002AFC'}}>
      <div className="">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
