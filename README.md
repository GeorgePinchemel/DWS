# Sottile Pizzaria — Site Institucional e Delivery

Site estático da **Sottile Pizzaria** (Salvador, BA): páginas institucionais, cardápio interativo, carrinho de pedidos e envio do pedido formatado para WhatsApp.

## Funcionalidades

- **Páginas institucionais:** início, sobre, área de entrega (com mapa), promoções, blog e contato
- **Delivery:** cardápio por categoria (combos, pizzas, calzones, bebidas), customização de pizzas e carrinho lateral
- **Frete por bairro:** cálculo automático conforme o endereço digitado (lista de bairros atendidos em Salvador)
- **Checkout via WhatsApp:** montagem da mensagem do pedido e abertura do chat com a pizzaria
- **Menu mobile:** navegação hambúrguer com suporte a tecla Escape e fechamento ao clicar nos links
- **Badge de funcionamento:** indica se o restaurante está aberto (Ter–Dom, 17h–23h, fuso `America/Bahia`)
- **Botão flutuante WhatsApp** em todas as páginas

## Tecnologias

- HTML5, CSS3 (variáveis CSS, layout responsivo)
- JavaScript vanilla (sem bundler ou framework)
- Google Maps Embed (página de área de entrega)

## Estrutura do projeto

```
DWS/
├── index.html              # Página inicial
├── delivery.html           # Pedidos online
├── sobre.html
├── area-entrega.html
├── promocoes.html
├── blog.html
├── contato.html
├── css/
│   ├── variables.css       # Design tokens (cores, espaçamentos)
│   ├── base.css
│   ├── layout.css          # Header, footer, menu mobile, toast
│   ├── components.css
│   └── pages/
│       ├── home.css
│       └── delivery.css
├── js/
│   ├── delivery.js         # Cardápio, carrinho, frete, WhatsApp
│   ├── nav.js              # Menu mobile compartilhado
│   └── status-badge.js     # Badge aberto/fechado (index)
└── assets/images/          # Logos, fotos do cardápio, favicon
```

## Como executar localmente

Não há dependências npm. Sirva os arquivos com qualquer servidor estático:

**Opção 1 — Python**
```bash
python -m http.server 8080
```
Acesse: http://localhost:8080

**Opção 2 — VS Code / Cursor**  
Extensão **Live Server** → abrir `index.html`.

**Opção 3 — Node (npx)**
```bash
npx serve .
```

## Contato (produção)

| Canal | Valor |
|-------|--------|
| WhatsApp / Pedidos | [+55 71 98671-1646](https://wa.me/5571986711646) |
| E-mail | contato@sottilepizzaria.com.br |
| Endereço | Rua General Labatut, 26 — Barris, Salvador-BA, 40070-100 |

**Horário:** Terça a domingo, 17h às 23h (segunda fechado).

## Fluxo do pedido (delivery)

1. Usuário adiciona itens ao carrinho em `delivery.html`
2. Ao digitar o endereço, o frete é recalculado (`getShippingFee` em `js/delivery.js`)
3. No checkout, valida endereço e forma de pagamento
4. Mensagem é codificada com `encodeURIComponent` e aberta no WhatsApp
5. Carrinho é limpo após envio bem-sucedido

## Licença

Projeto privado — © Sottile Pizzaria. Todos os direitos reservados.
