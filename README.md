# Classificador de emails

Este repositório contém um projeto fullstack dividido em duas partes principais: `backend` e `frontend`.

## Tecnologias Usadas

- **Backend:**

  - Python 3
  - FastAPI
  - pip (gerenciador de pacotes)
  - venv (ambiente virtual)

## Estrutura do Projeto

```
    src/
        main.py
        services.py
    uploads/
    requirements.txt

```

## Setup

1. (Opcional, recomendado) Crie e ative um ambiente virtual:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Instale as dependências: `pip install -r requirements.txt`
3. Execute o arquivo principal: `fastapi dev src/main.py`

## Uploads

A pasta `uploads/` no backend armazena arquivos enviados pela aplicação.

## Scripts Úteis

### Backend

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
fastapi dev src/main.py
```

## Licença

Este projeto está sob a licença MIT.
