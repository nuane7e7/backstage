import request from "../lib/axios/config";
export default data=> request({
   url:"api/file",
   method: "post",
   data
  })

