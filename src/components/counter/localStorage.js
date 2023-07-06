const LS_KEY = 'CHRON_V1';

function storage(){
  const ls = localStorage.getItem(LS_KEY);
  if(!ls){
    localStorage.setItem(LS_KEY,'00:00');
  }
  return ls;
}

export { storage }
