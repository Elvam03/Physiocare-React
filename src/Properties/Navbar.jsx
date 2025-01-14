


const Navbar = () => {

    return (
        <div>
            {/* Navbar */}
            <div className="">

                <nav className="bg-white flex flex-col">
                    <div className="text-center p-2">
                        <span className="text-lg lg:text-4xl text-blue-800 font-semibold p-2">
                            PhysioCare
                        </span>
                        <span className="text-lg lg:text-4xl text-teal-500 font-semibold">
                            Network
                        </span>

                    </div>
                    <div className="text-center text-gray-400 pb-2 text-sm md:text-md">
                        <h1>Making you better</h1>
                    </div>
                </nav>
            </div>

        </div>
    )

}

export default Navbar;