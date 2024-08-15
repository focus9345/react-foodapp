export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="flex flex-col py-4 px-10 text-sm bg-green-500">
            {date} Note: App Is Just for Demo Purposes!
        </div>
    )
}