console.log("Halo, ini kontribusi erlindadefanty-afk pada proyek TRPL.");
const kontributor: string = "erlindadefanty-afk";
const jumlahTugasSelesai: number = 3;
const targetTugas: number = 4;

function cekStatusKontribusi(nama: string, selesai: number, target: number): string {
  const persentase: number = (selesai / target) * 100;
  return `Kontribusi oleh ${nama}: ${selesai}/${target} (${persentase}%) selesai.`;
}

console.log(cekStatusKontribusi(kontributor, jumlahTugasSelesai, targetTugas));