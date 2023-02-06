import { HiMenuAlt2 } from "react-icons/hi";

export default function Header() {
    return (
        <header className="m-3 p-5 rounded-2xl flex items-center justify-between shadow bg-white">
            <button>
                <HiMenuAlt2 className="w-6 h-6" />
            </button>
            <p>username</p>
        </header>
    );
}
