const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/sushiCtrl");
const { validateBody, isValideId } = require("../../middlewares");
const { schema } = require("../../models/sushiModels");

router.get("/", ctrl.listSushi);
router.get("/:sushiId", isValideId, ctrl.getSushiById);
router.post("/", validateBody(schema.addSchema), ctrl.addSushi);
router.delete("/:sushiId", isValideId, ctrl.deleteSushi);
router.patch(
  "/:sushiId",
  isValideId,
  validateBody(schema.updateSchema),
  ctrl.updateSushi
);

module.exports = router;
