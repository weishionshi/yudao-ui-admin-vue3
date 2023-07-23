import request from '@/config/axios'

export interface DataSourceVO {
  id: number
  username: string
  nickname: string
  deptId: number
  postIds: string[]
  email: string
  mobile: string
  sex: number
  avatar: string
  loginIp: string
  status: number
  remark: string
  loginDate: Date
  createTime: Date
}

// 查询用户管理列表
export const getDataSourcePage = (params: PageParam) => {
  return request.get({ url: '/perf/shard/ds/page', params })
}

// 查询用户详情
export const getDataSource = (id: number) => {
  return request.get({ url: '/perf/shard/ds/get?id=' + id })
}

// 新增用户
export const createDataSource = (data: DataSourceVO) => {
  return request.post({ url: '/perf/shard/ds/create', data })
}

// 修改用户
export const updateDataSource = (data: DataSourceVO) => {
  return request.put({ url: '/perf/shard/ds/update', data })
}

// 删除用户
export const deleteDataSource = (id: number) => {
  return request.delete({ url: '/perf/shard/ds/delete?id=' + id })
}

// 导出用户
export const exportDataSource = (params) => {
  return request.download({ url: '/perf/shard/ds/export', params })
}

// 下载用户导入模板
export const importDataSourceTemplate = () => {
  return request.download({ url: '/perf/shard/ds/get-import-template' })
}

// 用户密码重置
export const resetDataSourcePwd = (id: number, password: string) => {
  const data = {
    id,
    password
  }
  return request.put({ url: '/perf/shard/ds/update-password', data: data })
}

// 用户状态修改
export const updateDataSourceStatus = (id: number, status: number) => {
  const data = {
    id,
    status
  }
  return request.put({ url: '/perf/shard/ds/update-status', data: data })
}

// 获取用户精简信息列表
export const getSimpleDataSourceList = (): Promise<DataSourceVO[]> => {
  return request.get({ url: '/perf/shard/ds/list-all-simple' })
}
