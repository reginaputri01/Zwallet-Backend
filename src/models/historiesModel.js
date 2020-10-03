const connection = require('../configs/db')

const histories = {
  getHistoryById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT sender.username AS sender, sender.balance AS saldo, receiver.username AS receiver, receiver.image, history.amount, history.notes, history.date FROM history INNER JOIN users AS sender ON history.senderId = sender.id INNER JOIN users AS receiver ON history.receiverId = receiver.id WHERE history.id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT sender.username AS sender, sender.balance AS saldo, receiver.username AS receiver, receiver.image, history.amount, history.notes, history.date FROM history INNER JOIN users AS sender ON history.senderId = sender.id INNER JOIN users AS receiver ON history.receiverId = receiver.id', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteHistory: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM history WHERE id = ?', id, (err, result) => {
        if (!err) {
          console.log(result)
          if (result != '') {
            connection.query('DELETE FROM history WHERE id = ?', id, (err, result) => {
              if (!err) {
                if (result.affectedRows != 0) {
                  resolve('Delete Data Success')
                } else {
                  resolve('ID History Not Found')
                }
              } else {
                reject(new Error(err))
              }
            })
          } else {
            resolve('ID History Not Found')
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertHistory: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO history SET ?', data, (err, result) => {
        if (!err) {
          resolve('Add Data Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = histories
