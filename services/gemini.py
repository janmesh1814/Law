import google.generativeai as genai
from dotenv import load_dotenv
import os
def summary(document):
    load_dotenv()  
    genai.configure(api_key=os.environ["API_KEY"])
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt=f"Give the summary of following content {document}"
    response = model.generate_content(prompt)
    return response.text
