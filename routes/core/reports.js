const router = require("express").Router();
const ctrl = require("../../controllers/core/reports");

router.get("/", async (req, res) => {
  try {
    const fileName = await ctrl.exportReportByQuery(req.query.q);

    res.download(fileName, fileName.split('/')[fileName.split('/').length], (err) => {
        if (err) {
          res.status(500).send({
            message: "Could not download the file. " + err,
          });
        }
      });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get("/fbApi", async (req, res) => {
    try {
      const fileName = await ctrl.exportReportFbApi();
  
      res.download(fileName, fileName.split('/')[fileName.split('/').length], (err) => {
          if (err) {
            res.status(500).send({
              message: "Could not download the file. " + err,
            });
          }
        });
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  });

module.exports = router;
