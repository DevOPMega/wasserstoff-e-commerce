import { promises as fs } from "fs";

export async function GET(req: Request) {
    const data = await fs.readFile(process.cwd() + '/src/app/data/products.json', 'utf8');

    return new Response(data, {
        headers: { 'Content-Type': 'application/json' },
    });
}