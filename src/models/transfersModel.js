const connection = require('../configs/db')

const transfers = {
  getTransferById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM transfer WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllTransfer: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users INNER JOIN transfer ON transfer.userId = users.id', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteTransfer: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM transfer WHERE id = ?', id, (err, result) => {
        if (!err) {
          console.log(result)
          if (result != '') {
            connection.query('DELETE FROM transfer WHERE id = ?', id, (err, result) => {
              if (!err) {
                if (result.affectedRows != 0) {
                  resolve('Delete Data Success')
                } else {
                  resolve('ID Transfer Not Found`')
                }
              } else {
                reject(new Error(err))
              }
            })
          } else {
            resolve('ID Contact Not Found')
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertTransfer: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO transfer SET ?', data, (err, result) => {
        if (!err) {
          resolve('Add Data Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = transfers
