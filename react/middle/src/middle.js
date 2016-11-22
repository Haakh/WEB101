import request from 'superagent'

const middle = store => next => action => {
  next(action)
  request
    .get('/home/sahusoft/Sites/projects/react/application/public/data.json')
    .end((err,res) => {

      if (err) {
            return next({
              type: 'GET_TODO_DATA_ERROR',
              err
            })
          }
      const data = JSON.parse(res.text)

      next({
        type: 'GET_DATA',
        data
      })
    })
}

export default middle
