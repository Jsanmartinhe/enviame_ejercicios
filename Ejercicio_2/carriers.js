
// ******* JSON RAW (Estructura JSON sin procesar) ********
// JSON 
let values =  { 
    1: {
        carrier: "CCH",
        service: "DEX",
    },
    17: {
        carrier: "CHP",
        service: "express",
    }
}
// JSON
let json = { 
        data: {
                BUIN: {
                    limit: 1,
                    over_carrier_service_id: 17,
                    under_carrier_service_id: 17
                },
                LAJA: {
                    limit: 1,
                    over_carrier_service_id: 1,
                    under_carrier_service_id: 1
                },
                LEBU: {
                    limit: 1,
                    over_carrier_service_id: 1,
                    under_carrier_service_id: 1
                },
                LOTA: {
                    limit: 1,
                    over_carrier_service_id: 17,
                    under_carrier_service_id: 17
                }
         }
}// ******* JSON RAW (Estructura JSON sin procesar) ********


let result = {};
var overObject = {over: {}};
var underObject = {under: {}};
var over_carrier_service_id = 0;
var under_carrier_service_id = 0;

for(let key in json.data){
    over_carrier_service_id = json.data[key].over_carrier_service_id;
    under_carrier_service_id = json.data[key].under_carrier_service_id;
   
    overObject.over = Object.assign(values[over_carrier_service_id]);
    underObject.under = Object.assign(values[under_carrier_service_id]);

    let limit = json.data[key].limit;

    result[key] = Object.assign({limit: json.data[key].limit},overObject,underObject);
}

console.log(result);


