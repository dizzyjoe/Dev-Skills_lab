
const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

const skills = [
  {
    id: 1,
    name: 'JavaScript',
    description: 'Proficient in JavaScript programming.',
  },
  {
    id: 2,
    name: 'HTML',
    description: 'Strong knowledge of HTML markup language.',
  },
  {
    id: 3,
    name: 'CSS',
    description: 'Skilled in styling web pages with CSS.',
  },
];



router.get('/', (req, res) => {
    res.render('skills/index', { skills: skills });
  });


router.get('/:id', skillsController.show);

router.post('/', skillsController.create);

router.put('/:id', skillsController.update);

router.delete('/:id', skillsController.delete);

module.exports = router;
