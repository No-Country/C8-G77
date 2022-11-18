const router = require('express').Router()

router.get('/')
router.post('/')

router.get('/:id')
router.delete('/:id')
router.patch('/:id')
router.put('/:id')

module.exports = router