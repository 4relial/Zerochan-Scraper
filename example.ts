import { ZeroChan } from "./src"

let ZC = new ZeroChan()
async function search(keyword: string, page: number = 1) {
    try {
        await ZC.login("Your Username", "Your Pasword");
        let res = await ZC.getImage(keyword, page);
        console.log(res)
        let detail = await ZC.getDetail(res[0].id)
        console.log(detail)
        // let list = await ZC.getTags('ayaka')
        // console.log(list)
    } catch (e) {
        console.log(e)
    }
}
search("Katou Megumi", 1)