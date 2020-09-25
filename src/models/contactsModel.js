const connection = require('../configs/db')

const contacts = {
  getContactById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM contacts WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllContact: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM contacts', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateContact: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE contacts SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Update Contact Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteContact: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM contacts WHERE id = ?', id, (err, result) => {
        if (!err) {
          console.log(result)
          if (result != '') {
            connection.query('DELETE FROM contacts WHERE id = ?', id, (err, result) => {
              if (!err) {
                if (result.affectedRows != 0) {
                  resolve('Delete Contact Success')
                } else {
                  resolve('ID Contact Not Found')
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
  insertContact: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO contacts SET ?', data, (err, result) => {
        if (!err) {
          resolve('Add Contact Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = contacts
