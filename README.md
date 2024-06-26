Meu Projeto ElectronJS
Este é um projeto ElectronJS que contém sistema simples de login e verificação de usuário.

Instalação
Siga estas instruções para configurar e executar o projeto localmente em seu ambiente.

Pré-requisitos
Node.js e npm instalados em seu sistema. Baixe aqui
Docker instalado em seu sistema, se desejar usar o MySQL em um contêiner Docker. Baixe aqui
Clonando o Repositório
Clone este repositório para o seu ambiente local usando o seguinte comando:

bash
Copy code
git clone https://github.com/matheusecke/electronjs-login-system.git
Instalando Dependências
Navegue até o diretório raiz do projeto e instale as dependências do Node.js usando npm:

bash
Copy code
cd meu-projeto-electron
npm install
Configurando o Banco de Dados MySQL
Este projeto utiliza um banco de dados MySQL. Você pode optar por configurar localmente ou usando um contêiner Docker.

Configuração Local
Instale o MySQL em sua máquina seguindo as instruções do site oficial: MySQL Downloads
Crie um banco de dados e execute o script de criação de tabela fornecido no diretório database do projeto.
Configuração com Docker
Se preferir usar um contêiner Docker MySQL, siga estas etapas:

Certifique-se de ter o Docker instalado em seu sistema.
No diretório raiz do projeto, execute o seguinte comando para criar e executar um contêiner Docker MySQL:
bash
Copy code
docker run --name meu-mysql -e MYSQL_ROOT_PASSWORD=sua_senha -p 3306:3306 -d mysql
Executando o Projeto
Depois de configurar o banco de dados, você pode iniciar o projeto ElectronJS com o seguinte comando:

bash
Copy code
npm start
Isso irá iniciar o aplicativo Electron e você poderá começar a usá-lo.
