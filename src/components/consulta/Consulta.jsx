const Consulta = () => {
    return (
        <div className="mt-40 pt-10 bg-[#1e1e1e] flex flex-col items-center">
            <h2 className="block pt-5 text-3xl font-bold text-center md:text-left">¿Quieres consultarnos algo?</h2>
            <form className="p-10 w-full max-w-lg">
                <div className="mb-5">
                    <label htmlFor="name" className="block font-bold mb-2">
                        Nombre (obligatorio)
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="bg-[#1e1e1e] w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block font-bold mb-2">
                        Correo electrónico (obligatorio)
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-[#1e1e1e] w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="phone" className="block font-bold mb-2">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="bg-[#1e1e1e] w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="block font-bold mb-2">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="bg-[#1e1e1e] w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="5"
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-white text-black font-bold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Consulta;
