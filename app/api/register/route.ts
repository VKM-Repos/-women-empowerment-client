export async function POST(req:any) {
try {
    const {email, password} = await req.json()
    console.log({email, password});
    return
} catch (error) {
    console.log(error);
    
}
}