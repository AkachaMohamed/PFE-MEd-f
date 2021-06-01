import fire from '../../utility/fire'
import 'firebase/firestore';
export async function AddData(collName,id,payload)
{
    const db=fire.firestore();
    const cityRef = db.collection(collName).doc(id);
    console.log(payload,'------------------')
    await cityRef.set(payload);
}