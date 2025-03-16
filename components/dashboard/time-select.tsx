"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
];

export default function TimeSelect() {
    const { push } = useRouter();
    const searchParams = useSearchParams();
    const month = searchParams.get("month");
    const pathName = usePathname();

    const handleMonthChange = (month: string) => {
        push(`${pathName}?month=${month}`);
    };
    return (
        <Select
            onValueChange={(value) => handleMonthChange(value)}
            defaultValue={month ?? ""}
        >
            <SelectTrigger className="w-[150px] rounded-full">
                <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
                {MONTH_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};