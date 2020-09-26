const connection = require('../configs/db')

const receivers = {
  getReceiverById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM receivers WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllReceiver: (search, sort, order, page, limit) => {
    return new Promise((resolve, reject) => {
      let searchReceiver = ''
      let sortReceiver = ''
      let pageReceiver = ''
      if (search != null) {
        searchReceiver = `WHERE receivers.name LIKE '%${search}%'`
      }
      if (sort != null) {
        if (order != null) {
          sortReceiver = `ORDER BY ${sort} ${order}`
        } else {
          sortReceiver = `ORDER BY ${sort} ASC`
        }
      }
      if (page != null) {
        if (limit != null) {
          pageReceiver = `LIMIT ${limit} OFFSET ${(page - 1) * limit}`
        } else {
          pageReceiver = `LIMIT 3 OFFSET ${(page - 1) * 3}`
        }
      }
      if (sort === 'new') {
        connection.query(`SELECT * FROM receivers ${searchReceiver} ORDER BY name DESC ${pageReceiver}`, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      } else {
        connection.query(`SELECT * FROM receivers ${searchReceiver} ${sortReceiver} ${pageReceiver}`, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },
  updateReceiver: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE receivers SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Update Data Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteReceiver: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM receivers WHERE id = ?', id, (err, result) => {
        if (!err) {
          console.log(result)
          if (result != '') {
            connection.query('DELETE FROM receivers WHERE id = ?', id, (err, result) => {
              if (!err) {
                if (result.affectedRows != 0) {
                  resolve('Delete Data Success')
                } else {
                  resolve('ID Receiver Not Found')
                }
              } else {
                reject(new Error(err))
              }
            })
          } else {
            resolve('ID Receiver Not Found')
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertReceiver: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO receivers SET ?', data, (err, result) => {
        if (!err) {
          resolve('Add Data Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = receivers
