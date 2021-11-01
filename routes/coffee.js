const router = require('express').Router();
const ctrl = require('../controllers/coffee');


router.post('/', async (req, res) => {
  try {
    const item = await ctrl.create(req.body);
    console.log('itemL ', item)
    res.send(item);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get('/source', async (req, res) => {
  try {
    const items = await ctrl.getFromSource();
    res.send(items);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get('/:title', async (req, res) => {
  try {
    const item = await ctrl.getByTitle(req.params.title);
    res.send(item);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get('/', async (req, res) => {
  try {
    let items;
    if (req.query.w) {
      items = await ctrl.getAllByW(JSON.parse(req.query.w));
    } else {
      items = await ctrl.getAll();
    }
    res.send(items);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

module.exports = router;
