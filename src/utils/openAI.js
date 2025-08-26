import { OpenAI } from "openai";
import { OPENAI_KEY } from "./constants";

const openaiClient = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});
export default openaiClient;
