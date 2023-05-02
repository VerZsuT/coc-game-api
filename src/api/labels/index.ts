import { getFromAPI } from '../../helpers'
import type { Items, Label, LabelsAPI } from '../../types'

function getLabelsAPI(token: string): LabelsAPI {
  return {
    async getClanLabels(options) {
      return (await getFromAPI<Items<Label>>(token, 'labels/clans', options)).items
    },
    async getPlayerLabels(options) {
      return (await getFromAPI<Items<Label>>(token, 'labels/players', options)).items
    }
  }
}

export default getLabelsAPI
