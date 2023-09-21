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


    async function index(req, res) {
      try {
        res.json(skills);
      } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: 'Could not retrieve skills' });
      }
    }


    async function show(req, res) {
      try {
        const id = parseInt(req.params.id);
        const skill = skills.find((s) => s.id === id);
    
        if (!skill) {
          return res.status(404).json({ message: 'Skill not found' });
        }
    
        res.json(skill);
      } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: 'Could not retrieve the skill' });
      }
    }


    async function create(req, res) {
      try {

        const newSkill = {
          id: skills.length + 1,
          name: req.body.name,
          description: req.body.description,
        };
    

        skills.push(newSkill);
    

        res.redirect('/skills');
      } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: 'Could not create the skill' });
      }
    }
    

    async function deleteSkill(req, res) {
      const id = parseInt(req.params.id);
      const skillIndex = skills.findIndex((skill) => skill.id === id);
    
      if (skillIndex === -1) {
        return res.status(404).json({ message: 'Skill not found' });
      }
    
      
      skills.splice(skillIndex, 1);
    
      res.redirect('/skills');
    }
    
   
    async function edit(req, res) {
      const id = parseInt(req.params.id);
      const skill = skills.find((s) => s.id === id);
    
      if (!skill) {
        return res.status(404).json({ message: 'Skill not found' });
      }
    
      res.json(skill);
    }
    
    
    async function update(req, res) {
      try {
        const id = parseInt(req.params.id);
        const skillToUpdate = skills.find((s) => s.id === id);
    
        if (!skillToUpdate) {
          return res.status(404).json({ message: 'Skill not found' });
        }
    
        skillToUpdate.name = req.body.name || skillToUpdate.name;
        skillToUpdate.description = req.body.description || skillToUpdate.description;
    
        res.json(skillToUpdate); 
      } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: 'Could not update the skill' });
      }
    }
    
    module.exports = {
      create,
      delete: deleteSkill,
      edit,
      update,
      show,
      index,
    };