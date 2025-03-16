import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
    icon: ReactNode;
    title: string;
    amount: number;
}

export default function TransactionSummaryCard({
    icon,
    title,
    amount,
}: SummaryCardProps) {
    return (
        <Card className="p-4 space-y-2">
            <CardHeader className="flex-row items-center gap-4 p-0">
                {icon}
                <p className="text-muted-foreground">
                    {title}
                </p>
            </CardHeader>
            <CardContent className="flex justify-between p-0">
                <p className="font-bold text-xl">
                    {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(amount)}
                </p>
            </CardContent>
        </Card>
    );
};