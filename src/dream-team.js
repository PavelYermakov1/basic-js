module.exports = function createDreamTeam(members) {

  return (Array.isArray(members) === true) ? members.filter(e => typeof e ==='string').map(e => e.trim().toUpperCase()).sort().reduce((acc,cur) => acc += cur[0], '') : false;
   
};