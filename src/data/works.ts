const works = [
  {
    id: 1,
    url: 'spedisco',
    img: '/work/estoque/dashboard.png',
    logo: '/work/estoque/freelancer2.png',
    title: 'CF Tecnologia',
    subTitle: 'Freelancer',
    description:
      'Responsável pelo desenvolvimento full-stack de uma plataforma de controle de estoque de computadores personalizados. A aplicação permite o cadastro e gerenciamento de produtos, criação e controle de SKUs compostos por múltiplas peças, registro de vendas, controle de quantidade em estoque, e gerenciamento de produtos com defeito (RMA). Inclui autenticação com JWT, controle de permissões e layout responsivo.',
    tags: [
      { name: 'React JS', icon: '/skills/react.svg' },
      { name: 'Tailwind CSS', icon: '/skills/tailwindcss.svg' },
      { name: 'JavaScript', icon: '/skills/javascript.svg' },
      { name: 'C# (.Net)', icon: '/skills/csharp.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
      { name: 'JWT Auth', icon: '/skills/jwt.svg' },
      { name: 'Supabase', icon: '/skills/Supabase.svg' }
    ],
    date: 'Dez 2024 - Mar 2025',
    prints: [
  {
    name: 'Dashboard de Produtos',
    image: '/work/estoque/dashboard.png',
    description: 'Página inicial da plataforma com exibição dos produtos em estoque, incluindo busca, filtros por categoria, botões para alterar categoria e controle de quantidade.'
  },
  {
    name: 'Cadastro de SKU',
    image: '/work/estoque/criar-sku.png',
    description: 'Interface para criar um novo SKU com múltiplos produtos, usando uma estrutura de categorias para permitir montagem dinâmica e reutilização de peças.'
  },
  {
    name: 'Lista de SKUs',
    image: '/work/estoque/skus.png',
    description: 'Lista de SKUs cadastrados com opção de excluir ou dar baixa (venda), exibindo quais peças estão vinculadas.'
  },
  {
    name: 'Registro de Vendas',
    image: '/work/estoque/registro-venda.png',
    description: 'Tela para registrar vendas de SKUs, reduzindo automaticamente o estoque das peças associadas ao SKU vendido.'
  },
  {
    name: 'Controle de RMAs',
    image: '/work/estoque/rma.png',
    description: 'Permite registrar produtos defeituosos vinculados a um SKU vendido, mantendo rastreabilidade para controle de garantia.'
  },
  {
    name: 'Login com JWT',
    image: '/work/estoque/login.png',
    description: 'Tela de login protegida por autenticação JWT, com controle de acesso para usuários autenticados.'
  },
  {
    name: 'Sidebar Responsiva',
    image: '/work/estoque/sidebar.png',
    description: 'Sidebar fixa com navegação entre páginas da plataforma, responsiva e integrada ao layout principal.'
  }
]
  },
]

export default works
