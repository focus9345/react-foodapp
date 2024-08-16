export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer className="flex flex-col gap-4 px-6 py-10 w-full h-32 items-center justify-center">
            <p className="text-sm">{date} Note: App Is Just for Demo Purposes!</p>
        </footer>
    )
}