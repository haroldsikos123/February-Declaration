import { useChangeElements } from "../hooks/changeElements";

export function Main() {
    const { handleButtonNo, handleButtonYes, textP, image, countdown } = useChangeElements();

    return (
        <main className="max-w-3xl m-auto w-full h-screen text-center flex justify-center items-center">
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-sans font-bold text-white text-2xl">
                    ¿Puedo ser tu San Valentín mi nonita? ❤️
                </h1>

                <img src={image} className="w-72" alt="Imagen dinámica" />

                <p className="font-mono text-black">{textP}</p>

                {countdown !== null && (
                    <p className="font-mono text-red-500 text-lg">
                        Preparanding sorpresa en {countdown}...
                    </p>
                )}

                <section className="flex gap-3">
                    <button
                        className="bg-purple-500 w-28 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110"
                        onClick={handleButtonYes}
                    >
                        Sí!
                    </button>

                    <button
                        className="bg-pink-500 w-20 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110"
                        onClick={handleButtonNo}
                    >
                        No
                    </button>
                </section>
            </div>
        </main>
    );
}
