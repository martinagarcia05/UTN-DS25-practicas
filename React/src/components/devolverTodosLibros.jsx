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

export async function Crear(titulo, descripcion, nomYapAutor) {
    try {
        const res = await fetch("http://localhost:3000/api/libros/crear", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo, descripcion, nomYapAutor })
        });
        if (!res.ok) {
            throw new Error(`HTTP error LibroCrear! status: ${res.status}`);
        }
        const newBook = await res.json();
        return newBook;
    } catch (err) {
        alert(`❌ Error de conexión: ${err.message}`);
        return null;
    }
}

export async function CrearAutor(nomYap, nacimiento) {
    try {
        const res = await fetch("http://localhost:3000/api/autores/crear", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nomYap, nacimiento })
        });
        if (!res.ok) {
            throw new Error(`HTTP error AutorCrear! status: ${res.status}`);
        }
        const newAuthor = await res.json();
        return newAuthor;
    } catch (err) {
        alert(`❌ Error de conexión: ${err.message}`);
        return null;
    }
}
