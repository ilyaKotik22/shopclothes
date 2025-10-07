import { deleteField, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../server/server";

export const changeCountForItem = (mail,id:string, action: "+" | '-',value)=>{
    console.log(id)
         try {
    const docRef = doc(db, "baskets", `${mail}_basket`);
     updateDoc(docRef, {
      [`items.${id}.count`]: action === '+' ? value+1 : value-1
    });
    console.log("Count updated successfully");
  } catch (error) {
    console.error("Error updating count:", error);
  }
    }

export const changeSizeForItem = (mail,id:string, value: string)=>{
    console.log('adsd')
    try {
    const docRef = doc(db, "baskets", `${mail}_basket`);
     updateDoc(docRef, {
      [`items.${id}.size`]: value
    });
    console.log("Count updated successfully");
  } catch (error) {
    console.error("Error updating count:", error);
  }
}
export const deleteItemFromBasket = (mail,id)=>{
     try {
    const docRef = doc(db, "baskets", `${mail}_basket`);
    
    updateDoc(docRef, {
      [`items.${id}`]: deleteField()
    });
    
    console.log(`Field ${id} deleted successfully`);
  } catch (error) {
    console.error("Error deleting field:", error);
  }
}