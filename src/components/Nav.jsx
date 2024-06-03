const Nav = () => {
  return (
    <div className="mb-[240px] ">
      <nav>
        <div className="flex justify-between">
          <div className="h-[64px] w-[59.95px] ml-2">
            <img src="src\assets\Mask group.png" alt="logo" />
          </div>
          <div className="text-brown-2 font-Poppins flex justify-between gap-[50px] px-2 items-center mt-1">
            <div className="transition ease-in hover:text-orange-1 100ms">
              <a>Home</a>
            </div>
            <div className="hover:text-orange-1">
              <a>About</a>
            </div>
            <div className="hover:text-orange-1">
              <a>Events</a>
            </div>
            <div className="hover:text-orange-1">
              <a>Committee</a>
            </div>
            <div className="hover:text-orange-1">
              <a>Sponsors</a>
            </div>
            <div className="hover:text-orange-1">
              <a>Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;