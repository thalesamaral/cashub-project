import { transactionColumns } from "./columns";

import Navbar from "@/components/navbar";
import { DataTable } from "@/components/ui/data-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import AddTransactionButton from "@/components/transactions/add-transaction-button";

import { endOfMonth, format, isMatch, startOfMonth } from "date-fns";
import { redirect } from "next/navigation";
import { GetCreditCardTotal, GetDepositsTotal, GetExpensesTotal, GetInvestmentsTotal, GetTransactions } from "@/actions/transactions/get-transactions";
import { TransactionsDataPicker } from "@/components/transactions/transactions-data-picker";
import { CreditCard, PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import TransactionSummaryCard from "@/components/transactions/transaction-summary-card";


interface TransactionPageParams {
    searchParams: {
        month: string,
        from: string,
        to: string,
    }
}

export default async function TransactionsPage({ searchParams: { month, from, to } }: TransactionPageParams) {
    if (!month && (!from && !to))
        redirect(`?month=${new Date().getMonth() + 1}`)

    const searchParams = { from, to }

    if (month && isMatch(month, "MM")) {
        const defaultDate = new Date(new Date().getFullYear(), Number(month) - 1)
        searchParams.from = format(startOfMonth(defaultDate), 'yyyy-MM-dd')
        searchParams.to = format(endOfMonth(defaultDate), 'yyyy-MM-dd')
    }

    const transactions = await GetTransactions({ searchParams })
    const totalExpensives = await GetExpensesTotal({ searchParams })
    const totalDeposits = await GetDepositsTotal({ searchParams })
    const totalInvestments = await GetInvestmentsTotal({ searchParams })
    const totalCreditCard = await GetCreditCardTotal({ searchParams })

    return (
        <>
            <Navbar />
            <div className="space-y-6 p-6">
                <div className="grid grid-cols-4 gap-6">
                    <TransactionSummaryCard
                        icon={<PiggyBankIcon size={16} className="text-primary" />}
                        title="Saldo"
                        amount={totalDeposits - (totalExpensives + totalInvestments)}
                    />
                    <TransactionSummaryCard
                        icon={<TrendingUpIcon size={16} className="text-primary" />}
                        title="Receita"
                        amount={totalDeposits}
                    />
                    <TransactionSummaryCard
                        icon={<TrendingDownIcon size={16} className="text-red-500" />}
                        title="Despesas"
                        amount={totalExpensives}
                    />
                    <TransactionSummaryCard
                        icon={<CreditCard size={16} className="text-red-500" />}
                        title="Cartões"
                        amount={totalCreditCard}
                    />
                </div>
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-2xl font-bold">Transações</h1>
                    <div className="flex items-center gap-2">
                        <TransactionsDataPicker />
                        <AddTransactionButton />
                    </div>
                </div>
                <ScrollArea>
                    <DataTable columns={transactionColumns} data={transactions} />
                </ScrollArea>
            </div>
        </>
    );
};