
<p align="center">
  <h1>⚠ Backend: https://github.com/kali-r3i5/cv-form-backend ⚠</h1>
</p>
<p align="center">
  <img src="https://github.com/kali-r3i5/cv-form/blob/main/public/snapshot.png" width="800" />
</p>
<br />


## Problema ☢

- A empresa JobsNET especialista em recrutamento e seleção de profissionais nas mais diversas áreas solicitou para a nossa fábrica de software desenvolver uma página para atração de profissionais para conectar as oportunidades de emprego.

### Frontend 👁‍🗨

Fase 1 - Criação da Página
Apresentar a estrutura do projeto no github;
Landing page com formulário para preenchimento de candidatura. (Referencia formulário - link)
Não existe uma regra para o layout da página, use a imaginação com todos os conhecimentos adquiridos no front-end
Indicamos o Netlify para hospedar sua pagina gratuitamente.

### Backend 💥

Domínio - Modelagem de Dados
Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos.
Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep) NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link: https://viacep.com.br/ws/{SEU_CEP}/json/
Regra de Negócio
Não pode haver 2 cadastros de candidatos com o mesmo cpf
Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular
Integração entre a Página de Formulário e o Back-end
Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados.
Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.

## Quick start

Para rodar o projeto:

### `git clone`

Abra o diretório:

### `cd cv-form`

Instale as dependências:

### `yarn`

Para rodar o projeto:

### `yarn dev`
