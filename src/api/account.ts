import { AccountModel } from './model/accountModel'
import service from '@/utils/request'

enum Api {
    ACCOUNT_INFO = '/account/getAccountInfo'
}

// 获取全部的用户信息
export const accountInfoApi = () =>
    service.request<AccountModel[]>({ method: 'get', url: Api.ACCOUNT_INFO })