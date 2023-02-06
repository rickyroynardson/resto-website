import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";

export default function Layout({ children }) {
    return (
        <div className="fixed w-screen h-screen flex bg-gray-300">
            <Sidebar />
            <div className="basis-full flex flex-col">
                <Header />
                <main className="mx-3 mb-3 p-5 overflow-y-auto rounded-2xl shadow bg-white">
                    {children}
                </main>
            </div>
        </div>
    );
}
