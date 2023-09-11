import OpenAI from "openai";
import { GPT_APIKEY } from "./constants";

const openai = new OpenAI({
  apiKey: GPT_APIKEY,
  dangerouslyAllowBrowser:true
});

export default openai;
