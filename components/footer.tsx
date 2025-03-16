import { Button } from "./ui/button"

export function Footer() {

    const footerNavs = [
        {
            label: "Sobre o Cashub",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Termos de uso'
                },
                {
                    href: 'javascript:void()',
                    name: 'Licença'
                },
                {
                    href: 'javascript:void()',
                    name: 'Política de prividade'
                },
                {
                    href: 'javascript:void()',
                    name: 'Sobre nós'
                },
            ]
        }
    ]


    return (
        <footer className="w-full">
            <div className=" mx-auto px-4 text-gray-600 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        <img src="/logo.svg" className="w-32" />
                        <p className="max-w-md">
                            A solução para controle da sua vida financeira.
                        </p>
                        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                            {
                                footerNavs.map((item, idx) => (
                                    <ul
                                        className="space-y-4"
                                        key={idx}
                                    >
                                        <h4 className="text-gray-800 font-medium">
                                            {item.label}
                                        </h4>
                                        {
                                            item.items.map(((el, idx) => (
                                                <li key={idx}>
                                                    <a
                                                        href={el.href}
                                                        className="hover:underline hover:text-green-600"
                                                    >
                                                        {el.name}
                                                    </a>
                                                </li>
                                            )))
                                        }
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mt-6">
                        <form

                        >
                            <label className="block pt-4 pb-2">
                                Fique ligado em nossas mudanças
                            </label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                    className="w-full p-2.5 outline-none border rounded-lg"
                                />
                                <Button
                                    variant="primary"
                                >
                                    Receber novidadades
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t md:text-center">
                    <p>© 2024 Cashub. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}   