import  Style  from "./project.modul.css"
import Link from "next/link";
export default function ProjectList() {
  return (
      <main>
       <h1>ProjectList</h1>

        <ul>
            <Link href='/projects/jobit'>
                <li>jobit</li>
            </Link>
            <Link href={'/projects/carrent'}>
                <li>carrent</li>
            </Link>
            <Link href={'/projects/hipnode'}>
                <li>hipnode</li>
            </Link>
        </ul>
      </main>
  );
}
