import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";


export default async function SubscriptionPage() {
    // const { userId } = await auth();
    const userId = "REFACTOR"
    
    if (!userId) {
      redirect("/login");
    }

    return (
        <>
            <Navbar />
            <h1>Assinatura page</h1>
        </>
    )
};