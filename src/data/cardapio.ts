import { Beef, Beer, Sandwich, UtensilsCrossed } from "lucide-react";

export type ItemCardapio = {
  id: string;
  nome: string;
  desc?: string;
  preco?: number;
};

export type CategoriaCardapio = {
  id: string;
  label: string;
  icon: typeof Sandwich;
  nota: string;
  itens: ItemCardapio[];
};

export const cardapio: CategoriaCardapio[] = [
  {
    id: "sanduiches",
    label: "Sanduíches",
    icon: Sandwich,
    nota: "Pão, hambúrguer, queijo e presunto em todos.",
    itens: [
      { id: "sanduiches-x-burguer", nome: "X-Burguer", desc: "Maionese e ketchup", preco: 12 },
      { id: "sanduiches-x-salada", nome: "X-Salada", desc: "+ alface e tomate", preco: 15 },
      { id: "sanduiches-x-egg", nome: "X-Egg", desc: "+ ovo, alface e tomate", preco: 17 },
      { id: "sanduiches-x-bacon", nome: "X-Bacon", desc: "+ bacon, alface e tomate", preco: 22 },
      { id: "sanduiches-x-calabresa", nome: "X-Calabresa", desc: "+ calabresa, alface e tomate", preco: 18 },
      { id: "sanduiches-x-frango", nome: "X-Frango", desc: "+ frango, alface e tomate", preco: 18 },
      {
        id: "sanduiches-x-tudo",
        nome: "X-Tudo",
        desc: "Frango, bacon, ovo, calabresa, queijo, presunto, alface e tomate",
        preco: 30,
      },
    ],
  },
  {
    id: "porcoes",
    label: "Porções",
    icon: Beef,
    nota: "Para dividir com a família e os amigos.",
    itens: [
      { id: "porcoes-batata-frita", nome: "Batata frita", desc: "700 g", preco: 38 },
      { id: "porcoes-calabresa", nome: "Calabresa", desc: "500 g", preco: 40 },
      { id: "porcoes-batata-frita-calabresa", nome: "Batata frita + calabresa", desc: "400 g + 500 g", preco: 45 },
      { id: "porcoes-tilapia-milanesa", nome: "Tilápia à milanesa", preco: 50 },
      { id: "porcoes-frango-passarinho", nome: "Frango a passarinho", desc: "1 kg", preco: 40 },
      { id: "porcoes-frango-milanesa", nome: "Frango à milanesa", desc: "500 g", preco: 50 },
      { id: "porcoes-porcao-01", nome: "Porção 01", desc: "Tilápia 300 g + batata frita 400 g", preco: 60 },
      { id: "porcoes-porcao-02", nome: "Porção 02", desc: "Tilápia 500 g + batata frita 700 g", preco: 80 },
      { id: "porcoes-porcao-03", nome: "Porção 03", desc: "Alcatra 300 g + batata frita 400 g", preco: 60 },
      { id: "porcoes-porcao-04", nome: "Porção 04", desc: "Calabresa 300 g + batata frita 400 g", preco: 45 },
      {
        id: "porcoes-porcao-05",
        nome: "Porção 05",
        desc: "Calabresa, batata frita, queijo, bacon e cheddar",
        preco: 65,
      },
      { id: "porcoes-aneis-cebola", nome: "Anéis de cebola", desc: "500 g", preco: 45 },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    icon: UtensilsCrossed,
    nota: "Feitos para compartilhar.",
    itens: [
      {
        id: "combos-combo-01",
        nome: "Combo 01",
        desc: "2 X-Saladas + batata frita 300 g + Coca-Cola 2 L",
        preco: 75,
      },
      {
        id: "combos-combo-02",
        nome: "Combo 02",
        desc: "2 X-Bacon ou 2 X-Calabresa + calabresa 200 g + batata frita + Guaraná 2 L",
        preco: 85,
      },
      {
        id: "combos-combo-03",
        nome: "Combo 03",
        desc: "3 X-Saladas + batata frita 300 g + calabresa 200 g + Coca-Cola 2 L",
        preco: 99,
      },
      {
        id: "combos-combo-04",
        nome: "Combo 04",
        desc: "1 X-Salada + batata frita 100 g + Coca-Cola 120 ml",
        preco: 30,
      },
      { id: "combos-combo-05", nome: "Combo 05", desc: "2 X-Bacon", preco: 40 },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    icon: Beer,
    nota: "Chopp sempre gelado.",
    itens: [
      { id: "bebidas-chopp", nome: "Chopp" },
      { id: "bebidas-refrigerante-lata", nome: "Refrigerante lata" },
      { id: "bebidas-refrigerante-600ml", nome: "Refrigerante 600 ml" },
      { id: "bebidas-refrigerante-1l", nome: "Refrigerante 1 L" },
      { id: "bebidas-agua-mineral", nome: "Água mineral" },
    ],
  },
];
