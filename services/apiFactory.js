import { AxiosHost } from './axiosGlobal';

// Create company account
export const createAccount = (payload) =>{
  const url =`/api/v1/admin/create`
  return AxiosHost.post(url,payload)
}

// Google auth
export const googleAuth = () =>{
  const url =`/auth/google/`
  return AxiosHost.get(url)
}

export const login = (payload) =>{
  const url =`/api/v1/user/login/`
  return AxiosHost.post(url,payload)
}