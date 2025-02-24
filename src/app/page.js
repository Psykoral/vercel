import Image from "next/image";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    src="https://images.ctfassets.net/92yop6rduul9/qReDMrGZQGrkgk6Wg9yTL/785196e4b43ecbe1ad9944d34229cdaf/darkTheme_Absorb-Logo.svg?w=640"
                    alt="Absorb logo"
                    width={160}
                    height={52}
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
