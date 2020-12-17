export const build_api_request_url = (endpoint, service_needed, addendum, suggestion) => {
    let base_url = "http://";
    //should the backend change, change would be required here
    //should other endpoints are incorporated, add accordingly 
    if(endpoint == "neverlur_backend_api"){
            base_url += "localhost:8000/api/";
            return base_url+service_needed+"/"+addendum+"/";
    }
}