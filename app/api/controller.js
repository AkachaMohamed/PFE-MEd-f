import fire from '../utility/fire'

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

export async function AddData(collName,payload)
{
    const db=fire.firestore()
    const dbRef = db.collection(collName);
    const req=dbRef.add(payload)
    console.log(req)
}

export async function UpdateData() {
   const db=fire.firestore()
    const cityRef = db.collection("trainers").doc('dddd@gg.com');
const doc = await cityRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
  console.log('Document data');
}
return "terma"
}
