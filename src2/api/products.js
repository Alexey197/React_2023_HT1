import http from "./http";

export async function all(){
	let response = await http.get('https://jsonplaceholder.typicode.com/users/1/todos');
	console.log(response.data);
	return response.data;

}

export async function one(id){
	let response = await http.get(`/products/index.php?delay&id=${id}`);
	return response.data;
}