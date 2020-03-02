new Vue ({
    el: '#app',
    data:{
      principal: null,
      rate: null,
      time: null,
      number: null,
      CompoundInterest: null,
    },
    methods:{
result: function(){
  //r/n
  let calc = (this.rate*0.01)/this.number;
  //nt
  let calc1 = this.number*this.time;
  //(1+r/n)
  let calc2 = (1+ calc);

 CompoundInterest = this.principal*Math.pow(calc2, calc1);
  return CompoundInterest.toFixed(2);

      }
    }
  })

  // A = p(1+r/)nt

//calc = nt
//calc1 = 1 + r/n
// calc2 = nt
//calc3= p(1+r/n)
//compoundInerest = p(1)
      