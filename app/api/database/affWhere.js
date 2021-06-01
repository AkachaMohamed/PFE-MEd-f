import fire from '../../utility/fire'

export  async function DataImport(collName,att,valeur)
{
    const db=fire.firestore()
    var donnees=[]
    const snapshot =  await db.collection(collName).where(att, '==', valeur)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
            donnees.push(doc.data())
            });

    });
    
    return donnees
}
