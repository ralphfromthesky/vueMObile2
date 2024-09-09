<template>
    <div>
        <div>
            <!-- dfsfa 
            
                                <div className="w-[.8rem] border-none flex items-center gap-[.2rem] rounded-[.1rem]">
                            <div className="w-full relative">
                                <div
                                    onClick={areaSelector}
                                    className="flex items-center justify-between w-full h-[.4rem] py-[.2rem] px-[.05rem]"
                                >
                                    <div className="flex items-center gap-[.05rem]">
                                        <img
                                            src={"/areaCodeFlags/" + areaFlag + ".png"}
                                            className="w-[.25rem]"
                                            alt=""
                                        />
                                        {/* <input className="text-white text-[.2rem] outline-none w-[.5rem] bg-transparent select-none cursor-pointer" type="text" readOnly={true} name="areaCode" value={areaNumCode} /> */}
                                        <span className="text-white text-[.20rem] ">
                                            +{areaNumCode}
                                        </span>
                                    </div>
                                    <img
                                        src="/images/return.png"
                                        alt=""
                                        className="w-[.25rem] rotate-90 transition-all"
                                    />
                                </div>
                                {showHide && (
                                    <div
                                        className="transition-all z-10 flex flex-col min-w-[.8rem] gap-[.2rem] h-auto border-none left-0 rounded-[.15rem] absolute p-[.1rem] mt-[.1rem]"
                                        style={{ backgroundColor: color?.fourth }}
                                    >
                                        {areaLang.map((value: any, index: any) => (
                                            <div
                                                onClick={() => chooseAreaCode(value.lang, value.area)}
                                                className="flex items-center gap-[.05rem]"
                                            >
                                                <img
                                                    src={"/areaCodeFlags/" + value.lang + ".png"}
                                                    className="w-[.25rem]"
                                                    alt=""
                                                />
                                                <span
                                                    style={{ fontSize: "initial" }}
                                                    className="text-white"
                                                >
                                                    +{value.area}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
            -->
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>