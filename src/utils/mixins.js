import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    },
    fromYear(datetime) {
      return datetime ? moment(datetime).format('YYYY年MM月DD日') : '-'
    },
    fromNowWithWord(datetime) {
      let time = moment(datetime).format('a')
      if (time === 'pm') {
        time = '下午'
      } else if (time === 'am') {
        time = '上午'
      }
      return time + moment(datetime).format('h:mm')
    }

  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}