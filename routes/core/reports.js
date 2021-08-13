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
        ctrl.deleteReport(fileName);
      });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get("/fbApi/:projectId", async (req, res) => {
    try {
      const fileName = await ctrl.exportReportFbApi(req.params.projectId, req.query.startDate, req.query.endDate);
  
      res.download(fileName, fileName.split('/')[fileName.split('/').length], (err) => {
          if (err) {
            res.status(500).send({
              message: "Could not download the file. " + err,
            });
          }
          ctrl.deleteReport(fileName);
        });
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  });

module.exports = router;
