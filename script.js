document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y las celdas de la tabla (solo las celdas de valores)
    const form = document.querySelector("form");
    const tableCells = document.querySelectorAll("table tbody td");

    // Campos que queremos capturar y actualizar
    const fields = [
        "Nombre", 
        "Apellido", 
        "email", 
        "edad", 
        "direccion", 
        "telefono", 
        "provincia", 
        "codigo-postal",
        "metodo_contacto",
        "suscripcion"
    ];

    function updateTable() {
        const formData = new FormData(form);

        fields.forEach((field, index) => {
            const value = formData.get(field) || ''; 
            tableCells[index * 2 + 1].textContent = value; 
        });

        const metodoContacto = formData.get("metodo_contacto");
        const metodoContactoCell = tableCells[fields.length * 2].nextElementSibling;
        metodoContactoCell.textContent = metodoContacto || '';

        const suscripcionValues = formData.getAll("suscripcion"); 
        const suscripcionCell = tableCells[fields.length * 2 + 1].nextElementSibling;  

        suscripcionCell.textContent = suscripcionValues.length > 0 ? suscripcionValues.join(", ") : 'vacio';
    }

    form.addEventListener("input", updateTable);
});