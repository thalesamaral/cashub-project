import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/schemas/transations-schemas";

import { FormatMonetaryValue } from "@/lib/currency";
import { Transaction, TransactionType } from "@prisma/client";

interface LastTransactionsProps {
    lastTransactions: Transaction[];
}

export default function LastTransactions({ lastTransactions }: LastTransactionsProps) {
    const getAmountColor = (transaction: Transaction) => {
        if (transaction.type === TransactionType.EXPENSE) {
            return "text-red-500";
        }
        if (transaction.type === TransactionType.DEPOSIT) {
            return "text-primary";
        }
        return "text-white";
    };
    const getAmountPrefix = (transaction: Transaction) => {
        if (transaction.type === TransactionType.DEPOSIT) {
            return "+";
        }
        return "-";
    };
    return (
        <ScrollArea className="rounded-md border">
            <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="font-bold">Últimas Transações</CardTitle>
                <Button variant="outline" className="rounded-full font-bold" asChild>
                    <Link href="/transactions">Ver mais</Link>
                </Button>
            </CardHeader>
            <CardContent className="space-y-6">
                {lastTransactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-white bg-opacity-[3%] p-3 text-white">
                                <Image
                                    src={`/icons/${TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]}`}
                                    height={20}
                                    width={20}
                                    alt="PIX"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-bold">{transaction.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {new Date(transaction.date).toLocaleDateString("pt-BR", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                        <p className={`text-sm font-bold ${getAmountColor(transaction)}`}>
                            {getAmountPrefix(transaction)}
                            {FormatMonetaryValue(Number(transaction.amount))}
                        </p>
                    </div>
                ))}
            </CardContent>
        </ScrollArea>
    );
};