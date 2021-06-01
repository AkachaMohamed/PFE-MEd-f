import fire from '../../utility/fire'

export  async function DataImport(collName)
{
    const db=fire.firestore()
    var donnees=[]
    const snapshot =  await db.collection(collName).get();
    snapshot.forEach((doc) => {
    donnees.push(doc.data())
    });
    return donnees
}
