import city from "../../assets/city.webp";

const Header = () => {
    return (
        <div className="relative min-h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 min-h-screen"
                style={{ backgroundImage: `url(${city})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            ></div>
            <div className="relative z-10 flex flex-col items-center  min-h-screen   ">
                <div className="flex items-center w-full justify-between py-5 pl-24 pr-24 bg-black bg-opacity-20 border-b border-white border-opacity-20">
                    <h1 className="text-2xl font-extrabold text-white">LOGO</h1>
                    <nav className="flex">
                        <ul className="flex gap-10 font-bold text-white">
                            <li>Home</li>
                            <li>|</li>
                            <li>Features</li>
                            <li>|</li>
                            <li>Pricing</li>
                            <li>|</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    <div className="flex">
                        <a className="pr-5 font-bold text-white">New account</a>
                        <button className="font-bold text-white">Sign in</button>
                    </div>
                </div>
                <div className="flex-1"></div> {/* Spacer to push the content to the top */}
            </div>
        </div>
    );
}

export default Header;
