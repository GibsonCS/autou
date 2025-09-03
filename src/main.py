from typing import Annotated
import services
from fastapi import FastAPI, Form, UploadFile # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from pathlib import Path

origins = ["*"]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/emails/classificar")
async def handle_email(file: UploadFile, title: Annotated[str, Form()]):
    arquivo = Path('./uploads/'+ file.filename)
    arquivo.write_bytes(await file.read())

    with open('./uploads/' + file.filename, 'r', encoding="utf-8") as arquivo:
        contentFile = arquivo.read()
    
    data = services.classificar_email(contentFile)
    return data
