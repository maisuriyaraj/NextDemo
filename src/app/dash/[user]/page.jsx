export default async function page({params}) {

  return (
    <div>{params.user}</div>
  )
}

export async function generateStaticParms(){
  let data = await getUsers();
  return data.map((x) => {
    user:user.firstName.toString();
  })
}
