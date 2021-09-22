import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    },
    fromYear(datetime) {
      return datetime ? moment(datetime).format('YYYY/MM/DD') : '-'
    }
  }
}