# Classificador de emails

Este repositório contém um projeto fullstack dividido em duas partes principais: `backend` e `frontend`.

## Tecnologias Usadas

- **Backend:**

  - Python 3
  - FastAPI
  - pip (gerenciador de pacotes)
  - venv (ambiente virtual)

- **Frontend:**
  - React
  - TypeScript
  - Vite
  - Node.js / npm

## Estrutura do Projeto

```
backend/
    src/
        main.py
        services.py
    uploads/
    requirements.txt
frontend/
    src/
        App.tsx
        components/
            card.tsx
            footer.tsx
            form.tsx
            layout.tsx
    package.json
    vite.config.ts
```

## Backend

1. (Opcional, recomendado) Crie e ative um ambiente virtual:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Instale as dependências: `pip install -r requirements.txt`
3. Execute o arquivo principal: `fastapi dev src/main.py`

## Frontend

- **Tecnologia:** React + TypeScript + Vite
- **Localização:** `frontend/`
- **Como rodar:**
  1. Instale as dependências: `npm install`
  2. Inicie o servidor de desenvolvimento: `npm run dev`

## Uploads

A pasta `uploads/` no backend armazena arquivos enviados pela aplicação.

## Scripts Úteis

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
fastapi dev src/main.py
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Licença

Este projeto está sob a licença MIT.
