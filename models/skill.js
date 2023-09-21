
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
  
  
  function getAllSkills() {
    return skills;
  }
  
  
  function getSkillById(id) {
    return skills.find((skill) => skill.id === id);
  }
  
 
  function addSkill(skill) {
    
    const newId = skills.length > 0 ? skills[skills.length - 1].id + 1 : 1;
    skill.id = newId;
    skills.push(skill);
    return skill;
  }
  
  
  function updateSkill(id, updatedSkill) {
    const skillIndex = skills.findIndex((skill) => skill.id === id);
  
    if (skillIndex === -1) {
      return null; 
    }
  
   
    skills[skillIndex].name = updatedSkill.name || skills[skillIndex].name;
    skills[skillIndex].description =
      updatedSkill.description || skills[skillIndex].description;
  
    return skills[skillIndex];
  }
  
  
  function deleteSkill(id) {
    const skillIndex = skills.findIndex((skill) => skill.id === id);
  
    if (skillIndex === -1) {
      return false; // Skill not found
    }
  
    skills.splice(skillIndex, 1);
    return true; // Skill deleted 
  }
  
  module.exports = {
    getAllSkills,
    getSkillById,
    addSkill,
    updateSkill,
    deleteSkill,
  };