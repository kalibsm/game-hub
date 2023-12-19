import usePlatforms from "./usePlatforms";


const useFindPlatform = (selectedPlatform_id?:number) => {
    const {data : platforms} = usePlatforms();

    return platforms.results.find(platform => platform.id === selectedPlatform_id);

}
export default useFindPlatform;