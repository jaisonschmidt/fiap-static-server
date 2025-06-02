# FIAP Static Server

Este projeto é um servidor estático simples, desenvolvido para servir arquivos estáticos (HTML, CSS, JS, imagens, etc.) em um ambiente de desenvolvimento ou produção. Ele pode ser utilizado para hospedar sites estáticos, protótipos ou aplicações front-end.

## Funcionalidades

- Servir arquivos estáticos de um diretório especificado.
- Suporte a diferentes tipos de arquivos (HTML, CSS, JS, imagens, etc.).
- Fácil configuração e execução.
- Possibilidade de customização do diretório raiz e porta do servidor.

## Como usar este repositório

Clique com o botão direito em **Copiar Exercício** e abra o link em uma nova aba.

   <a id="copy-exercise" target="_blank" href="https://github.com/new?template_name=fiap-static-server&template_owner=jaisonschmidt&name=fiap-static-server&owner=%40me&visibility=public">
      <img src="https://img.shields.io/badge/📠_Copiar_Exercício-008000" height="25pt"/>
   </a>

## Como executar

1. **Instale as dependências** (se houver):
   ```bash
   npm install
   ```

2. **Inicie o servidor**:
   ```bash
   npm start
   ```
   ou, caso utilize um comando específico:
   ```bash
   node index.js
   ```

3. **Acesse no navegador**:
   ```
   http://localhost:PORTA
   ```
   Substitua `PORTA` pela porta configurada (por padrão, geralmente 3000 ou 8080).

## Estrutura do Projeto

```
/workspaces/fiap-static-server
├── public/           # Diretório padrão dos arquivos estáticos
├── src/              # Código-fonte do servidor
├── package.json      # Dependências e scripts
├── README.md         # Este arquivo
└── ...               # Outros arquivos
```

## Como editar o projeto

- **Adicionar arquivos estáticos:**  
  Coloque seus arquivos HTML, CSS, JS ou imagens dentro do diretório `public/` (ou outro diretório configurado como raiz estática).

- **Alterar configurações:**  
  Modifique as configurações de porta, diretório raiz ou outras opções no arquivo de configuração ou diretamente no código-fonte (geralmente em `src/index.js` ou similar).

- **Editar o código do servidor:**  
  Faça alterações nos arquivos dentro de `src/` para customizar o comportamento do servidor.

- **Atualizar dependências:**  
  Caso adicione novas bibliotecas, lembre-se de rodar `npm install` e atualizar o `package.json`.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção.
3. Faça commit das suas alterações.
4. Envie um pull request.

## Licença

Este projeto é distribuído sob a licença MIT.