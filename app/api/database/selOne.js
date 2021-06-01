import fire from '../../utility/fire'
import 'firebase/firestore';

export  default  async function SelectOne(collName,id)
{
    
    const db=fire.firestore()
    var donnees=[]
    const f = db.collection(collName).doc(id);
    const gg=await f.get()
        // Document was found in the cache. If no cached document exists,
        // an error will be returned to the 'catch' block below.
        console.log("Cached document data:", gg.data());
    

    return ""
}
