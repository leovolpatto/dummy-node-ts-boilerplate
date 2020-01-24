import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.json('what are you looking for in here?');
});

export default router;
