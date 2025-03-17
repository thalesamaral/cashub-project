export function HeroSection() {
    return (
        <>
            <section className="mt-24 w-full pb-4 items-center lg:flex px-4 md:px-8 ">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-zinc-200 font-bold text-4xl xl:text-5xl">
                        Organize sua vida financeira com o
                        <span className="text-green-600"> Cashub</span>
                    </h1>
                    <p className="text-zinc-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        Entender melhor seus gastos é essencial para uma boa saúde financeira! Isso possibilita um maior controle sobre seu orçamento, sair do endividamento e planejar despesas que realmente são importante pra você.
                    </p>
                    <div>
                        <p className="text-zinc-400 py-3 mb-4">
                            Começe a organização que sua vida financeira tanto precisa agora!
                        </p>
                        <a href='#' className="outline-none bg-green-500 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-zinc-700 focus:ring-2  sm:w-auto">
                            Criar conta
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    <img
                        src="https://i.postimg.cc/kgd4WhyS/container.png"
                        className="w-full mx-auto sm:w-10/12 lg:w-full"
                    />
                </div>
            </section>
        </>
    )
}

