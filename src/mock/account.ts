// import { RoleEnum, SexEnum } from '@/enums/userEnum'
import { resultSuccess } from './utils'

const userInfo = {
    userid: '00000001',
    userName: '李锦鹏',
    role: "大",
    sex: "男",
    phone: '15206123618',
    address: '常州市天宁区月馨苑'
}

export default [
    {
        url: '/account/getAccountInfo',
        method: 'get',
        response: () => {
            return resultSuccess(userInfo)
        }
    }
]
