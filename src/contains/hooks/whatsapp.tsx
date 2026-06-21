export const WA_NUMBER = "557398023545";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA = {
  general: () => waLink("Olá, Juliana! Gostaria de mais informações sobre os seus serviços."),
  scheduling: () => waLink("Olá, Juliana! Gostaria de agendar um atendimento."),
  wedding: () => waLink("Olá, Juliana! Tenho interesse no serviço de cerimonial para casamento."),
  beauty: () => waLink("Olá, Juliana! Gostaria de agendar um atendimento de beleza."),
  brideDay: () => waLink("Olá, Juliana! Gostaria de saber mais sobre o Dia da Noiva."),
  lashes: () => waLink("Olá, Juliana! Gostaria de agendar um atendimento de extensão de cílios."),
  ceremonial: () => waLink("Olá, Juliana! Tenho interesse no cerimonial completo para meu evento."),
  eyebrow: () => waLink("Olá, Juliana! Gostaria de agendar um design de sobrancelha."),
  makeup: () => waLink("Olá, Juliana! Gostaria de agendar maquiagem profissional."),
  hairstyle: () => waLink("Olá, Juliana! Gostaria de agendar um penteado."),
  waxing: () => waLink("Olá, Juliana! Gostaria de agendar depilação."),
  event: () => waLink("Olá, Juliana! Tenho um evento especial e gostaria de agendar maquiagem e penteado."),
};
