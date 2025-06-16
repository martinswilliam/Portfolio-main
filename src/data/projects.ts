const projects = [
  {
    id: 1,
    url: 'controle-estoque',
    banner: '/projects/controle-estoque/dashboard.png',
    img: '/projects/controle-estoque/estoque-home.png',
    title: 'Controle de estoque',
    type: 'Website',
    icon: '/projects/controle-estoque/estoque-pronto.png',
    github: 'https://github.com/martinswilliam/Controle-estoque',
    web: 'https://projetoestoque-delta.vercel.app/',
    description:
      'Plataforma de controle de estoque de computadores personalizados. A aplicação permite o cadastro e gerenciamento de produtos, criação e controle de SKUs compostos por múltiplas peças, registro de vendas, controle de quantidade em estoque, e gerenciamento de produtos com defeito (RMA). Inclui autenticação com JWT, controle de permissões e layout responsivo.',
    tags: [
      {
        name: '.NET',
        icon: '/skills/dotnet.svg',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'C#',
        icon: '/skills/csharp.svg',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'PostgreSQL',
        icon: '/skills/postgresql.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      },
      {
        name: 'Supabase',
        icon: '/skills/supabase.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      },
      {
        name: 'React',
        icon: '/skills/react.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      },
      
      {
        name: 'JavaScript',
        icon: '/skills/javascript.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      },
      {
        name: 'Tailwindcss',
        icon: '/skills/tailwindcss.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      }


    ],
    print: [
      {
        name: 'Home',
        description:
          'Página inicial da plataforma com exibição dos produtos em estoque, incluindo busca, filtros por categoria, botões para alterar categoria e controle de quantidade.',
        img: '/projects/controle-estoque/controle-estoque-home.png'
      },
      {
        name: 'Cadastro SKU',
        description:
          'Interface para criar um novo SKU com múltiplos produtos, usando uma estrutura de categorias para permitir montagem dinâmica e reutilização de peças.',
        img: '/projects/controle-estoque/criar-sku.png'
      },
      {
        name: 'Lista de SKUs',
        description:
          'Pagina de detalhes de um pokémon, mostrando uma imagem dele, junto com o fundo da cor que foi atribuída pelo seu tipo e o rank que ele pertence dentro da PokeAPI.',
        img: '/projects/controle-estoque/skus.png'
      },
      {
        name: 'Registro de Vendas',
        description:
          'Tela para registrar vendas de SKUs, reduzindo automaticamente o estoque das peças associadas ao SKU vendido.',
        img: '/projects/controle-estoque/registro-venda.png'
      },
      {
        name: 'Controle de RMAs',
        description:
          'Permite registrar produtos defeituosos vinculados a um SKU vendido, mantendo rastreabilidade para controle de garantia',
        img: '/projects/controle-estoque/rma.png'
      },
      {
        name: 'Login com JWT',
        description:
          'Tela de login protegida por autenticação JWT, com controle de acesso para usuários autenticados.',
        img: '/projects/controle-estoque/login.png'
      }
    ],
    status: 'Integração com o mercado livre pendente',
    year: '2025',
    gif: '/projects/controle-estoque/controle-estoque.mp4',
    backgroundImage: '/projects/controle-estoque/controle-estoque-home.png',
    video:
      'https://youtu.be/TKDe1J4keuc'
  }
]

export default projects
