import { createServer } from "http";
import { handler } from "./routes/handler.js";
const server = createServer(handler);

const port = 3000;

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});