import Link from "next/link";

export default function page() {
    return(
        <main>
            <Link href="/projects/list">
              See Projects
            </Link>
            <h1>About</h1>
        </main>
    )
}