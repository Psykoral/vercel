import Image from "next/image";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    src="/gravity.png"
                    alt="Logo"
                    width={512}
                    height={225}
                    priority
                />
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">
                        This is from the <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">develop</code> branch.
                    </li>
                </ol>
            </main>
        </div>
    );
}
