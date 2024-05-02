export async function getUsers() {
    const result = await fetch("https://dummyjson.com/users")
    const data = await result.json();
return data.users;
}