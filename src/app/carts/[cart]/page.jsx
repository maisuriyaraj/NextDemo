async function getCart(id){
    let data = await fetch(`http://localhost:3000/api/carts/${id}`);
    let result = data.json();
    return result;
}

export default async function Cart({params}) {
    let data = await getCart(params.cart);
  return (
    <div className="flex justify-center align-middle">
        <div>
            {data.products.map((x) => (
                <img src={x.thumbnail} width={200} alt="" />
            ))}
        </div>
    </div>
  )
}
