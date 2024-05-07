export default function Main() {
    return (
        <>
            <main>
                <div className="flex flex-col-reverse gap-2 text-white text-center mt-4">
                    <div className="bg-sky-500">1</div>
                    <div className="bg-sky-600">2</div>
                    <div className="bg-sky-700">3</div>
                </div>
                <div>
                    <div className="row mt-3">
                        <div className="col">
                            <label>Username</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col">
                            <label>Password</label>
                            <input type="password" className="form-control"></input>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}