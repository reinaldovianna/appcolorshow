    function uniqid() {
      var ts=String(new Date().getTime()), i = 0, out = '';
      for(i=0;i<ts.length;i+=2) {        
       out+=Number(ts.substr(i, 2)).toString(36);    
      }
      return ('d'+out);
    }

    function replaceAll(find, replace, str) {
      return str.replace(new RegExp(find, 'g'), replace);
    }
