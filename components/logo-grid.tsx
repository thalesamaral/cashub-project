import Image from "next/image"
export function LogoGrid() {
    const height = "100"
    const width = "100"
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray-200 text-3xl font-semibold sm:text-4xl">
                        Tecnologias utilizadas
                    </h3>
                    <p className="text-gray-400 mt-3">
                        O <span className="text-green-500">Cashub</span> utiliza de tecnologias e open-source em sua implementação.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <ul className="inline-grid grid-cols-1 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-2 lg:grid-cols-3">
                        <li className="flex items-center justify-center">
                            <Image
                                src="/core/nextjs-logo-icon.webp"
                                alt="nextjs"
                                width={width}
                                height={height}

                            />
                        </li>
                        <li className="flex items-center justify-center">
                            <Image
                                src="/core/nextjs-auth-logo-icon.png"
                                alt="next-auth"
                                width={width}
                                height={height}
                            />
                        </li>
                        <li className="flex items-center justify-center">
                            <Image
                                src="/core/tailwindcss-logo-icon.svg"
                                alt="tailwindcss"
                                width={width}
                                height={height}
                            />
                        </li>
                        <li className="flex items-center justify-center">
                            <Image
                                src="/core/shadcn-logo.svg"
                                alt="shadcn"
                                width={width}
                                height={height}
                            />
                        </li>
                        <li className="flex items-center justify-center">
                            <Image
                                src="/core/supabase-logo-icon.png"
                                alt="supabase"
                                width={width}
                                height={height}
                            />
                        </li>
                        <li className="flex items-center justify-center">
                            <Image
                                src="/core/vercel-logo-icon.svg"
                                alt="vercel"
                                width={width}
                                height={height}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}