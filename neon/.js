☀️


Projetos


MANUAL - APK.md

Sync
Rodar

8182838485868788899091929394958079
⬛ Terminal
🌐 Preview

🔨
Compilar
Rodar

🌐
Preview
🗑 Limpar
❌ Pedir Jasmim

pronto
📦 Pacotes

npm install
npm run dev
npm run build
npm start
node index.js
python3 main.py
pip install - r
ls - la
$
npm run build

✗ exit 254
347ms
npm error code ENOENT
npm error syscall open
npm error path / home / runner / sk - projetos / package.json
npm error errno - 2
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/home/runner/sk-projetos/package.json'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: /home/runner /.npm / _logs / 2026-04 - 17T23_42_46_950Z - debug - 0.log
❌
Falhounpm error code ENOENT
347ms
$
npm run dev

✗ exit 254
121ms
npm error code ENOENT
npm error syscall open
npm error path / home / runner / sk - projetos / package.json
npm error errno - 2
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/home/runner/sk-projetos/package.json'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: /home/runner /.npm / _logs / 2026-04 - 17T23_42_52_964Z - debug - 0.log
❌
Falhounpm error code ENOENT
121ms
$
clear

✓ OK
18ms
[H[2J[3J
✅
   Concluído com sucesso
18ms
$
npm install, git status, node server.js…

   Ln 32, Col 1
Sp: 2
MARKDOWN
LF
UTF - 8





Jasmim
Digite um comando e pressione Enter…
↵



   Arquivos




⚡ Menu Completo
role para ver mais ↕

🆕 Criar Novo App

Wizard com modelos prontos


📥 Importar ZIP

Abrir arquivo.zip do dispositivo


📥 Importar TAR.GZ

Abrir arquivo.tar.gz


📤 Exportar ZIP

Baixar projeto como.zip


🤖 Assistente IA — Jasmim

Converse, peça código, debug...


🔗 GitHub — Clonar / Enviar

Importar ou exportar para GitHub


📦 Instalar Biblioteca

npm install, pip install...


🗄️
🗄️ Banco de Dados(Neon / Postgres)

Conectar e rodar SQL


📸 Salvar Checkpoint

Criar ponto de restauração


🕐 Histórico de Checkpoints

Ver e restaurar versões salvas


📋 Lista de Tarefas — Taski

Organizar to - dos do projeto


🧠
🧠 Memória da Jasmim

O que ela sabe sobre você e o projeto


📐 Gerar Plano do Projeto

Gera PLANO.md com estrutura e stack


📖
📖 Manual do SK Code Editor

Guia completo em português


🔗
🔗 Combinar Apps

Une vários apps num único projeto


ℹ️ Info do Sistema

Gera SISTEMA.md com detalhes técnicos


💾 Salvar Projeto

Salvar estado atual


🌐 Abrir Preview

Visualizar site / app rodando


⬛ Abrir Terminal

Rodar comandos bash


⚖️ Assistente Jurídico

Consulta jurídica com IA


💬 Campo Livre

Chat sem restrições


🗑️ Limpar Projeto

Apaga todos os arquivos e volta ao início

GitHub

GitHub
@maikonadvogadomg-alt
conectado
Desconectar
Projeto atual

SK - Code - Editor - APK(5)

111 arquivos

Enviar para GitHub


Criar repositório novo e enviar

Cria um repo novo e sobe todos os arquivos


Enviar para repo existente

Atualiza um repositório que já existe

Baixar do GitHub


Importar repositório

Baixa um repositório para editar aqui

📖
Manual do SK Code Editor



🏠
Início Rápido

📲
Instalar como App

🖥️
Terminal

🗄️
Banco de Dados(Neon)

🤖
Jasmim(IA)

🐙
GitHub

👁️
Preview ao Vivo

📦
Importar / Exportar

🔑
Credenciais e API Keys

⚖️
Assistente Jurídico

🗂️
Meus Projetos
🗄️
Banco de Dados(Neon)
Neon DB é PostgreSQL serverless gratuito — a melhor opção para projetos profissionais.Sem cartão de crédito.

🚀 Setup em 5 minutos
1.
Crie conta gratuita em https://neon.tech
plano Free, sem cartão
2.
Clique em "New Project"
dê um nome ao banco(ex: meu - app)
3.
Copie a Connection String
começa com postgresql://...
4.
Cole no painel 🗄️ do editor
ícone de banco na barra inferior
5.
Pronto!
a Jasmim já tem acesso ao seu banco
🔑 Obter Neon API Key(para automação)
Com a API Key, a Jasmim pode criar o banco automaticamente para você:

›
Entre em https://console.neon.tech
›
Vá em Settings → API Keys → Create API Key
›
A chave começa com neon_api_...
›
Envie a chave para a Jasmim: "Crie um banco chamado meu-app"
📦 Instalar dependências
npm install @neondatabase/serverless dotenv
Copiar
🔌 Arquivo de conexão

// db/neon.js
const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

const sql = neon(process.env.DATABASE_URL);

async function initDb() {
   await sql`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    )
  `;
   console.log('✅ Banco inicializado!');
}

module.exports = { sql, initDb };
Copiar
📄 Arquivo.env
DATABASE_URL = postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
PORT = 3000
NODE_ENV = development
Copiar
⚡ Comandos SQL úteis
Criar tabela
CREATE TABLE IF NOT EXISTS tarefas(
   id SERIAL PRIMARY KEY,
   titulo VARCHAR(255) NOT NULL,
   concluida BOOLEAN DEFAULT false,
   criado_em TIMESTAMP DEFAULT NOW()
);
Copiar
Inserir dados
INSERT INTO tarefas(titulo)
VALUES('Primeira tarefa'), ('Segunda tarefa');
Copiar
Consultar
SELECT * FROM tarefas ORDER BY criado_em DESC LIMIT 10;
Copiar
Alterar tabela
ALTER TABLE tarefas ADD COLUMN descricao TEXT;
ALTER TABLE tarefas ADD COLUMN prioridade INTEGER DEFAULT 1;
Copiar
🔐 Com Prisma ORM(recomendado para projetos maiores)
npm install prisma @prisma/client dotenv npx prisma init
Copiar
// prisma/schema.prisma
datasource db {
   provider = "postgresql"
   url = env("DATABASE_URL")
}

generator client {
   provider = "prisma-client-js"
}

model Tarefa {
  id        Int @id @default (autoincrement())
  titulo    String
  concluida Boolean @default (false)
  criadoEm DateTime @default (now())
   @@map("tarefas")
}
Copiar
npx prisma migrate dev--name init npx prisma studio   # abre interface visual do banco
Copiar
⚠️ Regras importantes
›
NUNCA commite o.env com dados reais no git
›
SEMPRE crie.gitignore com.env listado
›
SEMPRE crie.env.example com valores de exemplo
›
Use sslmode = require para Neon(já vem na connection string)
