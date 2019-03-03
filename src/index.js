module.exports = function solveSudoku(matrix) {            
  function zar(i,n){
      var arr_q = [];
      var arr_v = [];
      if (i < 3) {
        if (n < 3) {
          for (j=0; j < 3; j++) {
        
            for (i=0; i < 3; i++) {
              arr_q.push(lar[i][j])
            }
          }  
          rest = rest.filter(e => !~arr_q.indexOf(e));   
          for (v=0; v <9; v++) {
            arr_v.push(lar[v][n])
          };   
          rest = rest.filter(e => !~arr_v.indexOf(e));      
        }
        else if (n < 6 && n >= 3) {
          for (j=3; j < 6; j++) {
        
            for (i=0; i < 3; i++) {
              arr_q.push(lar[i][j])
            }
          }  
          
          rest = rest.filter(e => !~arr_q.indexOf(e)); 
          for (v=0; v <9; v++) {
            arr_v.push(lar[v][n])
          };   
          rest = rest.filter(e => !~arr_v.indexOf(e));          
        }
        else if (n < 9 && n >= 6) {
          for (j=6; j < 9; j++) {
        
            for (i=0; i < 3; i++) {
              arr_q.push(lar[i][j])
            }
          } 
          
          rest = rest.filter(e => !~arr_q.indexOf(e));
          for (v=0; v <9; v++) {
            arr_v.push(lar[v][n])
          };   
          rest = rest.filter(e => !~arr_v.indexOf(e)); 
        }                          
      }
        
    
      else if (i < 6 && i >= 3) {
        if (n < 3) {
          for (j=0; j < 3; j++) {
        
            for (i=3; i < 6; i++) {
              arr_q.push(lar[i][j])
            }
          }  
          
          rest = rest.filter(e => !~arr_q.indexOf(e));  
          for (v=0; v <9; v++) {
            arr_v.push(lar[v][n])
          };   
          rest = rest.filter(e => !~arr_v.indexOf(e));        
        }
        else if (n < 6 && n >= 3) {
          for (j=3; j < 6; j++) {
        
            for (i=3; i < 6; i++) {
              arr_q.push(lar[i][j])
            }
          }  
          
          rest = rest.filter(e => !~arr_q.indexOf(e));  
          for (v=0; v <9; v++) {
            arr_v.push(lar[v][n])
          };   
          rest = rest.filter(e => !~arr_v.indexOf(e));         
        }
        else if (n < 9 && n >= 6) {
          for (j=6; j < 9; j++) {
        
            for (i=3; i < 6; i++) {
              arr_q.push(lar[i][j])
            }
          } 
          
          rest = rest.filter(e => !~arr_q.indexOf(e));
          for (v=0; v <9; v++) {
            arr_v.push(lar[v][n])
          };   
          rest = rest.filter(e => !~arr_v.indexOf(e)); 
        }   
                   
      }
    
      else if (i < 9 && i >= 6) {
        if (n < 3) {
          for (j=0; j < 3; j++) {
        
            for (i=6; i < 9; i++) {
              arr_q.push(lar[i][j])
            }
          }  
          
          rest = rest.filter(e => !~arr_q.indexOf(e));  
          for (v=0; v <9; v++) {
            arr_v.push(lar[v][n])
          };   
          rest = rest.filter(e => !~arr_v.indexOf(e));         
        }
        else if (n < 6 && n >= 3) {
          for (j=3; j < 6; j++) {
        
            for (i=6; i < 9; i++) {
              arr_q.push(lar[i][j])
            }
          }  
              
          rest = rest.filter(e => !~arr_q.indexOf(e));   
          for (v=0; v <9; v++) {
            arr_v.push(lar[v][n])
          };   
          rest = rest.filter(e => !~arr_v.indexOf(e));     
        }
        else if (n < 9 && n >= 6) {
          for (j=6; j < 9; j++) {
        
            for (i=6; i < 9; i++) {
              arr_q.push(lar[i][j])
            }
          } 
          
          rest = rest.filter(e => !~arr_q.indexOf(e));
          for (v=0; v <9; v++) {
            arr_v.push(lar[v][n])
          };   
          rest = rest.filter(e => !~arr_v.indexOf(e)); 
        }                         
      }
    };
  var lar = JSON.parse(JSON.stringify(matrix));
  var common = 0;
  
//==========================================================================
    while (true) {
      while(true) {

        var bar = JSON.parse(JSON.stringify(lar));  
        for (i=0; i < 9; i++) {
        
        var arr = [];
      
          for (n=0; n < 9; n ++) {
            
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              if (rest.length == 1) {
                var z = rest[0];
                lar[i][n] = z;
              };        
            }      
          }   
          
        }  
        // написать полную проверку и выхот из всех циклов
        if (JSON.stringify(bar) === JSON.stringify(lar)) break;
      }


        var add = [];
        for (i=0; i <3; i++) {
          for (n=0; n<3; n++) {
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              Array.prototype.push.apply(add, rest);
            }  
          }
        }
        
        for (val = 1; val < 10; val++) {
          ch = 0;
          for (var j = 0; j < add.length; j++) {
            if (add[j] === val) ch += 1;
          }
          if (ch == 1) {
            for (i=0; i <3; i++) {
              for (n=0; n<3; n++) {
                if (lar[i][n] == 0) {  
                  var rest = [1,2,3,4,5,6,7,8,9];  
                  arr = lar[i].filter(element => element !== 0);
                  rest = rest.filter(e => !~arr.indexOf(e));               
                  zar(i,n);
                  if (rest.indexOf(val) != -1) {
                    lar[i][n] = val;
                  }
                }
              }
            }      
          }
        } 

        var add = [];
        for (i=0; i <3; i++) {
          for (n=3; n<6; n++) {
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              Array.prototype.push.apply(add, rest);
            }  
          }
        }
        
        for (val = 1; val < 10; val++) {
          ch = 0;
          for (var j = 0; j < add.length; j++) {
            if (add[j] === val) ch += 1;
          }
          if (ch == 1) {
            for (i=0; i <3; i++) {
              for (n=3; n<6; n++) {
                if (lar[i][n] == 0) {  
                  var rest = [1,2,3,4,5,6,7,8,9];  
                  arr = lar[i].filter(element => element !== 0);
                  rest = rest.filter(e => !~arr.indexOf(e));               
                  zar(i,n);
                  if (rest.indexOf(val) != -1) {
                    lar[i][n] = val;
                  }
                }
              }
            }      
          }
        }

        var add = [];
        for (i=0; i <3; i++) {
          for (n=6; n<9; n++) {
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              Array.prototype.push.apply(add, rest);
            }  
          }
        }
        
        for (val = 1; val < 10; val++) {
          ch = 0;
          for (var j = 0; j < add.length; j++) {
            if (add[j] === val) ch += 1;
          }
          if (ch == 1) {
            for (i=0; i <3; i++) {
              for (n=6; n<9; n++) {
                if (lar[i][n] == 0) {  
                  var rest = [1,2,3,4,5,6,7,8,9];  
                  arr = lar[i].filter(element => element !== 0);
                  rest = rest.filter(e => !~arr.indexOf(e));               
                  zar(i,n);
                  if (rest.indexOf(val) != -1) {
                    lar[i][n] = val;
                  }
                }
              }
            }      
          }
        
      

      var add = [];
        for (i=3; i <6; i++) {
          for (n=0; n<3; n++) {
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              Array.prototype.push.apply(add, rest);
            }  
          }
        }
        
        for (val = 1; val < 10; val++) {
          ch = 0;
          for (var j = 0; j < add.length; j++) {
            if (add[j] === val) ch += 1;
          }
          if (ch == 1) {
            for (i=3; i <6; i++) {
              for (n=0; n<3; n++) {
                if (lar[i][n] == 0) {  
                  var rest = [1,2,3,4,5,6,7,8,9];  
                  arr = lar[i].filter(element => element !== 0);
                  rest = rest.filter(e => !~arr.indexOf(e));               
                  zar(i,n);
                  if (rest.indexOf(val) != -1) {
                    lar[i][n] = val;
                  }
                }
              }
            }      
          }
        }

        var add = [];
        for (i=3; i <6; i++) {
          for (n=3; n<6; n++) {
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              Array.prototype.push.apply(add, rest);
            }  
          }
        }
        
        for (val = 1; val < 10; val++) {
          ch = 0;
          for (var j = 0; j < add.length; j++) {
            if (add[j] === val) ch += 1;
          }
          if (ch == 1) {
            for (i=3; i <6; i++) {
              for (n=3; n<6; n++) {
                if (lar[i][n] == 0) {  
                  var rest = [1,2,3,4,5,6,7,8,9];  
                  arr = lar[i].filter(element => element !== 0);
                  rest = rest.filter(e => !~arr.indexOf(e));               
                  zar(i,n);
                  if (rest.indexOf(val) != -1) {
                    lar[i][n] = val;
                  }
                }
              }
            }      
          }
        }

        var add = [];
        for (i=3; i <6; i++) {
          for (n=6; n<9; n++) {
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              Array.prototype.push.apply(add, rest);
            }  
          }
        }
        
        for (val = 1; val < 10; val++) {
          ch = 0;
          for (var j = 0; j < add.length; j++) {
            if (add[j] === val) ch += 1;
          }
          if (ch == 1) {
            for (i=3; i <6; i++) {
              for (n=6; n<9; n++) {
                if (lar[i][n] == 0) {  
                  var rest = [1,2,3,4,5,6,7,8,9];  
                  arr = lar[i].filter(element => element !== 0);
                  rest = rest.filter(e => !~arr.indexOf(e));               
                  zar(i,n);
                  if (rest.indexOf(val) != -1) {
                    lar[i][n] = val;
                  }
                }
              }
            }      
          }
        }

        var add = [];
        for (i=6; i <9; i++) {
          for (n=0; n<3; n++) {
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              Array.prototype.push.apply(add, rest);
            }  
          }
        }
        
        for (val = 1; val < 10; val++) {
          ch = 0;
          for (var j = 0; j < add.length; j++) {
            if (add[j] === val) ch += 1;
          }
          if (ch == 1) {
            for (i=6; i <9; i++) {
              for (n=0; n<3; n++) {
                if (lar[i][n] == 0) {  
                  var rest = [1,2,3,4,5,6,7,8,9];  
                  arr = lar[i].filter(element => element !== 0);
                  rest = rest.filter(e => !~arr.indexOf(e));               
                  zar(i,n);
                  if (rest.indexOf(val) != -1) {
                    lar[i][n] = val;
                  }
                }
              }
            }      
          }
        }

        var add = [];
        for (i=6; i <9; i++) {
          for (n=3; n<6; n++) {
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              Array.prototype.push.apply(add, rest);
            }  
          }
        }
        
        for (val = 1; val < 10; val++) {
          ch = 0;
          for (var j = 0; j < add.length; j++) {
            if (add[j] === val) ch += 1;
          }
          if (ch == 1) {
            for (i=6; i <9; i++) {
              for (n=3; n<6; n++) {
                if (lar[i][n] == 0) {  
                  var rest = [1,2,3,4,5,6,7,8,9];  
                  arr = lar[i].filter(element => element !== 0);
                  rest = rest.filter(e => !~arr.indexOf(e));               
                  zar(i,n);
                  if (rest.indexOf(val) != -1) {
                    lar[i][n] = val;
                  }
                }
              }
            }      
          }
        }         
        
        var add = [];
        for (i=6; i <9; i++) {
          for (n=6; n<9; n++) {
            if (lar[i][n] == 0) {  
              var rest = [1,2,3,4,5,6,7,8,9];  
              arr = lar[i].filter(element => element !== 0);
              rest = rest.filter(e => !~arr.indexOf(e));               
              zar(i,n);
              Array.prototype.push.apply(add, rest);
            }  
          }
        }
        
        for (val = 1; val < 10; val++) {
          ch = 0;
          for (var j = 0; j < add.length; j++) {
            if (add[j] === val) ch += 1;
          }
          if (ch == 1) {
            for (i=6; i <9; i++) {
              for (n=6; n<9; n++) {
                if (lar[i][n] == 0) {  
                  var rest = [1,2,3,4,5,6,7,8,9];  
                  arr = lar[i].filter(element => element !== 0);
                  rest = rest.filter(e => !~arr.indexOf(e));               
                  zar(i,n);
                  if (rest.indexOf(val) != -1) {
                    lar[i][n] = val;
                  }
                }
              }
            }      
          }
        }
      }  

    
    if (JSON.stringify(bar) === JSON.stringify(lar)) break;
    }
//==========================================================================
    while (common !==405) {

      var zmagar = JSON.parse(JSON.stringify(lar));

      function zarg(i,n){
        var arr_q = [];
        var arr_v = [];
        if (i < 3) {
          if (n < 3) {
            for (j=0; j < 3; j++) {
          
              for (i=0; i < 3; i++) {
                arr_q.push(zmagar[i][j])
              }
            }  
            rest = rest.filter(e => !~arr_q.indexOf(e));   
            for (v=0; v <9; v++) {
              arr_v.push(zmagar[v][n])
            };   
            rest = rest.filter(e => !~arr_v.indexOf(e));      
          }
          else if (n < 6 && n >= 3) {
            for (j=3; j < 6; j++) {
          
              for (i=0; i < 3; i++) {
                arr_q.push(zmagar[i][j])
              }
            }  
            
            rest = rest.filter(e => !~arr_q.indexOf(e)); 
            for (v=0; v <9; v++) {
              arr_v.push(zmagar[v][n])
            };   
            rest = rest.filter(e => !~arr_v.indexOf(e));          
          }
          else if (n < 9 && n >= 6) {
            for (j=6; j < 9; j++) {
          
              for (i=0; i < 3; i++) {
                arr_q.push(zmagar[i][j])
              }
            } 
            
            rest = rest.filter(e => !~arr_q.indexOf(e));
            for (v=0; v <9; v++) {
              arr_v.push(zmagar[v][n])
            };   
            rest = rest.filter(e => !~arr_v.indexOf(e)); 
          }                          
        }
          
      
        else if (i < 6 && i >= 3) {
          if (n < 3) {
            for (j=0; j < 3; j++) {
          
              for (i=3; i < 6; i++) {
                arr_q.push(zmagar[i][j])
              }
            }  
            
            rest = rest.filter(e => !~arr_q.indexOf(e));  
            for (v=0; v <9; v++) {
              arr_v.push(zmagar[v][n])
            };   
            rest = rest.filter(e => !~arr_v.indexOf(e));        
          }
          else if (n < 6 && n >= 3) {
            for (j=3; j < 6; j++) {
          
              for (i=3; i < 6; i++) {
                arr_q.push(zmagar[i][j])
              }
            }  
            
            rest = rest.filter(e => !~arr_q.indexOf(e));  
            for (v=0; v <9; v++) {
              arr_v.push(zmagar[v][n])
            };   
            rest = rest.filter(e => !~arr_v.indexOf(e));         
          }
          else if (n < 9 && n >= 6) {
            for (j=6; j < 9; j++) {
          
              for (i=3; i < 6; i++) {
                arr_q.push(zmagar[i][j])
              }
            } 
            
            rest = rest.filter(e => !~arr_q.indexOf(e));
            for (v=0; v <9; v++) {
              arr_v.push(zmagar[v][n])
            };   
            rest = rest.filter(e => !~arr_v.indexOf(e)); 
          }   
                    
        }
      
        else if (i < 9 && i >= 6) {
          if (n < 3) {
            for (j=0; j < 3; j++) {
          
              for (i=6; i < 9; i++) {
                arr_q.push(zmagar[i][j])
              }
            }  
            
            rest = rest.filter(e => !~arr_q.indexOf(e));  
            for (v=0; v <9; v++) {
              arr_v.push(zmagar[v][n])
            };   
            rest = rest.filter(e => !~arr_v.indexOf(e));         
          }
          else if (n < 6 && n >= 3) {
            for (j=3; j < 6; j++) {
          
              for (i=6; i < 9; i++) {
                arr_q.push(zmagar[i][j])
              }
            }  
                
            rest = rest.filter(e => !~arr_q.indexOf(e));   
            for (v=0; v <9; v++) {
              arr_v.push(zmagar[v][n])
            };   
            rest = rest.filter(e => !~arr_v.indexOf(e));     
          }
          else if (n < 9 && n >= 6) {
            for (j=6; j < 9; j++) {
          
              for (i=6; i < 9; i++) {
                arr_q.push(zmagar[i][j])
              }
            } 
            
            rest = rest.filter(e => !~arr_q.indexOf(e));
            for (v=0; v <9; v++) {
              arr_v.push(zmagar[v][n])
            };   
            rest = rest.filter(e => !~arr_v.indexOf(e)); 
          }                         
        }
      };

      outer: while (common !=405) {
        common = 0;
              for (k=0; k < 9; k++) {                
                var arr = [];                  
                  for (l=0; l < 9; l ++) {                        
                    if (zmagar[k][l] == 0) {  
                      var rest = [1,2,3,4,5,6,7,8,9];  
                      arr = zmagar[k].filter(element => element !== 0);
                      rest = rest.filter(e => !~arr.indexOf(e));               
                      zarg(k,l);
                      var x = Math.floor(Math.random() * rest.length);
                      var z = rest[x];
                      if (z == undefined) break outer;
                      zmagar[k][l] = z;
//=======================================================================================
                      while (true) {
                        while(true) {

                          var bar = JSON.parse(JSON.stringify(zmagar));  
                          for (i=0; i < 9; i++) {
                          
                          var arr = [];
                        
                            for (n=0; n < 9; n ++) {
                              
                              if (zmagar[i][n] == 0) {  
                                var rest = [1,2,3,4,5,6,7,8,9];  
                                arr = zmagar[i].filter(element => element !== 0);
                                rest = rest.filter(e => !~arr.indexOf(e));               
                                zarg(i,n);
                                if (rest.length == 1) {
                                  var z = rest[0];
                                  zmagar[i][n] = z;
                                };        
                              }      
                            }   
                            
                          }  
                          // написать полную проверку и выхот из всех циклов
                          if (JSON.stringify(bar) === JSON.stringify(zmagar)) break;
                        }


                          var add = [];
                          for (i=0; i <3; i++) {
                            for (n=0; n<3; n++) {
                              if (zmagar[i][n] == 0) {  
                                var rest = [1,2,3,4,5,6,7,8,9];  
                                arr = zmagar[i].filter(element => element !== 0);
                                rest = rest.filter(e => !~arr.indexOf(e));               
                                zarg(i,n);
                                Array.prototype.push.apply(add, rest);
                              }  
                            }
                          }
                          
                          for (val = 1; val < 10; val++) {
                            ch = 0;
                            for (var j = 0; j < add.length; j++) {
                              if (add[j] === val) ch += 1;
                            }
                            if (ch == 1) {
                              for (i=0; i <3; i++) {
                                for (n=0; n<3; n++) {
                                  if (zmagar[i][n] == 0) {  
                                    var rest = [1,2,3,4,5,6,7,8,9];  
                                    arr = zmagar[i].filter(element => element !== 0);
                                    rest = rest.filter(e => !~arr.indexOf(e));               
                                    zarg(i,n);
                                    if (rest.indexOf(val) != -1) {
                                      zmagar[i][n] = val;
                                    }
                                  }
                                }
                              }      
                            }
                          } 

                          var add = [];
                          for (i=0; i <3; i++) {
                            for (n=3; n<6; n++) {
                              if (zmagar[i][n] == 0) {  
                                var rest = [1,2,3,4,5,6,7,8,9];  
                                arr = zmagar[i].filter(element => element !== 0);
                                rest = rest.filter(e => !~arr.indexOf(e));               
                                zarg(i,n);
                                Array.prototype.push.apply(add, rest);
                              }  
                            }
                          }
                          
                          for (val = 1; val < 10; val++) {
                            ch = 0;
                            for (var j = 0; j < add.length; j++) {
                              if (add[j] === val) ch += 1;
                            }
                            if (ch == 1) {
                              for (i=0; i <3; i++) {
                                for (n=3; n<6; n++) {
                                  if (zmagar[i][n] == 0) {  
                                    var rest = [1,2,3,4,5,6,7,8,9];  
                                    arr = zmagar[i].filter(element => element !== 0);
                                    rest = rest.filter(e => !~arr.indexOf(e));               
                                    zarg(i,n);
                                    if (rest.indexOf(val) != -1) {
                                      zmagar[i][n] = val;
                                    }
                                  }
                                }
                              }      
                            }
                          }

                          var add = [];
                          for (i=0; i <3; i++) {
                            for (n=6; n<9; n++) {
                              if (zmagar[i][n] == 0) {  
                                var rest = [1,2,3,4,5,6,7,8,9];  
                                arr = zmagar[i].filter(element => element !== 0);
                                rest = rest.filter(e => !~arr.indexOf(e));               
                                zarg(i,n);
                                Array.prototype.push.apply(add, rest);
                              }  
                            }
                          }
                          
                          for (val = 1; val < 10; val++) {
                            ch = 0;
                            for (var j = 0; j < add.length; j++) {
                              if (add[j] === val) ch += 1;
                            }
                            if (ch == 1) {
                              for (i=0; i <3; i++) {
                                for (n=6; n<9; n++) {
                                  if (zmagar[i][n] == 0) {  
                                    var rest = [1,2,3,4,5,6,7,8,9];  
                                    arr = zmagar[i].filter(element => element !== 0);
                                    rest = rest.filter(e => !~arr.indexOf(e));               
                                    zarg(i,n);
                                    if (rest.indexOf(val) != -1) {
                                      zmagar[i][n] = val;
                                    }
                                  }
                                }
                              }      
                            }
                          
                        

                            var add = [];
                              for (i=3; i <6; i++) {
                                for (n=0; n<3; n++) {
                                  if (zmagar[i][n] == 0) {  
                                    var rest = [1,2,3,4,5,6,7,8,9];  
                                    arr = zmagar[i].filter(element => element !== 0);
                                    rest = rest.filter(e => !~arr.indexOf(e));               
                                    zarg(i,n);
                                    Array.prototype.push.apply(add, rest);
                                  }  
                                }
                              }
                              
                              for (val = 1; val < 10; val++) {
                                ch = 0;
                                for (var j = 0; j < add.length; j++) {
                                  if (add[j] === val) ch += 1;
                                }
                                if (ch == 1) {
                                  for (i=3; i <6; i++) {
                                    for (n=0; n<3; n++) {
                                      if (zmagar[i][n] == 0) {  
                                        var rest = [1,2,3,4,5,6,7,8,9];  
                                        arr = zmagar[i].filter(element => element !== 0);
                                        rest = rest.filter(e => !~arr.indexOf(e));               
                                        zarg(i,n);
                                        if (rest.indexOf(val) != -1) {
                                          zmagar[i][n] = val;
                                        }
                                      }
                                    }
                                  }      
                                }
                              }

                              var add = [];
                              for (i=3; i <6; i++) {
                                for (n=3; n<6; n++) {
                                  if (zmagar[i][n] == 0) {  
                                    var rest = [1,2,3,4,5,6,7,8,9];  
                                    arr = zmagar[i].filter(element => element !== 0);
                                    rest = rest.filter(e => !~arr.indexOf(e));               
                                    zarg(i,n);
                                    Array.prototype.push.apply(add, rest);
                                  }  
                                }
                              }
                              
                              for (val = 1; val < 10; val++) {
                                ch = 0;
                                for (var j = 0; j < add.length; j++) {
                                  if (add[j] === val) ch += 1;
                                }
                                if (ch == 1) {
                                  for (i=3; i <6; i++) {
                                    for (n=3; n<6; n++) {
                                      if (zmagar[i][n] == 0) {  
                                        var rest = [1,2,3,4,5,6,7,8,9];  
                                        arr = zmagar[i].filter(element => element !== 0);
                                        rest = rest.filter(e => !~arr.indexOf(e));               
                                        zarg(i,n);
                                        if (rest.indexOf(val) != -1) {
                                          zmagar[i][n] = val;
                                        }
                                      }
                                    }
                                  }      
                                }
                              }

                              var add = [];
                              for (i=3; i <6; i++) {
                                for (n=6; n<9; n++) {
                                  if (zmagar[i][n] == 0) {  
                                    var rest = [1,2,3,4,5,6,7,8,9];  
                                    arr = zmagar[i].filter(element => element !== 0);
                                    rest = rest.filter(e => !~arr.indexOf(e));               
                                    zarg(i,n);
                                    Array.prototype.push.apply(add, rest);
                                  }  
                                }
                              }
                              
                              for (val = 1; val < 10; val++) {
                                ch = 0;
                                for (var j = 0; j < add.length; j++) {
                                  if (add[j] === val) ch += 1;
                                }
                                if (ch == 1) {
                                  for (i=3; i <6; i++) {
                                    for (n=6; n<9; n++) {
                                      if (zmagar[i][n] == 0) {  
                                        var rest = [1,2,3,4,5,6,7,8,9];  
                                        arr = zmagar[i].filter(element => element !== 0);
                                        rest = rest.filter(e => !~arr.indexOf(e));               
                                        zarg(i,n);
                                        if (rest.indexOf(val) != -1) {
                                          zmagar[i][n] = val;
                                        }
                                      }
                                    }
                                  }      
                                }
                              }

                              var add = [];
                              for (i=6; i <9; i++) {
                                for (n=0; n<3; n++) {
                                  if (zmagar[i][n] == 0) {  
                                    var rest = [1,2,3,4,5,6,7,8,9];  
                                    arr = zmagar[i].filter(element => element !== 0);
                                    rest = rest.filter(e => !~arr.indexOf(e));               
                                    zarg(i,n);
                                    Array.prototype.push.apply(add, rest);
                                  }  
                                }
                              }
                              
                              for (val = 1; val < 10; val++) {
                                ch = 0;
                                for (var j = 0; j < add.length; j++) {
                                  if (add[j] === val) ch += 1;
                                }
                                if (ch == 1) {
                                  for (i=6; i <9; i++) {
                                    for (n=0; n<3; n++) {
                                      if (zmagar[i][n] == 0) {  
                                        var rest = [1,2,3,4,5,6,7,8,9];  
                                        arr = zmagar[i].filter(element => element !== 0);
                                        rest = rest.filter(e => !~arr.indexOf(e));               
                                        zarg(i,n);
                                        if (rest.indexOf(val) != -1) {
                                          zmagar[i][n] = val;
                                        }
                                      }
                                    }
                                  }      
                                }
                              }

                              var add = [];
                              for (i=6; i <9; i++) {
                                for (n=3; n<6; n++) {
                                  if (zmagar[i][n] == 0) {  
                                    var rest = [1,2,3,4,5,6,7,8,9];  
                                    arr = zmagar[i].filter(element => element !== 0);
                                    rest = rest.filter(e => !~arr.indexOf(e));               
                                    zarg(i,n);
                                    Array.prototype.push.apply(add, rest);
                                  }  
                                }
                              }
                              
                              for (val = 1; val < 10; val++) {
                                ch = 0;
                                for (var j = 0; j < add.length; j++) {
                                  if (add[j] === val) ch += 1;
                                }
                                if (ch == 1) {
                                  for (i=6; i <9; i++) {
                                    for (n=3; n<6; n++) {
                                      if (zmagar[i][n] == 0) {  
                                        var rest = [1,2,3,4,5,6,7,8,9];  
                                        arr = zmagar[i].filter(element => element !== 0);
                                        rest = rest.filter(e => !~arr.indexOf(e));               
                                        zarg(i,n);
                                        if (rest.indexOf(val) != -1) {
                                          zmagar[i][n] = val;
                                        }
                                      }
                                    }
                                  }      
                                }
                              }         
                              
                              var add = [];
                              for (i=6; i <9; i++) {
                                for (n=6; n<9; n++) {
                                  if (zmagar[i][n] == 0) {  
                                    var rest = [1,2,3,4,5,6,7,8,9];  
                                    arr = zmagar[i].filter(element => element !== 0);
                                    rest = rest.filter(e => !~arr.indexOf(e));               
                                    zarg(i,n);
                                    Array.prototype.push.apply(add, rest);
                                  }  
                                }
                              }
                              
                              for (val = 1; val < 10; val++) {
                                ch = 0;
                                for (var j = 0; j < add.length; j++) {
                                  if (add[j] === val) ch += 1;
                                }
                                if (ch == 1) {
                                  for (i=6; i <9; i++) {
                                    for (n=6; n<9; n++) {
                                      if (zmagar[i][n] == 0) {  
                                        var rest = [1,2,3,4,5,6,7,8,9];  
                                        arr = zmagar[i].filter(element => element !== 0);
                                        rest = rest.filter(e => !~arr.indexOf(e));               
                                        zarg(i,n);
                                        if (rest.indexOf(val) != -1) {
                                          zmagar[i][n] = val;
                                        }
                                      }
                                    }
                                  }      
                                }
                              }
                            }  

                      
                      if (JSON.stringify(bar) === JSON.stringify(zmagar)) break;
                      }

//=======================================================================================
                    }
                  }
                } 
                for (j=0; j < 9; j++) {

                  var arr_2 = [];
                  for (i=0; i <9; i++) {
                    arr_2.push(zmagar[i][j])
                  }
                  //////////////////////////
                  function arraySum(array){  
                    var sum = 0;
                    for(var i = 0; i < array.length; i++){
                        sum += array[i];
                    }             
                    return sum;
                  }
                  /////////////////////////
                  if (arraySum(arr_2) != 45) break;
                  common += arraySum(arr_2);             
                                              
                }    
              }             
      }
  return zmagar;
}
