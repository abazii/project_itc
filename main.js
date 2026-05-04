const tombolHitung = document.getElementById("tombol-hitung");
const tombolReset = document.getElementById("tombol-reset");

tombolHitung.addEventListener("click", function() {
    let jarak = parseFloat(document.getElementById("input-jarak").value) || 0;
    let koefKendaraan = parseFloat(document.getElementById("input-kendaraan").value) || 0;
    let ac = parseFloat(document.getElementById("input-ac").value) || 0;
    let laptop = parseFloat(document.getElementById("input-laptop").value) || 0;

    let totalEmisi = (jarak * koefKendaraan) + (ac * 0.5) + (laptop * 0.05);

    document.getElementById("angka-hasil").innerText = totalEmisi.toFixed(2);
});

tombolReset.addEventListener("click", function() {
    document.getElementById("input-jarak").value = "";
    document.getElementById("input-ac").value = "";
    document.getElementById("input-laptop").value = "";
    
    document.getElementById("input-kendaraan").value = "0.1";
    
    document.getElementById("angka-hasil").innerText = "0";
});