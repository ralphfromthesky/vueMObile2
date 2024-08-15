import { axiosGet2 } from "@/components/axios/AxiosHook";
import { useQuery } from "@tanstack/vue-query";
import { useStore } from "@/store/store.js";
import { messageApi } from "@/components/antUi/antMessage";
import { ref } from "vue";


const store = useStore()

export const useGetDegreeInfo = () => {
    const degreeData = ref([])
    const degreeInfo = useQuery({
        queryKey: ["getDegreeInfo"],
        staleTime: 1000,
        enabled: false,
        queryFn: async () => await axiosGet2("/api/native/v2/getDegreeInfo.do?lan=en"),
        select: (data) => {
            store.commit("setDegreeInfo", data);
            degreeData.value = data
            if(data.msg) {
                messageApi.info(data.msg)
                // localStorage.removeItem("setUser");
            }
        },
        onError: (error) => {
            console.log(`error: ${error}`);
        },
    });

    return {
        degreeInfo,
        degreeData
    };
};
