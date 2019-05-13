

  export function createCookie(nom, valeur, seconde) {
    if(typeof document !== "undefined"){
      if (seconde) {
        var date = new Date();
        date.setTime(date.getTime()+(seconde*24*60*60*1000));
        var expire = "; expire="+date.toGMTString();
      }
      else var expire = "";
      document.cookie = nom+"="+valeur+expire+"; path=/; Domain=cleverapps.io";
    }
  }

  export function  lireCookie(name) {
    if(typeof document !== "undefined"){
      if(document.cookie.length === 0)
        return null;
      var regSepCookie = new RegExp('(; )', 'g');
      var cookies = document.cookie.split(regSepCookie);

      for(var i = 0; i < cookies.length; i++){
        var regInfo = new RegExp('=', 'g');
        var infos = cookies[i].split(regInfo);
        if(infos[0] == name && infos[1]!= "null"){
          return unescape(infos[1]);
        }
      }
    }
    return null;
  }

  export function deleteCookie(name) {
    createCookie(name,null,-1);
  }

