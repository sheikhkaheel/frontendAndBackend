
export default function Navbar() {
    return (
        <>
            <nav className="flex border-b-2">
                <div className="w-28 h-30 p-4">
                    <h3 className="text-4xl font-bold">Air<span className="text-rose-500">Bnb</span></h3>
                    {/* <img alt="img" className="rounded-full" src="https://th.bing.com/th/id/OIP.NTt6omy6PZm_U3wtLuztHAHaE8?w=251&h=150&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img> */}
                </div>
                <div className="w-100 pt-4 flex pb-4">
                    <input type="text" className="form-control shadow-md w-80 lg:ml-80 border rounded-full pl-8" placeholder="Search By Name"></input>
                    <button className="btn pt-2.5 lg:ml-1 hover:bg-rose-600 inline-flex bg-rose-500 shadow-md text-white rounded-full">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="pt-4 pr-6">
                    <button className="btn border flex rounded-full w-20">
                        <span className="px-2 pt-1.5"><i class="fa-solid fa-bars"></i></span>
                        <div className="border p-1.5 rounded-full"><i class="fa-solid fa-user"></i></div>
                    </button>
                </div>
            </nav>

        </>
    )
}