import Modal from "#/ui/modal";
import { ReactNode } from "react";

export default function DashboardLayout({ children, modal }: { children: ReactNode, modal: ReactNode }) {
    return (
        <>
        {children}
        {modal}
        </>
    )
}