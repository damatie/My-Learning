import { AxiosHost } from './axiosGlobal';

export const createAccount = (payload) =>{
  const url =`/api/v1/admin/create`
  return AxiosHost.post(url,payload)
}

export const googleAuth = () =>{
  const url =`/auth/google/`
  return AxiosHost.get(url)
}