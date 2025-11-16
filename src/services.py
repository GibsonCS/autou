from dotenv import load_dotenv # type: ignore
import nltk
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('punkt_tab')
from nltk.corpus import stopwords # type: ignore
from nltk.tokenize import word_tokenize # type: ignore
from google import genai
import os
load_dotenv()

def classificar_email(text):

    api_key = os.getenv("GEMINI_API_KEY")

    tokens = word_tokenize(text.lower())
        
    stop_words = set(stopwords.words('portuguese'))
    
    tokens_filtrados = [palavra for palavra in tokens if palavra not in stop_words]

    client =  genai.Client()

    message = (
    f"Classifique o texto a seguir como produtivo ou improdutivo. Leve em consideração mensagens de fato que sejam produtivas para o trabalho. Respostas como saudações por exemplo, não devem ser tratadas como produtivas. Segue o exemplo de resposta: 'Categoria: produtivo', 'Resposta automática: texto' "
    f"Após a classificação, me informe uma resposta automática referente ao texto no campo resposta automática. "
    f"Text: {tokens_filtrados}"
)

    response = client.models.generate_content(
        model="gemini-2.5-flash", contents=message
    )

    arrayText = response.text.strip().split("\n")

    return arrayText