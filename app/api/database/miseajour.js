import fire from '../../utility/fire'

export async function UpdateData(collName,id,pl) {
    const db=fire.firestore()
    const cityRef = db.collection(collName).doc(id);
    console.log(cityRef)
    const res = await cityRef.update(pl);
    return "ok"
}