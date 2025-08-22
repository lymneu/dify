import type { Fetcher } from 'swr'
import { post } from './base'
import type {
  CreateWorksapce,
} from '@/models/worksapce'
import type { CommonResponse } from '@/models/common'

export const createWorksapce: Fetcher<CommonResponse, CreateWorksapce> = ({ name }: CreateWorksapce) => {
  return post<CommonResponse>('/workspaces/create', {
    body: { name },
  })
}
