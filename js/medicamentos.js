// js/medicamentos.js

const dadosMedicamentos = [
  {
    id: "1",
    nome: "Paracetamol",
    categoria: "analgésicos",
    nomes_populares: ["Tylenol"],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  },
  {
    id: "2",
    nome: "Ibuprofeno",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless"
  },
  {
    id: "3",
    nome: "Naproxeno",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless"
  },
  {
    id: "4",
    nome: "Cetoprofeno",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless"
  },
  {
    id: "5",
    nome: "Etodolaco",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless"
  },
  {
    id: "7",
    nome: "Piroxicam",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless"
  },
  {
    id: "8",
    nome: "Diclofenaco",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "9",
    nome: "Meloxicam",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "10",
    nome: "Nimesulida",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "11",
    nome: "Celecoxibe",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "12",
    nome: "Tenoxicam",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "13",
    nome: "Indometacina",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "14",
    nome: "Dexametasona",
    categoria: "anti-inflamatórios",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "16",
    nome: "Aspirina",
    categoria: "analgésicos",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "17",
    nome: "Trometamol Cetorolaco",
    categoria: "analgésicos",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "18",
    nome: "Tramadol",
    categoria: "analgésicos",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
    
  },
  {
    id: "19",
    nome: "Dipirona",
    categoria: "analgésicos",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  },
  {
    id: "20",
    nome: "Carisoprodol",
    categoria: "relaxantes",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  },
  {
    id: "21",
    nome: "Ciclobenzaprina",
    categoria: "relaxantes",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  },
  {
    id: "22",
    nome: "Orfenadrina",
    categoria: "relaxantes",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  },
  {
    id: "23",
    nome: "Tizanidina",
    categoria: "relaxantes",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  },
  {
    id: "24",
    nome: "Amoxicilina",
    categoria: "antibióticos",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  },
  {
    id: "25",
    nome: "Azitromicina",
    categoria: "antibióticos",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  
  },
  {
    id: "26",
    nome: "Ciprofloxacino",
    categoria: "antibióticos",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  
  },
  {
    id: "27",
    nome: "Cefalexina",
    categoria: "antibióticos",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  
  },
  {
    id: "28",
    nome: "Metronidazol",
    categoria: "antibióticos",
    nomes_populares: [""],
    imagem_url: "https://media.discordapp.net/attachments/1301221686359883786/1380645341300396052/image.png?ex=6844a1ac&is=6843502c&hm=268e05c49f9a8cf569244d179741d1b6aba78e74adb08a1a0c9a190da9af2b5b&=&format=webp&quality=lossless",
  
  },
];

const Medicamento = {
  list: async () => dadosMedicamentos,
  get: async (id) => dadosMedicamentos.find(m => m.id === id)
};
