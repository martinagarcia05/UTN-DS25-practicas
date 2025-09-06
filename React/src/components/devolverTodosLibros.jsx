export async function Libros() {
    try{
        const res = await fetch("http://localhost:3000/api/libros/",{
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        if (!res.ok) {
            //eturn false
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const booksData = await res.json();
        return booksData;

    }catch (err) {
        alert(`❌ Error de conexión: ${err.message}`);
        return [];
    }
    
}