import services
from fastapi import FastAPI # type: ignore

app = FastAPI()

@app.post("/api/email/classificar")
async def handleEmail():
    result = await services.classificarEmail('asds')
    return result