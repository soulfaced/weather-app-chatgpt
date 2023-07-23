const cleanData = (data:Root,city:string)=>{
    const{
       daily,
       hourly,
       hourly_units, 
    }=data;

    const {apparent_temperature,dewpoint_2m,rain,precipitation}=hourly;
    const {sunrise,sunset,uv_index_max}= daily;
    // const {apparent_temperature,dewpoint_2m,temperture_2m}=hourly_units

    return{
        hourly:{
            apparent_temperature:apparent_temperature.slice(0,1),
            dewpoint_2m:dewpoint_2m.slice(0,1),
        },
        daily:{
            sunrise:sunrise.slice(0,1),sunset:sunset.slice(0,1),uv_index_max:uv_index_max.slice(0,1)
        },


    }
}
export default cleanData;