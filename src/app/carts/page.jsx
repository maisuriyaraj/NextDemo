import Link from "next/link";

async function getData(){
    let data = await fetch("http://localhost:3000/api/carts");
    let result = data.json();
    return result;
}
export default async function Carts() {
    let data = await getData();
  return (
    <div className="flex justify-center align-middle">
        <ul>
            {data.map((x) => (
                <li><Link href={`/carts/${x.id}`}>{x.id}</Link></li>
            ))}
        </ul>
    </div>
  )
}
