"use server";

import { db } from "@/lib/prisma";

import {
    TransactionCategory,
    TransactionPaymentMethod,
    TransactionType,
} from "@prisma/client";

import { UpsertTransactionSchema } from "@/schemas/transations-schemas";

import { revalidatePath } from "next/cache";

interface UpsertTransactionParams {
    id?: string;
    name: string;
    amount: number;
    type: TransactionType;
    category: TransactionCategory;
    paymentMethod: TransactionPaymentMethod;
    date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
    UpsertTransactionSchema.parse(params);
    // const { userId } = await auth();
    const userId = 'FUTURE-ID'

    if (!userId) {
        throw new Error("Unauthorized");
    }

    await db.transaction.upsert({
        update: { ...params, userId },
        create: { ...params, userId },
        where: {
            id: params?.id ?? "",
        },
    });
    revalidatePath("/transactions");
};
