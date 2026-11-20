import LinkButton from "@/_components/ui/LinkButton"

export default function NotFound() {
    return (
        <main className="flex flex-1 flex-col items-center justify-center gap-4">
            <div>
                <h1>Erro 404</h1>
                <p></p>
            </div>
            <LinkButton href="/" />
        </main>
    )
}