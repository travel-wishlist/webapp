const { City } = require ('../models/index')

class WishlistController {
  static async getWish (req, res, next) {
    try {
      let data = await City.findAll ({
        where: {
          UserId: req.user.id
        }
      })
      res.status (200).json (data)
    } catch (err) {
      res.status (500).json ({message: 'internal server error'})
    }
  }

  static async postWish (req, res, next) {
    try {
      let obj = {
        name: req.body.name,
        description: req.body.description,
        status: false,
        UserId: req.user.id
      }
      let data = await City.create (obj)
      res.status (201).json(data)
    } catch (err) {
      if (err.errors) {
        let errors = err.errors.map (e => {
          return e.message
        })
        res.status (400).json (errors)
      } else {
        res.status (500).json ({message: 'internal server error'})
      }
    }
  }

  static async putWish (req, res, next) {
    try {
      let obj = {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
      }
      let data = await City.update (obj, {
        where: {
          id: +req.params.idCity
        },
        returning: true
      })
      let isSuccess = data[0]
      let dataObj = data[1]
      if (isSuccess === 1) {
        res.status (200).json (dataObj[0])
      } else {
        res.status (404).json ({message: 'error not found'})
      }
    } catch (err) {
      if (err.errors) {
        let errors = err.errors.map (e => {
          return e.message
        })
        res.status (400). json ({message: 'error input'})
      } else {
        res.status (500). json ({message: 'internal server error'})
      }
    }
  }

  static async patchWish (req, res, next) {
    try {
      let obj = {
        status: req.body.status
      }
      let data = await City.update (obj, {
        where: {
          id: +req.params.idCity
        },
        returning: true
      })
      let isSuccess = data[0]
      let dataObj = data[1]

      if (isSuccess === 1) {
        res.status (200).json (dataObj[0])
      } else {
        res.status (404).json ({message: 'error not found'})
      }
    } catch (err) {
      if (err.errors) {
        let errors = err.errors.map (e => {
          return e.message
        })
        res.status (400). json ({message: 'error input'})
      } else {
        res.status (500). json ({message: 'internal server error'})
      }
    }
  }
  
  static async deleteWish (req, res, next) {
    try {
      let data = await City.destroy ({
        where: {
          id: +req.params.idCity
        }
      })
      if (data === 1) {
        res.status (200).json ({message: 'city wish delete successful'})
      } else {
        res.status (404).json ({message: 'error not found'})
      }
    } catch (err) {
        res.status (500).json ({message: 'internal server error'})
    }
  }

}

module.exports = WishlistController
