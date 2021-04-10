const router = require('express').Router();
const ctrl = require('../controllers/project');


router.post('/', async (req, res) => {
  try {
    const item = await ctrl.create(req.body);
    if(item && item.error)
      res.status(400).send(item);
    else
      res.send(item);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await ctrl.getById(req.params.id);
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

router.delete('/:id', async (req, res) => {
  try {
    const items = await ctrl.deleteById(req.params.id);
    res.send(items);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const item = await ctrl.update(req.params.id, req.body);
    if (item === 'Not found') res.status(404);
    res.send(item);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.post('/runProject/:id', async (req, res) => {
  try {
    res.send(ctrl.runProject(req.params.id));
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.post('/createExecutions/:id', async (req, res) => {
  try {
    res.send(ctrl.createExecutions(req.params.id));
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
})

module.exports = router;