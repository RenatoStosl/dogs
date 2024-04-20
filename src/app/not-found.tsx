import Link from "next/link";

export default function NotFound() {
    return (
        <section className="container">
            <h1 className="title">Página não encontradada</h1>
            <Link className="button mb-4 inline-block" href="/">Volte para a home.</Link>
        </section>
    )
}