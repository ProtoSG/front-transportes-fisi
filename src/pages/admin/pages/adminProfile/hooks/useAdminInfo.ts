import { useDataBack } from "../../../../../hooks/useDataBack"
import { adminInfoAdapter } from "../adapters/adminInfo.adapeter"
import { AdminInfo } from "../models/adminInfo.model"

export const useAdminInfo = () => {
  const { data, loading, error } = useDataBack<AdminInfo>({
    url: "/admin/info",
    jsonAdapter: adminInfoAdapter
  })

  return { data: data[0], loading, error }
}
