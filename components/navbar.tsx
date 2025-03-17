"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="flex justify-between border-b border-solid px-8 py-4">
            <div className="flex items-center gap-10">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        width={103}
                        height={39}
                        alt="cashub"
                    />
                </Link>
                <Link
                    href="/dashboard"
                    className={
                        pathname === "/dashboard"
                            ? "font-bold text-primary"
                            : "text-muted-foreground"
                    }
                >
                    Dashboard
                </Link>
                <Link
                    href="/transactions"
                    className={
                        pathname === "/transactions"
                            ? "font-bold text-primary"
                            : "text-muted-foreground"
                    }
                >
                    Transações
                </Link>
                <Link
                    href="/subscription"
                    className={
                        pathname === "/subscription"
                            ? "font-bold text-primary"
                            : "text-muted-foreground"
                    }
                >
                    Assinatura
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
