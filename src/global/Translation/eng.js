import { ref } from "vue";

 export const useEnglish = () => {
    const eng = ref(
     {
        ts0001: "Good morning",
        ts0002: "Good afternoon",
        ts0003: "Good evening",
        ts0004: "Displaying 9 games out of 21 popular games",
        ts0005 : 'Load more'
        

     }
    )
    return {
        eng
    }
 }  