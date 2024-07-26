//To call the GoogleGenerativeAI class
const {GoogleGenerativeAI} = require("@google/generative-ai");

const GoogleGenAI = new GoogleGenerativeAI("your_api_key_here");

async function runPrompt(){
    const model = GoogleGenAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    })
    const prompt = "What is most iconic handbag brand of all time"
    const result = await model.generateContent(prompt);

    console.log(result.response.text());

}

runPrompt();
