import { IUserInfo } from '~/types/api'
import { IRoles } from '~/types/api'

export const register = async (options: { code: string; phone: string; type: string }) => {
  return await useApi('/user/v1/register', {
    method: 'post',
    body: { code: options.code, phone: options.phone, type: options.type }
  })
}
// 待补充 验证码/密码
export const login = async (options: { phone: string; code?: string; password?: string }) => {
  return await useApi('/user/v1/login', {
    method: 'post',
    body: options
  })
}

export const forget = async (options: { phone: string; code: string; password: string }) => {
  return await useApi<null>('/user/v1/forget', {
    method: 'post',
    body: options
  })
}
export const getUserInfo = async function () {
  return await useApi<IUserInfo>('/user/v1/detail')
}

export const getRoleMenuList = async function (permissions: number): Promise<IRoles[]> {
  const response = await useApi<IRoles[]>('/user/v1/roles', {
    params: { permissions }
  })
  // if (response.code === -1) {
  //   console.log(response.msg)
  //   return
  // }
  return response.data
}
/**
 * 上报学习时长
 * @param params 请求参数 productId-视频ID episodeId-集ID duration-视频时长
 */
export const add = async function (params: {
  productId: number
  episodeId: number
  duration: number
}) {
  return await useApi<null>('/user/v1/duration_record', {
    method: 'POST',
    body: params
  })
}
