import logo from './logo.png'; // Se o componente estiver no mesmo nível de src/
import icongurias from './icongurias.png'; // Se o componente estiver no mesmo nível de src/
import ciclo from './CICLO.png'; // Se o componente estiver no mesmo nível de src/
import academia from './academia.png'; // Se o componente estiver no mesmo nível de src/

import React, { useState } from 'react';
import { 
  Play, 
  Trophy, 
  Users, 
  Target, 
  BookOpen, 
  Award, 
  CheckCircle, 
  Clock, 
  Star,
  ArrowLeft,
  ArrowRight,
  X,
  User,
  Building,
  Heart,
  Settings,
  Crown,
  Zap,
  Shield,
  Lightbulb,
  TrendingUp,
  Calendar,
  MessageCircle,
  FileText,
  Video,
  Headphones,
  Mail,
  Phone,
  Camera,
  Presentation,
  ClipboardList,
  UserCheck,
  Briefcase,
  Globe,
  Database,
  Code,
  PieChart,
  BarChart3,
  Activity,
  Rocket,
  Brain,
  Eye,
  Handshake,
  Megaphone,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Link,
  Bookmark,
  Flag,
  MapPin,
  Navigation,
  Compass,
  Route,
  Map
} from 'lucide-react';

interface Mission {
  id: number;
  title: string;
  theme: string;
  deliverable: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
  steps: string[];
  tools: string[];
  duration: string;
  difficulty: string;
  skills: string[];
  examples: {
    title: string;
    content: string;
  }[];
}

interface Badge {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  earned: boolean;
  mission?: string;
}

interface KanbanTask {
  id: number;
  title: string;
  points: number;
  status: 'todo' | 'doing' | 'done';
  mission: string;
  priority: 'low' | 'medium' | 'high';
}

interface GameScenario {
  id: number;
  title: string;
  description: string;
  choices: {
    id: string;
    text: string;
    consequence: string;
    points: number;
  }[];
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'presentation' | 'missions' | 'game'>('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [gameAnswers, setGameAnswers] = useState<{[key: number]: string}>({});
  const [gameCompleted, setGameCompleted] = useState(false);

  const missions: Mission[] = [
    {
      id: 1,
      title: "DNA DBA",
      theme: "Cultura, história e propósito",
      deliverable: "Pitch de 1 min: 'Como vou contribuir para o futuro'",
      icon: <Heart className="w-6 h-6" />,
      color: "text-red-600",
      bgColor: "bg-red-50 border-red-200",
      description: "Uma imersão completa na essência da DBAOnline. Nesta missão, os participantes conhecerão os 25 anos de história da empresa, suas conquistas, visão de futuro, valores fundamentais e o que significa, na prática, ser um DBAOnliner. Também abordaremos temas essenciais como o compromisso da DBA com a privacidade de dados e conformidade com a LGPD, reforçando a responsabilidade de cada colaborador na jornada do cliente.",
      duration: "1 dia",
      difficulty: "Iniciante",
      steps: [
        "Boas-vindas oficial (com o CEO ou Strategy Advisor)",
        "História da DBAOnline: trajetória de 25 anos, marcos importantes e conquistas",
        "Visão de futuro: onde queremos chegar e como cada pessoa contribui nessa jornada",
        "Cultura e valores: o que significa ser um DBAOnliner",
        "LGPD e responsabilidade com dados",
        "Dinâmica: Impacto do meu papel na jornada do cliente",
		"Criação e apresentação do pitch pessoal"
      ],
      tools: ["Vídeo institucional", "Timeline interativa com a história da DBA", "Guia de valores da empresa", "Template orientador para construção do pitch", "Introdução à LGPD (vídeo curto e guia prático)"],
      skills: ["Conhecimento organizacional", "Alinhamento cultural", "Comunicação pessoal e institucional", "Consciência sobre privacidade e proteção de dados (LGPD)"],
      examples: [
        {
          title: "Exemplo de Pitch Vencedor",
          content: "Olá! Sou João, novo DBA. Com minha experiência em React e paixão por inovação, vou contribuir criando soluções que conectem nossa tradição de 25 anos com as tecnologias do futuro, sempre priorizando a excelência que nos trouxe até aqui."
        },
        {
          title: "Dinâmica dos Valores",
          content: "Atividade em grupo na qual cada participante escolhe um valor da DBA e compartilha uma experiência pessoal em que esse princípio foi colocado em prática, reforçando a conexão emocional e a autenticidade da cultura da empresa."
        }
      ]
    },
    {
      id: 2,
      title: "Dominar Processos",
      theme: "Estrutura organizacional e áreas",
      deliverable: "Apresentar o fluxo de uma entrega ponta a ponta",
      icon: <Map className="w-6 h-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50 border-blue-200",
      description: "Desenvolver uma compreensão aprofundada da estrutura organizacional e das conexões entre as áreas da empresa, compreendendo como cada uma contribui para a entrega de valor ponta a ponta.",
      duration: "1 dia",
      difficulty: "Intermediário",
      steps: [
        "Tour pelas Áreas: Visão geral da estrutura da empresa e o papel de cada setor.",
        "Conversa com Representantes: Entrevistas rápidas para entender funções, desafios e interações.",
        "Mapeamento de Processos: Desenho dos principais fluxos e conexões entre áreas.",
        "Identificação de Stakeholders: Levantamento dos responsáveis e suas entregas.",
        "Simulação de Fluxo: Exercício prático de uma entrega ponta a ponta.",
        "Apresentação Final: Compartilhamento dos aprendizados e do fluxo construído, com feedback dos líderes."
      ],
      tools: ["Organograma interativo", "Fluxogramas", "Agenda de conversas", "Template de apresentação"],
      skills: ["Visão sistêmica", "Networking interno", "Compreensão de Processos e Comunicação Intersetorial"],
      examples: [
        {
          title: "Fluxo de Desenvolvimento",
          content: "Cliente → Comercial → Análise → Desenvolvimento → QA → Deploy → Suporte. Cada etapa tem responsáveis específicos e critérios de qualidade definidos."
        },
        {
          title: "Job Rotation de 1h",
          content: "Acompanhar profissionais de diferentes áreas durante 1 hora cada, observando rotinas, ferramentas e desafios do dia a dia."
        }
      ]
    },
    {
      id: 3,
      title: "Representar a DBA com Excelência",
      theme: "Postura e comunicação com cliente",
      deliverable: "Simulação de reunião com câmera aberta + e-mail",
      icon: <Users className="w-6 h-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50 border-green-200",
      description: "Desenvolver habilidades de comunicação assertiva, postura profissional e presença digital para garantir um atendimento ao cliente de excelência.",
      duration: "1 dia",
      difficulty: "Intermediário",
      steps: [
        "Workshop: Fundamentos de comunicação clara e empática.",
        "Casos Reais: Análise de atendimentos desafiadores.",
        "Videoconferência: Postura e condução de reuniões online.",
        "Escrita Profissional: Prática de e-mails e mensagens com tom adequado.",
        "Simulação + Feedback: Reunião simulada com avaliação estruturada",
        "Plano de Ação: Reflexão e definição de pontos de melhoria."
      ],
      tools: ["Guia de comunicação", "Templates de e-mail", "Checklist de reunião", "Gravador para autoavaliação"],
      skills: ["Comunicação assertiva e empática", "Postura profissional com clientes", "Escrita clara e eficaz", "Presença digital"],
      examples: [
        {
          title: "Simulação de Reunião",
          content: "Cenário: Cliente insatisfeito com prazo. Objetivo: Ouvir ativamente, propor soluções e manter relacionamento. Avaliação: postura, tom de voz, soluções apresentadas."
        },
        {
          title: "Template de E-mail",
          content: "Estrutura: Saudação personalizada → Contexto claro → Informações objetivas → Próximos passos → Encerramento cordial → Assinatura completa."
        }
      ]
    },
    {
      id: 4,
      title: "Integração Prática na Área",
      theme: "Ferramentas e processos internos",
      deliverable: "Checklist de boas práticas + microtarefas guiadas",
      icon: <Settings className="w-6 h-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50 border-purple-200",
      description: "Desenvolver domínio sobre os sistemas, ferramentas e processos internos essenciais para uma operação eficiente e de alta qualidade.",
      duration: "1 dia",
      difficulty: "Avançado",
      steps: [
        "Setup de Ferramentas: Instalação e configuração inicial dos sistemas.",
        "Treinamento Técnico: Navegação e uso dos sistemas internos e de clientes.",
        "Execução de Processos: Prática dos fluxos operacionais essenciais.",
        "Checklist Pessoal: Criação de uma lista de boas práticas.",
        "Microtarefas Guiadas: Execução prática com supervisão.",
        "Validação Final: Revisão e feedback com mentor ou líder."
      ],
      tools: ["Sistemas internos, operacionais e de clientes", "Documentação técnica", "Modelos de checklists", "Ambiente seguro para prática"],
      skills: ["Domínio técnico das ferramentas", "Organização e atenção aos detalhes", "Execução com qualidade e consistência"],
      examples: [
        {
          title: "Checklist de Deploy (Banco de Dados)",
          content: "✓ Scripts de migração validados e versionados ✓ Backup completo realizado e testado ✓ Integridade dos dados verificada ✓ Ambiente de staging testado com sucesso ✓ Permissões e roles revisadas ✓ Plano de rollback documentado"
        },
        {
          title: "Microtarefa Guiada: Configuração de Banco de Dados Local",
          content: "Instalar e configurar o SGBD (ex: SQL Server, MySQL): 1) Criar base de dados local com estrutura atual 2) Rodar scripts de migração e seed 3) Conectar aplicação ao banco local 4) Validar conexão e executar consultas básicas 5) Documentar configurações e passos no repositório"
        }
      ]
    },
{
  id: 5,
  title: "Consolidação e Futuro",
  theme: "Ferramentas e processos internos",
  deliverable: "Entrega de badge digital + feedback final + escopo e certificação",
   icon: <Rocket className="w-6 h-6" />,  // Ícone foguete
  color: "text-grey-800",            // cinza escuro
    bgColor: "bg-blue-gray-200 border-blue-gray-400",  // fundo e borda azul acinzentado claro
  description: "Compartilhamento de aprendizados, planejamento da jornada e alinhamento com gestor para garantir visão de crescimento e próximos passos.",
  duration: "1 dia",
  difficulty: "Avançado",
  steps: [
    "Compartilhamento de Aprendizados: Discussão e troca de experiências entre novos colaboradores.",
    "Dinâmica de Case Prático: Resolução colaborativa de um case para aplicar conhecimentos.",
    "Conversa com Gestor/Diretor: Alinhamento sobre visão de crescimento e trajetórias futuras.",
    "Entrega de Badge Digital: Reconhecimento da conclusão da Imersão DBA360 na Feedz.",
    "Feedback Final: Aplicação do NPS para avaliar a experiência do onboarding.",
    "Recebimento do Escopo e Certificação: Documento comprovando participação e conhecimento dos conteúdos abordados."
  ],
  tools: [
    "Plataforma Feedz para badge digital",
    "Material da Imersão DBA360",
    "Ferramentas para comunicação e feedback",
    "Documentação de escopo e certificação"
  ],
  skills: [
    "Capacidade de refletir e compartilhar aprendizados",
    "Planejamento de carreira e definição de objetivos",
    "Comunicação efetiva com gestores",
    "Avaliação crítica de processos e experiências"
  ],
  examples: [
    {
      title: "Feedback NPS Onboarding",
      content: "Coleta de opiniões para medir satisfação e identificar pontos de melhoria na experiência de integração."
    },
    {
      title: "Missão: Planejar Minha Jornada",
      content: "Elaboração de um plano pessoal com metas de aprendizado, desenvolvimento e carreira para os próximos meses."
    }
  ]
}

	,
    {
      id: 6,
      title: "Liderança Situacional",
      theme: "Para promovidos ou líderes",
      deliverable: "Plano de primeiros 30 dias + role-play",
      icon: <Crown className="w-6 h-6" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 border-yellow-200",
      description: "Desenvolvimento de competências de liderança adaptadas ao contexto e situações específicas.",
      duration: "30 dias",
      difficulty: "Avançado",
      steps: [
        "Assessment de estilo de liderança",
        "Workshop de liderança situacional",
        "Análise do time atual",
        "Elaboração do plano 30-60-90",
        "Role-play de situações desafiadoras",
        "Mentoria com líder sênior"
      ],
      tools: ["Assessment de liderança", "Template de plano", "Cenários de role-play", "Guia de feedback"],
      skills: ["Liderança adaptativa", "Gestão de pessoas", "Planejamento estratégico"],
      examples: [
        {
          title: "Plano dos Primeiros 30 Dias",
          content: "Semana 1: Conhecer o time individualmente. Semana 2: Mapear processos atuais. Semana 3: Identificar oportunidades. Semana 4: Definir metas e comunicar visão."
        },
        {
          title: "Role-play: Conflito no Time",
          content: "Situação: Dois desenvolvedores discordam sobre arquitetura. Objetivo: Mediar conflito, encontrar solução técnica e manter harmonia do time."
        }
      ]
    }
  ];

  const badges: Badge[] = [
    { id: 1, name: "DNA Explorer", description: "Completou a missão DNA DBA", icon: <Heart className="w-4 h-4" />, color: "text-red-500", earned: true, mission: "DNA DBA" },
    { id: 2, name: "Navigator", description: "Mapeou toda a estrutura organizacional", icon: <Compass className="w-4 h-4" />, color: "text-blue-500", earned: true, mission: "Mapa Vivo" },
    { id: 3, name: "Client Champion", description: "Dominou a comunicação com clientes", icon: <Users className="w-4 h-4" />, color: "text-green-500", earned: false, mission: "Cliente no Centro" },
    { id: 4, name: "Excellence Master", description: "Operação com excelência conquistada", icon: <Settings className="w-4 h-4" />, color: "text-purple-500", earned: false, mission: "Operar com Excelência" },
    { id: 5, name: "Leader", description: "Desenvolveu liderança situacional", icon: <Crown className="w-4 h-4" />, color: "text-yellow-500", earned: false, mission: "Liderança Situacional" },
    { id: 6, name: "Game Master", description: "Completou todos os cenários do jogo", icon: <Trophy className="w-4 h-4" />, color: "text-orange-500", earned: false }
  ];

  const kanbanTasks: KanbanTask[] = [
    { id: 1, title: "Assistir vídeo institucional", points: 10, status: 'done', mission: "DNA DBA", priority: 'high' },
    { id: 2, title: "Preparar pitch pessoal", points: 20, status: 'doing', mission: "DNA DBA", priority: 'high' },
    { id: 3, title: "Tour pelas áreas", points: 15, status: 'todo', mission: "Mapa Vivo", priority: 'medium' },
    { id: 4, title: "Simulação de reunião", points: 25, status: 'todo', mission: "Cliente no Centro", priority: 'high' },
    { id: 5, title: "Setup de ferramentas", points: 15, status: 'todo', mission: "Operar com Excelência", priority: 'medium' },
    { id: 6, title: "Role-play de liderança", points: 30, status: 'todo', mission: "Liderança Situacional", priority: 'low' }
  ];

  const gameScenarios: GameScenario[] = [
    {
      id: 1,
      title: "Liderança Proativa",
      description: "Você percebe que a motivação da equipe caiu. O que você faz?",
      choices: [
        { id: 'A', text: 'Espera os próximos resultados para avaliar melhor a situação', consequence: 'A queda de desempenho se agrava e a equipe sente falta de apoio da liderança.', points: 30 },
        { id: 'B', text: 'Chama a equipe para uma conversa aberta sobre clima e desafios', consequence: 'A escuta ativa fortalece o engajamento. A equipe se sente valorizada e mais alinhada.', points: 100 },
        { id: 'C', text: 'Aponta imediatamente quem parece estar menos engajado', consequence: 'A atitude gera defensividade e tensão no time, dificultando a confiança.', points: 60 }
      ]
    },
    {
      id: 2,
      title: "Gestão de Desempenho",
      description: "Colaborador segue com baixa performance.",
      choices: [
        { id: 'A', text: 'Marca uma reunião formal com plano de ação e acompanhamento', consequence: 'O colaborador entende as expectativas e tem clareza sobre o que precisa melhorar. Gera resultados.', points: 100 },
        { id: 'B', text: 'Aguarda mais tempo e continua monitorando', consequence: 'A situação se prolonga, sobrecarregando a equipe e comprometendo resultados..', points: 30 },
        { id: 'C', text: 'Redistribui as tarefas para outros colegas', consequence: 'Alivia o impacto imediato, mas não resolve a causa. A equipe pode perceber como injusto.', points: 60 }
      ]
    },
    {
      id: 3,
      title: "Tomada de Decisão sob Pressão",
      description: "Cliente exige entrega, mas equipe está esgotada.",
      choices: [
        { id: 'A', text: 'Decide entregar o que está pronto sem alinhar com ninguém', consequence: 'A ação unilateral gera confusão e quebra de alinhamento com o time e o cliente.', points: 30 },
        { id: 'B', text: 'Pressiona a equipe para entregar mesmo que incompleto', consequence: 'A qualidade cai, a equipe se frustra e o cliente não fica satisfeito.', points: 60 },
        { id: 'C', text: 'Negocia novo prazo com o cliente com transparência', consequence: 'A postura transparente preserva a confiança do cliente e o bem-estar da equipe.', points: 100 }
      ]
    },
    {
      id: 4,
      title: "Conflito entre Membros do Time",
      description: "Conflito afeta o projeto.",
      choices: [
        { id: 'A', text: 'Alinha com cada um individualmente, sem expor o conflito', consequence: 'Pode aliviar a tensão, mas o problema não é resolvido na raiz.', points: 60 },
        { id: 'B', text: 'Promove conversa conjunta com foco em soluções', consequence: 'O conflito é resolvido com maturidade e o ambiente de trabalho melhora.', points: 100 },
        { id: 'C', text: 'Escolhe um dos lados para evitar desgaste', consequence: 'Gera favoritismo e mina a confiança no líder.', points: 30 }
      ]
    },
    {
      id: 5,
      title: "Delegação de Tarefas",
      description: "Você está sobrecarregado.",
      choices: [
        { id: 'A', text: 'Continua acumulando tarefas críticas', consequence: 'A sobrecarga compromete sua visão estratégica e pode afetar a saúde mental.', points: 30 },
        { id: 'B', text: 'Identifica oportunidades de desenvolvimento e delega com orientação', consequence: 'A equipe cresce em autonomia, e você ganha mais tempo para focar no estratégico.', points: 100 },
        { id: 'C', text: 'Pede ajuda apenas quando está no limite', consequence: 'Alívio momentâneo, mas sem gerar aprendizado ou engajamento no time.', points: 60 }
      ]
    },
    {
      id: 6,
      title: "Reconhecimento e Engajamento",
      description: "Falta de reconhecimento na equipe.",
      choices: [
        { id: 'A', text: 'Cria momentos de reconhecimento e feedbacks frequentes', consequence: 'A motivação aumenta, e o clima da equipe melhora significativamente.', points: 100 },
        { id: 'B', text: 'Dá um bônus simbólico e volta ao trabalho', consequence: 'A ação tem efeito pontual, mas falta consistência para engajar de verdade.', points: 60 },
        { id: 'C', text: 'Espera os resultados melhorarem para então reconhecer', consequence: 'A equipe se sente desvalorizada e pode perder motivação.', points: 30 }
      ]
    },
    {
      id: 7,
      title: "Desenvolvimento da Equipe",
      description: "Colaborador mostra potencial, mas comete erros.",
      choices: [
        { id: 'A', text: 'Espera ele estar 100% pronto', consequence: 'Você perde oportunidade de desenvolver alguém proativo e engajado.', points: 60 },
        { id: 'B', text: 'Transfere tarefas importantes diretamente como teste', consequence: 'O colaborador se sente pressionado, erra mais e perde confiança.', points: 30 },
        { id: 'C', text: 'Dá desafios progressivos com acompanhamento', consequence: 'O colaborador cresce com segurança e começa a gerar mais valor para o time.', points: 100 }
      ]
    },
    {
      id: 8,
      title: "Alinhamento Estratégico",
      description: "Ideia criativa, mas fora da estratégia.",
      choices: [
        { id: 'A', text: 'Implementa para mostrar abertura à inovação', consequence: 'O cliente questiona a mudança. A ideia foi boa, mas faltou alinhamento.', points: 30 },
        { id: 'B', text: 'Ajusta com o time para alinhar à estratégia', consequence: 'A inovação é aproveitada com responsabilidade, e o time aprende junto.', points: 100 },
        { id: 'C', text: 'Rejeita por não seguir o planejamento', consequence: 'O time pode se sentir desmotivado, mas a estratégia é mantida.', points: 60 }
      ]
    }
  ];

  const slides = [
    {
      title: "📝 Justificativa",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            A DBAOnline, com 25 anos de trajetória e um time de mais de 75 DBAOnliner's, vive um momento de expansão e transformação. Embora já exista um processo de onboarding, ele ainda é parcial, com ações pontuais e sem padronização entre áreas. Hoje, o modelo é pouco estruturado, predominantemente reativo, e não assegura uma integração completa dos novos talentos à cultura, processos e expectativas da organização.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-red-800 mb-2">Problemas Identificados</h4>
              <ul className="text-red-700 space-y-1 text-sm">
                <li>• Retrabalho e desalinhamento entre áreas.</li>
                <li>• Postura inadequada diante de clientes.</li>
                <li>• Falta de clareza sobre processos, papéis e expectativas.</li>
                <li>• Desencontro de comunicação.</li>
				<li>• Despreparo de líderes em comunicação e papel como embaixadores da cultura..</li>
				<li>• Falta de apoio contínuo da gestão aos líderes.</li>
				<li>• Baixa consciência sobre o impacto do próprio trabalho nos resultados da empresa.</li>


              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-2">Impactos Organizacionais</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Queda na performance e no engajamento de novos colaboradores desde o início da jornada.</li>
                <li>• Integração limitada entre áreas, dificultando a colaboração e alinhamento de expectativas.</li>
                <li>• Prejuízos na experiência do cliente, devido à falta de preparo e uniformidade no atendimento.</li>
                <li>• Fragilidade na consolidação da cultura organizacional, dificultando a construção de uma identidade forte e coesa.</li>

              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <p className="text-center font-medium">
              Estruturar o onboarding é garantir produtividade, retenção de talentos, excelência operacional e consistência cultural.
            </p>
          </div>
        </div>
      )
    },
{
  title: "🚀 A Solução: A360",
  content: (
    <div className="space-y-6">
      <div className="text-justify">          
        <p className="text-lg text-gray-600">
          Transformar o onboarding da DBAOnline em uma jornada estratégica, imersiva e gamificada, que acelere a integração de novos talentos, promova o alinhamento cultural entre as áreas e desenvolva competências práticas desde o primeiro dia.
     
          <span className="font-bold text-black-600"> O onboarding 360 é inclusivo, colaborativo e feito para todos!</span>
        </p>
      </div>
      
      
          <img
            src={ciclo}
            alt="ciclo"
           className="w-90 h-auto mx-auto mb-4 rounded-lg"
          />
       <p className="text-lg text-gray-600"> Mais do que um onboarding, queremos criar uma experiência de entrada que já reflita quem somos, para onde vamos e o que esperamos de quem constrói esse caminho com a gente. Esse projeto é uma ponte estratégica para sustentar o crescimento, alinhamento cultural e excelência operacional da DBAOnline.
	   </p>
    </div>
  )
}

,
{
  title: "🚀 A Solução: A360",
  content: (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Uma jornada de integração gamificada e adaptável</h3>
        <p className="text-lg text-gray-600">
          O novo colaborador vivencia estações temáticas que unem missões, sprints ágeis, tecnologia, cultura e prática real, criando uma experiência imersiva desde o primeiro dia.
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
        <h4 className="font-bold text-xl mb-3 text-center">Como a solução resolve o problema?</h4>
        <div className="grid grid-cols-1 gap-4 text-sm">
          <li><span className="font-semibold">Clareza de papéis</span> e entregas definidas desde o início.</li>
          <li><span className="font-semibold">Feedback contínuo</span> entre colaboradores, líderes e gestores.</li>
          <li><span className="font-semibold">Líderes preparados</span> para posturas assertivas, comunicação clara e alinhamento cultural.</li>
          <li><span className="font-semibold">Ciclo de alinhamento</span> em cascata: Diretores → Gestores → Líderes → Times.</li>
          <li><span className="font-semibold">Colaboradores cientes</span> do impacto do seu trabalho no resultado da empresa.</li>
          <li><span className="font-semibold">Engajamento gamificado</span> via Feedz para acompanhamento e reconhecimento constante.</li>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <h4 className="font-bold text-gray-800 mb-2">Duração</h4>
          <p className="text-gray-600">5 dias úteis</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
          <Globe className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h4 className="font-bold text-gray-800 mb-2">Modalidade</h4>
          <p className="text-gray-600">Híbrido ou 100% digital</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
          <Zap className="w-12 h-12 text-purple-600 mx-auto mb-3" />
          <h4 className="font-bold text-gray-800 mb-2">Abordagem</h4>
          <p className="text-gray-600">Microlearning + Missões + Feedbacks</p>
        </div>
      </div>
    </div>
  )
}
,
    {
      title: "🎯 As 6 Missões da Imersão A360",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Cada missão tem objetivos específicos, ferramentas e entregáveis únicos</h3>
       
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {missions.map((mission) => (
              <div
                key={mission.id}
                onClick={() => setSelectedMission(mission)}
                className={`${mission.bgColor} p-6 rounded-lg border-2 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center mb-3">
                  <div className={`${mission.color} mr-3`}>
                    {mission.icon}
                  </div>
                  <h4 className="font-bold text-gray-800">{mission.title}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{mission.theme}</p>
                <div className="text-xs text-gray-500">
                  <p><strong>Entregável:</strong> {mission.deliverable}</p>
                  <p className="mt-1"><strong>Duração:</strong> {mission.duration}</p>
                </div>
              </div>
            ))}
          </div>        
        </div>
      )
    },
    {
      title: "💡 Diferenciais Inovadores",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Cada diferencial tem implementação específica e resultados mensuráveis</h3>
            <p className="text-gray-600">Clique nos elementos para ver exemplos práticos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              onClick={() => setSelectedModal('kanban')}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <ClipboardList className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="font-bold text-blue-800">Kanban de Progresso Personalizado</h4>
              </div>
              <p className="text-blue-700 text-sm mb-3">
                Cada colaborador acessa seu quadro digital com as etapas da trilha, marcos concluídos e próximos desafios.
              </p>
              <div className="text-xs text-blue-600 font-medium">
                Clique para ver exemplo →
              </div>
            </div>

            <div 
              onClick={() => setSelectedModal('badges')}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-purple-600 mr-3" />
                <h4 className="font-bold text-purple-800">Sistema de Gamificação</h4>
              </div>
              <p className="text-purple-700 text-sm mb-3">
                Pontuação por entrega, badges por missão concluída e ranking colaborativo.
              </p>
              <div className="text-xs text-purple-600 font-medium">
                Clique para ver badges →
              </div>
            </div>

            <div 
              onClick={() => setSelectedModal('video')}
              className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Video className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="font-bold text-green-800">Vídeo Boas-Vindas com Liderança</h4>
              </div>
              <p className="text-green-700 text-sm mb-3">
                Mensagem personalizada da diretoria reforçando legado, futuro e valorização das pessoas.
              </p>
              <div className="text-xs text-green-600 font-medium">
                Clique para ver roteiro →
              </div>
            </div>

            <div 
              onClick={() => setSelectedModal('mentorship')}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-orange-600 mr-3" />
                <h4 className="font-bold text-orange-800">Match de Par ou Mentor</h4>
              </div>
              <p className="text-orange-700 text-sm mb-3">
                Acompanhamento personalizado nos primeiros 15 dias com reuniões 1:1 estruturadas.
              </p>
              <div className="text-xs text-orange-600 font-medium">
                Clique para ver processo →
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
            <h4 className="font-bold text-xl mb-4 text-center">📈 Indicadores de Sucesso</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-semibold mb-2">Problemas Atuais:</h5>
                <ul className="space-y-1 opacity-90">
                  <li>• Alta curva de aprendizado</li>
                  <li>• Falta de entendimento da cultura</li>
                  <li>• Comunicação desalinhada</li>
                  <li>• Líderes despreparados</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Soluções da Imersão:</h5>
                <ul className="space-y-1 opacity-90">
                  <li>• Microtarefas guiadas</li>
                  <li>• Missão DNA + pitch pessoal</li>
                  <li>• Simulação com feedback</li>
                  <li>• Sprint de liderança</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🔮 Pensando no Futuro",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Escalabilidade e Visão de Longo Prazo</h3>
            <p className="text-lg text-gray-600">
              Com a expansão da empresa, o onboarding será a chave para <span className="font-bold text-black-600">escalar com consistência</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
              <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">Replicação Ágil</h4>
              <p className="text-blue-700 text-sm">
                Processo pode ser replicado rapidamente para diferentes cargos e níveis hierárquicos.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
              <Filter className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Trilhas Específicas</h4>
              <p className="text-green-700 text-sm">
                Adaptação para trilhas específicas: Desenvolvedores, Comercial, Liderança, etc.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
              <Brain className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-purple-800 mb-2">Academia Corporativa</h4>
              <p className="text-purple-700 text-sm">
                Base para futura Academia Corporativa com educação continuada.
              </p>
            </div>
          </div>

         <div className="bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 p-8 rounded-lg">
            <h4 className="font-bold text-xl mb-4 text-center">💡 Pitch do Projeto</h4>
            <blockquote className="text-lg italic text-center leading-relaxed">
              "Após 25 anos de trajetória, chegou o momento de assegurar que cada pessoa que se junta a nós compreenda a base sólida que construímos e a visão de futuro que seguimos. A Imersão A360 conecta nosso legado à nossa ambição de crescimento, promovendo integração genuína, clareza de propósito e atitude desde o primeiro dia."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-3">Benefícios Imediatos</h4>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>✓ Redução do tempo de adaptação</li>
                <li>✓ Maior alinhamento cultural</li>
                <li>✓ Melhoria na comunicação</li>
                <li>✓ Líderes mais preparados</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3">Impacto de Longo Prazo</h4>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>✓ Cultura organizacional fortalecida</li>
                <li>✓ Escalabilidade do crescimento</li>
                <li>✓ Redução de turnover</li>
                <li>✓ Excelência operacional</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const startGame = () => {
    setGameStarted(true);
    setCurrentScenario(0);
    setGameAnswers({});
    setGameCompleted(false);
  };
  
  const handleAnswer = (scenarioId: number, choiceId: string) => {
    setGameAnswers(prev => ({ ...prev, [scenarioId]: choiceId }));
  };

  const handleNextQuestion = () => {
    if (currentScenario < gameScenarios.length - 1) {
      setCurrentScenario(prev => prev + 1);
    } else {
      setGameCompleted(true);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.entries(gameAnswers).forEach(([scenarioId, choiceId]) => {
      const scenario = gameScenarios.find(s => s.id === parseInt(scenarioId));
      const choice = scenario?.choices.find(c => c.id === choiceId);
      if (choice) {
        totalScore += choice.points;
      }
    });
    return totalScore;
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentScenario(0);
    setGameAnswers({});
    setGameCompleted(false);
  };

  const renderModal = () => {
    if (!selectedModal) return null;

    const modalContent = {
      kanban: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 Kanban de Progresso Personalizado</h3>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Como Funciona</h4>
            <p className="text-blue-700 text-sm">
              Cada colaborador tem acesso a um quadro digital personalizado que acompanha seu progresso através das 6 missões. 
              O sistema utiliza metodologia Kanban adaptada para onboarding, com três colunas principais e sistema de pontuação.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Para Fazer
              </h4>
              {kanbanTasks.filter(task => task.status === 'todo').map(task => (
                <div key={task.id} className="bg-white p-3 rounded border mb-2">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium">{task.title}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      task.priority === 'high' ? 'bg-red-100 text-red-600' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{task.mission}</div>
                  <div className="text-xs text-blue-600 font-medium">{task.points} pontos</div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 mb-3 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Fazendo
              </h4>
              {kanbanTasks.filter(task => task.status === 'doing').map(task => (
                <div key={task.id} className="bg-white p-3 rounded border mb-2 border-l-4 border-yellow-400">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium">{task.title}</span>
                    <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
                      {task.priority}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{task.mission}</div>
                  <div className="text-xs text-blue-600 font-medium">{task.points} pontos</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-yellow-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Concluído
              </h4>
              {kanbanTasks.filter(task => task.status === 'done').map(task => (
                <div key={task.id} className="bg-white p-3 rounded border mb-2 border-l-4 border-green-400">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium">{task.title}</span>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{task.mission}</div>
                  <div className="text-xs text-green-600 font-medium">+{task.points} pontos</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Funcionalidades do Sistema</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p>✓ Sincronização em tempo real</p>
                <p>✓ Notificações de progresso</p>
                <p>✓ Sistema de pontuação</p>
              </div>
              <div>
                <p>✓ Feedback automático</p>
                <p>✓ Relatórios de desempenho</p>
                <p>✓ Integração com mentores</p>
              </div>
            </div>
          </div>
        </div>
      ),
      badges: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Sistema de Badges e Gamificação</h3>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-purple-800 mb-2">Mecânica de Gamificação</h4>
            <p className="text-purple-700 text-sm">
              Sistema de recompensas progressivo que reconhece conquistas e motiva o engajamento. 
              Cada badge representa uma competência desenvolvida e contribui para o ranking colaborativo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {badges.map(badge => (
              <div key={badge.id} className={`p-4 rounded-lg border-2 ${
                badge.earned 
                  ? 'bg-white border-gray-200 shadow-md' 
                  : 'bg-gray-50 border-gray-100 opacity-60'
              }`}>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    badge.earned 
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {badge.icon}
                  </div>
                  <h4 className={`font-bold mb-1 ${badge.earned ? 'text-gray-800' : 'text-gray-400'}`}>
                    {badge.name}
                  </h4>
                  <p className={`text-xs mb-2 ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                    {badge.description}
                  </p>
                  {badge.mission && (
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      badge.earned 
                        ? `${badge.color} bg-opacity-10` 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {badge.mission}
                    </span>
                  )}
                  {badge.earned && (
                    <div className="mt-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Sistema de Pontuação</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <p>• <strong>Tarefas básicas:</strong> 10-20 pontos</p>
                <p>• <strong>Entregáveis:</strong> 25-50 pontos</p>
                <p>• <strong>Apresentações:</strong> 30-60 pontos</p>
                <p>• <strong>Missão completa:</strong> 100 pontos</p>
                <p>• <strong>Jogo interativo:</strong> 0-100 pontos</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">Ranking Colaborativo</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p>• <strong>Foco na colaboração</strong>, não competição</p>
                <p>• <strong>Reconhecimento público</strong> das conquistas</p>
                <p>• <strong>Mentoria entre pares</strong> incentivada</p>
                <p>• <strong>Celebração coletiva</strong> dos marcos</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-center">🎯 Benefícios Comprovados</h4>
            <div className="grid grid-cols-3 gap-4 text-sm text-center">
              <div>
                <p className="font-semibold">+40%</p>
                <p>Engajamento</p>
              </div>
              <div>
                <p className="font-semibold">+60%</p>
                <p>Retenção</p>
              </div>
              <div>
                <p className="font-semibold">-50%</p>
                <p>Tempo de Adaptação</p>
              </div>
            </div>
          </div>
        </div>
      ),
      video: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🎥 Vídeo de Boas-Vindas com Liderança</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-green-800 mb-2">Objetivo do Vídeo</h4>
            <p className="text-green-700 text-sm">
              Mensagem personalizada e autêntica da diretoria que conecta emocionalmente o novo colaborador 
              com a história, valores e futuro da DBA, criando senso de pertencimento desde o primeiro dia.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Vídeo de Boas-Vindas A360</h4>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm">REC</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded p-4 mb-4 h-48 flex items-center justify-center">
              <div className="text-center">
                <Video className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-400">Vídeo de Boas-Vindas</p>
                <p className="text-sm text-gray-500">Duração: 3-5 minutos</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>00:00</span>
              <div className="flex-1 mx-4 bg-gray-700 h-1 rounded">
                <div className="bg-blue-500 h-1 rounded w-0"></div>
              </div>
              <span>05:00</span>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4">📝 Roteiro Detalhado</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h5 className="font-medium text-blue-800">Abertura (0:00 - 0:30)</h5>
                <p className="text-sm text-gray-600">
                  "Olá [Nome]! Sou [Nome do Diretor], e em nome de toda a liderança da DBA, 
                  quero te dar as boas-vindas à nossa família. Hoje marca o início de uma jornada especial..."
                </p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h5 className="font-medium text-green-800">Nossa História (0:30 - 2:00)</h5>
                <p className="text-sm text-gray-600">
                  "Há 25 anos, começamos com um sonho simples: transformar ideias em soluções que fazem a diferença. 
                  Hoje, somos 80 pessoas unidas pelo mesmo propósito..."
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h5 className="font-medium text-purple-800">Valores e Cultura (2:00 - 3:30)</h5>
                <p className="text-sm text-gray-600">
                  "Nossa cultura se baseia em três pilares: excelência técnica, relacionamento humano e inovação constante. 
                  Você foi escolhido porque acreditamos que compartilha desses valores..."
                </p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <h5 className="font-medium text-orange-800">Futuro Juntos (3:30 - 5:00)</h5>
                <p className="text-sm text-gray-600">
                  "O futuro que construiremos juntos é brilhante. Sua experiência, somada ao nosso legado, 
                  criará soluções que ainda nem imaginamos. Bem-vindo à DBA!"
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Elementos Técnicos</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <p>• <strong>Qualidade:</strong> Full HD (1080p)</p>
                <p>• <strong>Duração:</strong> 3-5 minutos</p>
                <p>• <strong>Formato:</strong> MP4 otimizado</p>
                <p>• <strong>Legendas:</strong> Português disponível</p>
                <p>• <strong>Personalização:</strong> Nome do colaborador</p>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-3">Impacto Esperado</h4>
              <div className="space-y-2 text-sm text-orange-700">
                <p>• <strong>Conexão emocional</strong> imediata</p>
                <p>• <strong>Senso de pertencimento</strong> fortalecido</p>
                <p>• <strong>Clareza sobre propósito</strong> e valores</p>
                <p>• <strong>Motivação inicial</strong> elevada</p>
                <p>• <strong>Redução da ansiedade</strong> do primeiro dia</p>
              </div>
            </div>
          </div>
        </div>
      ),
      mentorship: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🤝 Programa de Mentoria e Match de Par</h3>
          
          <div className="bg-orange-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-orange-800 mb-2">Filosofia do Programa</h4>
            <p className="text-orange-700 text-sm">
              Cada novo colaborador é pareado com um mentor experiente que o acompanha nos primeiros 15 dias, 
              garantindo integração suave, esclarecimento de dúvidas e construção de relacionamentos sólidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <UserCheck className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-blue-800 mb-2">Seleção do Mentor</h4>
              <p className="text-blue-700 text-sm">
                Matching baseado em perfil técnico, personalidade e disponibilidade
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Cronograma Estruturado</h4>
              <p className="text-green-700 text-sm">
                15 dias de acompanhamento com reuniões 1:1 programadas
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-purple-800 mb-2">Acompanhamento</h4>
              <p className="text-purple-700 text-sm">
                Métricas de progresso e feedback contínuo para ambas as partes
              </p>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4">📅 Cronograma dos 15 Dias</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-800">Dias 1-3: Apresentação e Ambientação</h5>
                  <p className="text-sm text-gray-600">Reunião inicial de 1h, tour pela empresa, apresentação da equipe</p>
                  <div className="text-xs text-blue-600 mt-1">📍 Reunião presencial obrigatória</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-800">Dias 4-7: Acompanhamento das Missões</h5>
                  <p className="text-sm text-gray-600">Check-ins diários de 15min, suporte nas atividades, esclarecimento de dúvidas</p>
                  <div className="text-xs text-green-600 mt-1">💬 Comunicação via Teams</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-800">Dias 8-12: Integração Prática</h5>
                  <p className="text-sm text-gray-600">Participação em reuniões, projetos reais, networking interno</p>
                  <div className="text-xs text-purple-600 mt-1">🤝 Foco em relacionamentos</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-800">Dias 13-15: Avaliação e Transição</h5>
                  <p className="text-sm text-gray-600">Feedback final, avaliação do progresso, plano de continuidade</p>
                  <div className="text-xs text-orange-600 mt-1">📊 Relatório de conclusão</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">🛠️ Ferramentas de Apoio</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• <strong>Guia do Mentor:</strong> Roteiro estruturado</p>
                <p>• <strong>Templates:</strong> Reuniões e relatórios</p>
                <p>• <strong>Checklist:</strong> Marcos de progresso</p>
                <p>• <strong>Canal dedicado:</strong> Comunicação direta</p>
                <p>• <strong>Dashboard:</strong> Acompanhamento visual</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">📈 Resultados Esperados</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p>• <strong>95%</strong> de satisfação dos mentorados</p>
                <p>• <strong>-60%</strong> tempo de adaptação</p>
                <p>• <strong>+80%</strong> retenção no primeiro ano</p>
                <p>• <strong>+40%</strong> engajamento inicial</p>
                <p>• <strong>100%</strong> conclusão do onboarding</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-center">🎯 Critérios de Sucesso</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Para o Mentorado:</strong></p>
                <p>✓ Integração completa à equipe</p>
                <p>✓ Compreensão da cultura</p>
                <p>✓ Rede de contatos estabelecida</p>
              </div>
              <div>
                <p><strong>Para o Mentor:</strong></p>
                <p>✓ Desenvolvimento de liderança</p>
                <p>✓ Reconhecimento interno</p>
                <p>✓ Contribuição para cultura</p>
              </div>
            </div>
          </div>
        </div>
      )
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div></div>
              <button
                onClick={() => setSelectedModal(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {modalContent[selectedModal as keyof typeof modalContent]}
          </div>
        </div>
      </div>
    );
  };

  const renderMissionModal = () => {
    if (!selectedMission) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className={`${selectedMission.color} mr-3`}>
                  {selectedMission.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedMission.title}</h3>
              </div>
              <button
                onClick={() => setSelectedMission(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className={`${selectedMission.bgColor} p-4 rounded-lg mb-6`}>
              <h4 className="font-semibold text-gray-800 mb-2">{selectedMission.theme}</h4>
              <p className="text-gray-700 text-sm mb-3">{selectedMission.description}</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium">Duração:</span> {selectedMission.duration}
                </div>
                <div>
                  <span className="font-medium">Dificuldade:</span> {selectedMission.difficulty}
                </div>
                <div>
                  <span className="font-medium">Entregável:</span> {selectedMission.deliverable}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <ClipboardList className="w-4 h-4 mr-2" />
                  Etapas da Missão
                </h4>
                <ol className="space-y-2 text-sm text-blue-700">
                  {selectedMission.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Ferramentas Utilizadas
                </h4>
                <ul className="space-y-2 text-sm text-green-700">
                  {selectedMission.tools.map((tool, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Competências Desenvolvidas
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedMission.skills.map((skill, index) => (
                  <span key={index} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Lightbulb className="w-4 h-4 mr-2" />
                Exemplos Práticos
              </h4>
              {selectedMission.examples.map((example, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                  <h5 className="font-medium text-gray-800 mb-2">{example.title}</h5>
                  <p className="text-gray-700 text-sm">{example.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (currentView === 'presentation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {renderModal()}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setCurrentView('home')}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Início
            </button>
            <div className="flex items-center space-x-2">
              <img 
                //src="https://monitores.dbaonline.com.br:3000/public/img/grafana_icon.svg" 
                src={logo} 
                alt="DBA360 Logo" 
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold text-gray-800">Apresentação</h1>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">{slides[currentSlide].title}</h2>
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="min-h-[500px]">
              {slides[currentSlide].content}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Anterior
            </button>
            
            <span className="text-gray-600">
              {currentSlide + 1} de {slides.length}
            </span>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Próximo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'missions') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {renderMissionModal()}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setCurrentView('home')}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Início
            </button>
            <div className="flex items-center space-x-2">
              <img 
                //src="https://monitores.dbaonline.com.br:3000/public/img/grafana_icon.svg" 
                src={logo} 
                alt="DBA360 Logo" 
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold text-gray-800">Missões</h1>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 As 6 Missões da Imersão A360</h2>
            <p className="text-lg text-gray-600">Clique em cada missão para explorar detalhes, etapas e exemplos práticos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {missions.map((mission) => (
              <div
                key={mission.id}
                onClick={() => setSelectedMission(mission)}
                className={`${mission.bgColor} p-6 rounded-lg border-2 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 transform`}
              >
                <div className="flex items-center mb-4">
                  <div className={`${mission.color} mr-3`}>
                    {mission.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">{mission.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{mission.theme}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duração:</span>
                    <span className="font-medium">{mission.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dificuldade:</span>
                    <span className="font-medium">{mission.difficulty}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white bg-opacity-50 rounded">
                  <p className="text-xs text-gray-600 font-medium">Entregável:</p>
                  <p className="text-sm text-gray-700">{mission.deliverable}</p>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs text-blue-600 font-medium">Clique para ver detalhes →</span>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </div>
    );
  }

  if (currentView === 'game') {
    if (!gameStarted) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setCurrentView('home')}
                className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar ao Início
              </button>
              <div className="flex items-center space-x-2">
                <img 
                  //src="https://monitores.dbaonline.com.br:3000/public/img/grafana_icon.svg" 
                  src={logo} 
                  alt="DBA360 Logo" 
                  className="w-8 h-8"
                />
                <h1 className="text-2xl font-bold text-gray-800">Jogo Interativo</h1>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 Jogo de Cenários A360</h2>
                  <p className="text-lg text-gray-600">
                    Teste suas habilidades em situações reais do ambiente de trabalho
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3 text-left">📋 Como Funciona</h3>
                    <ul className="text-sm text-blue-700 space-y-2 text-left">
                      <li>• 8 cenários baseados em situações reais</li>
                      <li>• 3 opções de resposta para cada cenário</li>
                      <li>• Pontuação de 0 a 100 por cenário</li>
                      <li>• Feedback imediato para cada escolha</li>
                      <li>• Relatório final com análise de desempenho</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-green-800 mb-3 text-left">🎯 Competências Avaliadas</h3>
                    <ul className="text-sm text-green-700 space-y-2 text-left">
                      <li>• Liderança Proativa</li>
                      <li>• Gestão de Desempenho</li>
                      <li>• Tomada de Decisão sob Pressão</li>
                      <li>• Conflito entre Membros do Time</li>
                      <li>• Delegação de Tarefas</li>
					  <li>• Reconhecimento e Engajamento</li>
					  <li>• Desenvolvimento da Equipe</li>
					  <li>• Alinhamento Estratégico</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg mb-8">
                  <h3 className="font-bold text-xl mb-2">🏆 Sistema de Pontuação</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Excelente</p>
                      <p>80-100 pontos</p>
                    </div>
                    <div>
                      <p className="font-semibold">Bom</p>
                      <p>60-79 pontos</p>
                    </div>
                    <div>
                      <p className="font-semibold">Precisa Melhorar</p>
                      <p>0-59 pontos</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={startGame}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-6 h-6 inline mr-2" />
                  Iniciar Jogo
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (gameCompleted) {
      const totalScore = calculateScore();
      const maxScore = gameScenarios.length * 100;
      const percentage = Math.round((totalScore / maxScore) * 100);
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">🎉 Jogo Concluído!</h2>
                  <p className="text-lg text-gray-600">Confira seu desempenho nos cenários</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h3 className="font-bold text-blue-800 mb-2">Pontuação Total</h3>
                    <p className="text-3xl font-bold text-blue-600">{totalScore}</p>
                    <p className="text-sm text-blue-700">de {maxScore} pontos</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <h3 className="font-bold text-green-800 mb-2">Aproveitamento</h3>
                    <p className="text-3xl font-bold text-green-600">{percentage}%</p>
                    <p className="text-sm text-green-700">de acertos</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <h3 className="font-bold text-purple-800 mb-2">Classificação</h3>
                    <p className="text-xl font-bold text-purple-600">
                      {percentage >= 80 ? '🏆 Excelente' : 
                       percentage >= 60 ? '👍 Bom' : '📚 Precisa Melhorar'}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4">📊 Desempenho por Cenário</h3>
                  <div className="space-y-3">
                    {gameScenarios.map((scenario) => {
                      const userChoice = gameAnswers[scenario.id];
                      const choice = scenario.choices.find(c => c.id === userChoice);
                      const points = choice?.points || 0;
                      
                      return (
                        <div key={scenario.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-gray-800">{scenario.title}</h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              points >= 80 ? 'bg-green-100 text-green-800' :
                              points >= 60 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {points} pontos
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                points >= 80 ? 'bg-green-500' :
                                points >= 60 ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`}
                              style={{ width: `${points}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold text-blue-800 mb-4">🧠 Reflexão para o Grupo</h3>
                  <div className="space-y-3 text-sm text-blue-700">
                    <p><strong>1.</strong> Quais decisões você tomaria diferente agora?</p>
                    <p><strong>2.</strong> Já vivenciamos situações similares na DBA? Como foram resolvidas?</p>
                    <p><strong>3.</strong> Que aprendizados podemos aplicar no dia a dia?</p>
                    <p><strong>4.</strong> Como podemos melhorar nossa comunicação e trabalho em equipe?</p>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={resetGame}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Jogar Novamente
                  </button>
                  <button
                    onClick={() => setCurrentView('home')}
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Voltar ao Início
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const scenario = gameScenarios[currentScenario];
    const userAnswer = gameAnswers[scenario.id];
    const showFeedback = userAnswer !== undefined;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">
                Cenário {currentScenario + 1} de {gameScenarios.length}
              </div>
              <div className="w-64 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentScenario + 1) / gameScenarios.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{scenario.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{scenario.description}</p>

              {!showFeedback ? (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">❓ O que você faz?</h3>
                  <div className="space-y-4">
                    {scenario.choices.map((choice) => (
                      <button
                        key={choice.id}
                        onClick={() => handleAnswer(scenario.id, choice.id)}
                        className="w-full text-left p-6 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-300"
                      >
                        <div className="flex items-start">
                          <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                            {choice.id}
                          </span>
                          <span className="text-gray-800">{choice.text}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-blue-800 mb-2">Sua Escolha:</h3>
                    <p className="text-blue-700">
                      {scenario.choices.find(c => c.id === userAnswer)?.text}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-gray-800 mb-2">Consequência:</h3>
                    <p className="text-gray-700">
                      {scenario.choices.find(c => c.id === userAnswer)?.consequence}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-bold ${
                      (scenario.choices.find(c => c.id === userAnswer)?.points || 0) >= 80 
                        ? 'bg-green-100 text-green-800' 
                        : (scenario.choices.find(c => c.id === userAnswer)?.points || 0) >= 60
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {scenario.choices.find(c => c.id === userAnswer)?.points} pontos
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleNextQuestion}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      {currentScenario < gameScenarios.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 bg-gradient-to-r from-teal-300 via-cyan-500 to-blue-700 text-white p-6 rounded-lg shadow-lg">
          
<div className="flex flex-col items-center justify-center">
  <img 
    src={logo} 
    alt="DBA360 Logo" 
    className="h-36 w-auto object-contain mb-2"
  />
  <p className="text-2xl font-bold mb-2 text-black text-center">Plataforma de Onboarding</p>
</div>
          </div>
          <div>
            <p className="text-lg opacity-90">Conectando <strong>Legado</strong> e <strong>Futuro</strong></p>
           
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div 
            onClick={() => setCurrentView('presentation')}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="text-center">
              <Presentation className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ver Apresentação</h3>
              <p className="text-gray-600 text-sm">Slides interativos com justificativa, solução e diferenciais</p>
            </div>
          </div>

          <div 
            onClick={() => setCurrentView('missions')}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="text-center">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">6 Missões</h3>
              <p className="text-gray-600 text-sm">Explore as missões gamificadas do onboarding</p>
            </div>
          </div>

          <div 
            onClick={() => setCurrentView('game')}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="text-center">
              <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jogo Interativo</h3>
              <p className="text-gray-600 text-sm">8 cenários práticos para testar competências</p>
            </div>
          </div>    
        </div>
	
<div className="relative bg-gradient-to-l from-blue-700 via-cyan-500 to-teal-300
  text-gray-900 rounded-lg shadow-lg px-6 py-8 flex flex-col items-center justify-center space-y-6">

  {/* Logos centralizadas */}
  <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
    
    {/* Logo 1 */}
    <div className="flex flex-col items-center">
      <img
     
		 src={academia}
        alt="academia"
        className="w-auto max-h-20 object-contain pointer-events-none select-none"
      />
    </div>

    {/* Logo 2 */}
    <div className="flex flex-col items-center">
      <img
           src={icongurias}
        alt="icongurias"
        className="w-auto max-h-20 object-contain pointer-events-none select-none"
      />
    </div>
  </div>

  {/* Nomes centralizados abaixo das logos */}
  <p className="mt-4 text-center">Andressa Mirian | Gabriela Anselmo | Nary Dorta</p>
</div>









      </div>
    </div>
  );
};

export default App;
