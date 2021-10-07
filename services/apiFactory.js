import { AxiosHost } from './axiosGlobal';

export const createAccount = (payload) =>{
  const url =`/v1/admin/create`
  return AxiosHost.post(url,payload)
}