function Main() {
    return (
        <main>
            <div className="text-center mx-auto p-4">
                <h1 className="text-4xl text-center text-blue-500">Hello, Tailwind!</h1>
                <button className="bg-blue-500 hover:bg-blue-700 my-2 text-white font-bold py-2 px-4 rounded">Button</button>
            </div>
            <div className="columns-3xs">
                <img className="w-full aspect-video rounded-none" src="https://th.bing.com/th/id/OIP.UYV_bihup-y039M8_Dk0KQHaFP?w=253&h=180&c=7&r=0&o=5&cb=11&dpr=1.5&pid=1.7"></img>
                <img className="w-full aspect-video rounded-sm" src="https://th.bing.com/th/id/OIP.FEqv7YYMNjXtrVYqo7HHzAHaE7?w=269&h=180&c=7&r=0&o=5&cb=11&dpr=1.5&pid=1.7"></img>
                <img className="w-full aspect-video rounded" src="https://th.bing.com/th/id/OIP.UYV_bihup-y039M8_Dk0KQHaFP?w=253&h=180&c=7&r=0&o=5&cb=11&dpr=1.5&pid=1.7"></img>
                <img className="w-full aspect-video rounded-md" src="https://th.bing.com/th/id/OIP.FEqv7YYMNjXtrVYqo7HHzAHaE7?w=269&h=180&c=7&r=0&o=5&cb=11&dpr=1.5&pid=1.7"></img>
            </div>
        </main>
    )

}

export default Main