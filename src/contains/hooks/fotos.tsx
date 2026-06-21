type Photo = {
  src: string;
  category: string;
  alt: string;
};

const photos = [
  { src: "./images/casamento1.jpeg", category: "Casamentos", alt: "Aplicação de maquiagem" },
  { src: "./images/casamento2.jpeg", category: "Casamentos", alt: "Aplicação de maquiagem" },
  { src: "./images/casamento3.jpeg", category: "Casamentos", alt: "Aplicação de maquiagem" },
  { src: "./images/casamento4.jpeg", category: "Casamentos", alt: "Aplicação de maquiagem" },
  { src: "./images/casamento5.jpeg", category: "Casamentos", alt: "Aplicação de maquiagem" },
  { src: "./images/casamento6.jpeg", category: "Casamentos", alt: "Aplicação de maquiagem" },
  { src: "./images/casamento7.jpeg", category: "Casamentos", alt: "Aplicação de maquiagem" },
  { src: "./images/casamento8.jpeg", category: "Casamentos", alt: "Aplicação de maquiagem" },
  { src: "./images/sombrancelha1.png", category: "Sombrancelha", alt: "sombrancelhas" },
  { src: "./images/sombrancelha2.png", category: "Sombrancelha", alt: "sombrancelhas" },
  { src: "./images/sombrancelha3.png", category: "Sombrancelha", alt: "sombrancelhas" },
  { src: "./images/sombrancelha4.png", category: "Sombrancelha", alt: "sombrancelhas" },
  { src: "./images/cilios1.png", category: "Cílios", alt: "Design de cílios" },
  { src: "./images/cilios2.png", category: "Cílios", alt: "Design de cílios" },
  { src: "./images/cilios3.jpeg", category: "Cílios", alt: "Design de cílios" },
  { src: "./images/cilios.jpeg", category: "Cílios", alt: "Design de cílios" },
  { src: "./images/curso1.jpeg", category: "Curso", alt: "Design de cílios" },
  { src: "./images/curso2.jpeg", category: "Curso", alt: "Design de Curso" },
  { src: "./images/curso3.jpeg", category: "Curso", alt: "Design de Curso" },
  { src: "./images/curso4.jpeg", category: "Curso", alt: "Design de Curso" },
  { src: "./images/curso5.jpeg", category: "Curso", alt: "Design de Curso" },
];

// FUNÇÃO PARA EMBARALHAR
function shuffle(array: Photo[]): Photo[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const photosRandom = shuffle([...photos]); // cópia + embaralhado

export default photosRandom;