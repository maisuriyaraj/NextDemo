import Link from "next/link";
import { getUsers } from "../../../services/getUsers"

export default async function page() {
    let data = await getUsers();
    console.log(data);
  return (
    <>
        <ul>
            {data.map((x,i) => (
                <li key={i}><Link href={`dash/${x.firstName}`}>{x.firstName}</Link></li>
            ))}
        </ul>
    </>
  )
}
