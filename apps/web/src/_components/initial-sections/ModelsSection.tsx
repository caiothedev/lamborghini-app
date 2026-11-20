import Link from "next/link"

export default function ModelsSection() {
    return (
        <section className="flex flex-col bg-white-background text-black-text">
            <div className="flex flex-row items-center justify-between gap-3 md:gap-5">
                <h2>Modelos</h2>
                <Link href="/models" className="flex flex-row items-center gap-2 transition-fast">
                    Descobrir modelos
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="var(--black-text)">
                        <path d="M16.4133 6L15.5553 6.92298L19.6739 11.3473H2V12.6527H19.6739L15.5541 17.077L16.4145 18L22 12L16.4145 6H16.4133Z" />
                    </svg>
                </Link>
            </div>
            <div>
                <div className="flex flex-col">
                    <div>car image</div>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                        </div>
                        <div className="flex flex-row gap-2">
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </section>
    )
}