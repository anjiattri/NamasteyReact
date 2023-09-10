import OpenAI from "openai";
import { GPT_APIKEY } from "./constants";

const openai = new OpenAI({
  apiKey: GPT_APIKEY,
});

export default openai;
