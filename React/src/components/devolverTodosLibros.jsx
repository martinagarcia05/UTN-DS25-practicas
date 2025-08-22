export async function Libros() {
    try{
        const res = await fetch("http://localhost:3000/api/books/",{
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        if (!res.ok) {
            return false
        }
        return res;

    }catch (err) {
        alert(`❌ Error de conexión: ${err.message}`);
        return false;
    }
    
}