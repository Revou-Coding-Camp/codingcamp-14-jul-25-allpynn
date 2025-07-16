const name = "Alvin";
document.getElementById("username").textContent = name;
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("show");
}

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tanggal = document.getElementById("tanggal").value;
  const pesan = document.getElementById("pesan").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!nama || !tanggal || !gender || !pesan) {
    alert("Semua field wajib diisi!");
    return;
  }

  // Tampilkan nilai ke output
  document.getElementById("waktu").textContent = new Date().toLocaleString();
  document.getElementById("outNama").textContent = nama;
  document.getElementById("outTanggal").textContent = tanggal;
  document.getElementById("outGender").textContent = gender.value;
  document.getElementById("outPesan").textContent = pesan;

  // Reset form jika mau
  this.reset();
});
