/**
 * 接口数据类型
 */
export interface IApiBase<T> {
  code: number
  msg: string
  data: T
}

export interface IWechat {
  qrcodeUrl: string
  ticket: string
}

export interface IBannerList {
  id: number
  location: string
  name: string
  img_url: string
  pc_link: string
  h5_link: string
  expired: string
  del: string
  gmt_create: string
  gmt_modified: string
}

export interface ICategoryList {
  id: number
  name: string
  pid: number
  gmt_create: string
  gmt_modified: string
  level: number
  subCategoryList: ICategoryList[]
}
/**
 * 个人信息
 */
export interface IUserInfo {
  id: number
  nickname: string
  head_img: string
  phone: string
  pwd: string
  position: number
  slogan: string
  sex: string
  city: null
  role: null
  read_time: null
  openid: null
}
export interface IRoles {
  name: string
  permissions: number
}
export interface ILoginFormState {
  username: string
  nickname: string
  password: string
  captcha: string
  code: string
  remember: boolean
}
export interface ILoginState {
  isLogin: boolean
  isPwd: boolean
  checked: boolean
  forgetPwd: boolean
}
export interface IVideoList {
  playResult: string
  episodeId: string
}
export interface IDanmu {
  id: number
  product_id: number
  episode_id: number
  account_id: number
  head_img: string
  username: string
  content: string
  style: null | string
  play_time: number
  source_type: string
  target_url: null | string
  gmt_create: string
  gmt_modified: string
  del: number
}
