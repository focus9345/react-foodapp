export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="flex gap-4 px-6 py-10 w-full items-center justify-center">
            <p className="text-left text-sm/[9px]">{date} Note: App Is Just for Demo Purposes!</p>
        </div>
    )
}