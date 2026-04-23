# NestJS Student Communication System

Este projeto é uma evolução arquitetural de um sistema de comunicação escolar, migrado de Express para **NestJS**. O objetivo foi aplicar padrões de design sólidos, modularização e escalabilidade no backend.

##  Diferenciais Arquiteturais
Diferente de uma aplicação Node comum, este projeto utiliza a estrutura rigorosa do NestJS para garantir organização:
- **Modularização:** Cada domínio (Estudante, Adm, Auth, Comentários) possui seu próprio módulo.
- **Dependency Injection:** Gerenciamento de serviços através do provider do Nest.
- **SSR (Server Side Rendering):** Uso de `@Render()` para entrega de páginas dinâmicas via EJS.
- **Segurança:** Implementação de autenticação híbrida com Sessões e JWT.

##  Tech Stack
- **Framework:** NestJS (Node.js)
- **Linguagem:** TypeScript
- **View Engine:** EJS (60.2% do projeto)
- **Banco de Dados:** MySQL (DatabaseModule customizado)
- **Autenticação:** JWT (jsonwebtoken) & Express-Session

##  Estrutura de Módulos
O `AppModule` centraliza as seguintes funcionalidades:
- `AuthModule` & `AuthAdmModule`: Gateways de autenticação distintos.
- `EstudanteComentarioModule`: Lógica de criação e gestão de demandas.
- `EstudanteForumModule`: Fórum de interação em tempo real/assíncrona.
- `DatabaseModule`: Módulo global de conexão com banco de dados.

##  Como Executar

1. **Clone e Instale:**
   ```bash
   git clone [https://github.com/Jonathalllllllllll/Nest-project.git](https://github.com/Jonathalllllllllll/Nest-project.git)
   npm install


# Configure o Ambiente:
Crie um arquivo .env baseado no .env.example:

Snippet de código
DATABASE_URL=mysql://user:pass@localhost:3306/db_name
JWT_SECRET=seu_segredo_aqui
Rode a Aplicação:


# Development
npm run start:dev


|Método|Rota|Descrição|
|:---|:---|:---|
|GET|/estudante/home_page|Página inicial do estudante|
|GET|/estudante/cadastro/front_end|Tela de cadastro do estudante|
|GET|/estudante/login/frontend|Tela de login do estudante|
|GET|/estudante/comentario/front_end|Tela para inserir comentário|
|GET|/estudante/lista_de_comentarios|Lista de comentários do próprio estudante|
|GET|/estudante/forum/front_end/:id_comentario_E|Fórum com coordenador sobre um comentário específico|




Evolução de Aprendizado
Este projeto marca a transição do desenvolvimento imperativo (Express) para o desenvolvimento orientado a objetos e decoradores (NestJS), focando em:

[x] Middlewares de Sessão

[x] Controllers com decorators @Get, @Post, @Session e @Render

[x] Separação estrita entre Business Logic (Services) e Routing (Controllers)
