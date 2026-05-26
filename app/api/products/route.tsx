import { NextResponse } from "next/server";
import products from "../../data/products.json";

export async function GET(request: Request) {

const { searchParams } = new URL(request.url);
const lag = searchParams.get("lag");

let filtered = products;
    if(lag) {
        filtered = products.filter( p => p.lag.toLocaleLowerCase() === lag.toLocaleLowerCase()
        )
    }
    return NextResponse.json(filtered);
}