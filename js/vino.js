Swal.fire({
    title: "¿Quieres aceptar los términos y condiciones?",
    showDenyButton: true,
    showCancelButton: false, 
    confirmButtonText: "Aceptar",
    denyButtonText: "Rechazar"
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire("¡Términos aceptados!", "", "success");
    } else if (result.isDenied) {
        Swal.fire("Términos rechazados", "", "info").then(() => {
            window.location.href = "./pages/rechazado.html";
        });
    }
});