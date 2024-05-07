

export default function NewListing() {
    return (
        <>
            <div className="container">
                <form className="my-3">
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" for="nl_title" >Title</label>
                            <input type="text" className="form-control" placeholder="title"></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" for="nl_decription" >Description</label>
                            <textarea rows={3} className="form-control" ></textarea>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" for="nl_image" >Image</label>
                            <input className="form-control" type="file"></input>
                        </div>
                        <div className="col">
                            <label className="form-label mx-1" for="nl_price" >Price</label>
                            <input className="form-control" type="number"></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" for="nl_location" >Location</label>
                            <input className="form-control" type="text"></input>
                        </div>
                        <div className="col">
                            <label className="form-label mx-1" for="nl_country" >Country</label>
                            <input className="form-control" type="text"></input>
                        </div>
                    </div>
                    <div className="row mb-3">  
                        <div className="col">
                            <input className="btn bg-rose-500 hover:bg-rose-600 text-white form-control" type="submit"></input>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}