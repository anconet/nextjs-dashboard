import SideNav from "../ui/dashboard/sidenav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-slate-600 flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav>
                </SideNav>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12>">{children}</div>
        </div >)
}