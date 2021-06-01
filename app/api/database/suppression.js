import fire from '../../utility/fire'

export async function DeleteData(collName,id) {
    console.log(id.id)
    const db=fire.firestore()
    const res = await db.collection(collName).doc(id.mail).delete();
return "ok"
}