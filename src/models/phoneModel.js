const connection = require('../configs/db')

const phone = {
  getPhoneById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users INNER JOIN phone ON phone.userId = users.id WHERE phone.id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllPhone: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users INNER JOIN phone ON phone.userId = users.id', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deletePhone: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM phone WHERE id = ?', id, (err, result) => {
        if (!err) {
          console.log(result)
          if (result != '') {
            connection.query('DELETE FROM phone WHERE id = ?', id, (err, result) => {
              if (!err) {
                if (result.affectedRows != 0) {
                  resolve('Delete Data Success')
                } else {
                  resolve('ID Phone Not Found`')
                }
              } else {
                reject(new Error(err))
              }
            })
          } else {
            resolve('ID Phone Not Found')
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updatePhone: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE phone SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Update Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertPhone: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO phone SET ?', data, (err, result) => {
        if (!err) {
          resolve('Add Data Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = phone
