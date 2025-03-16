import { db } from "@/lib/prisma";

interface GetTransactionsParams {
    searchParams: {
        from: string;
        to: string;
    };
}

export async function GetTransactions({
    searchParams: { from, to },
}: GetTransactionsParams) {

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
    };

    return await db.transaction.findMany({
        where,
    });
}

export async function GetDepositsTotal({
    searchParams: { from, to },
}: GetTransactionsParams) {
    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
    };

    return Number(
        (
            await db.transaction.aggregate({
                where: { ...where, type: "DEPOSIT" },
                _sum: { amount: true },
            })
        )?._sum?.amount,
    );
}

export async function GetInvestmentsTotal({
    searchParams: { from, to },
}: GetTransactionsParams) {

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
    };

    return Number(
        (
            await db.transaction.aggregate({
                where: { ...where, type: "INVESTMENT" },
                _sum: { amount: true },
            })
        )?._sum?.amount,
    );
}

export async function GetExpensesTotal({
    searchParams: { from, to },
}: GetTransactionsParams) {

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
    };

    return Number(
        (
            await db.transaction.aggregate({
                where: { ...where, type: "EXPENSE" },
                _sum: { amount: true },
            })
        )?._sum?.amount,
    );
}

export async function GetCreditCardTotal({
    searchParams: { from, to },
}: GetTransactionsParams) {

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
    };

    return Number(
        (
            await db.transaction.aggregate({
                where: { ...where, paymentMethod: "CREDIT_CARD" },
                _sum: { amount: true },
            })
        )?._sum?.amount,
    );
}

