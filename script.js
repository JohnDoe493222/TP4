let miBlob = null;

document.getElementById('btnCrear').addEventListener('click', () => {
    const contenido = "Universidad Católica de Salta - Ingeniería en Informática - Lenguaje IV 2026. Este es un contenido de prueba para BLOB.";
    miBlob = new Blob([contenido], { type: 'text/plain' });
    alert("¡Blob de texto creado exitosamente!");
});

document.getElementById('btnDescargar').addEventListener('click', () => {
    if (!miBlob) {
        alert("Primero debes crear el Blob.");
        return;
    }
    const url = URL.createObjectURL(miBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo_ejemplo.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

document.getElementById('btnSlice').addEventListener('click', () => {
    if (!miBlob) {
        alert("Primero debes crear el Blob.");
        return;
    }
    // Cortamos los primeros 30 bytes del Blob usando slice
    const blobCortado = miBlob.slice(0, 30, 'text/plain');
    
    const reader = new FileReader();
    reader.onload = function(e) {
        alert("Resultado de slice(0, 30):\n" + e.target.result);
    };
    reader.readAsText(blobCortado);
});