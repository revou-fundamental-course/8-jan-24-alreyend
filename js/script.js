function calculateArea1() {
    // Mendapatkan nilai panjang sisi dari input
    var nilaisisi1 = document.getElementById("nilaisisi1").value;
  
    // Validasi input
    if (nilaisisi1 === "" || isNaN(nilaisisi1)) {
      alert("Masukkan panjang sisi dengan angka yang valid.");
      return;
    }
  
    // Menghitung luas persegi
    var luas = nilaisisi1 * nilaisisi1;
  
    // Menampilkan hasil
    var resultElement = document.getElementById("result1");
    resultElement.innerHTML = "L = S x S = " + nilaisisi1 + " x " + nilaisisi1 + " = " + luas;
  }
function calculateArea2() {
    // Mendapatkan nilai panjang sisi dari input
    var nilaisisi2 = document.getElementById("nilaisisi2").value;
  
    // Validasi input
    if (nilaisisi2 === "" || isNaN(nilaisisi2)) {
      alert("Masukkan panjang sisi dengan angka yang valid.");
      return;
    }
  
    // Menghitung luas persegi
    var area = 4 * nilaisisi2;
  
    // Menampilkan hasil
    var resultElement = document.getElementById("result2");
    resultElement.innerHTML = "L = 4 x S = 4 x " + nilaisisi2 + " = " + area;
  }
function resetArea1() {
    document.getElementById("nilaisisi1").value = "";
    document.getElementById("result1").innerHTML = "";
}
function resetArea2() {
    document.getElementById("nilaisisi2").value = "";
    document.getElementById("result2").innerHTML = "";
}