import{a as A,b as F,c as j}from"./chunk-AGZOOVQP.js";import{a as G,b as L}from"./chunk-R5YLRTBY.js";import{a as P,b,c as E,e as S,f as O,i as k,k as D}from"./chunk-I3HLGJKD.js";import{s as R,t as H,u as U}from"./chunk-DTQT6MDS.js";import"./chunk-2RITQTM3.js";import{Aa as o,Ba as M,Ja as p,Ra as g,Ta as x,Tb as w,Ua as T,Ub as I,X as u,Xa as l,Ya as m,Za as y,aa as v,ca as h,mb as s,nb as d,ob as c,pb as _,sb as C,v as f}from"./chunk-LQ6XVIMY.js";var B=(()=>{let i=class i{constructor(e){this.http=e}findMoveByUrl(e){return this.http.get(`${e}`)}};i.\u0275fac=function(t){return new(t||i)(v(I))},i.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();function z(a,i){if(a&1&&(l(0,"mat-card",1)(1,"mat-card-header")(2,"mat-card-title"),s(3),m()(),l(4,"mat-card-content")(5,"div")(6,"mat-grid-list",2)(7,"mat-grid-tile",3)(8,"span",4),s(9),m()(),l(10,"mat-grid-tile",3)(11,"span",5),s(12),m()(),l(13,"mat-grid-tile",3)(14,"span",6),s(15),m()()(),l(16,"mat-grid-list",7)(17,"mat-grid-tile",3)(18,"span",8),s(19),m()(),l(20,"mat-grid-tile",3)(21,"span",9),s(22),m()()()()(),y(23,"mat-divider"),l(24,"mat-card-footer")(25,"div",10)(26,"span"),s(27),m()()()()),a&2){let n=i.$implicit,e,t,r;o(3),d(n.capitalized_name),o(4),p("colspan",1),o(2),c(" PP: ",(e=n==null?null:n.pp)!==null&&e!==void 0?e:0," "),o(1),p("colspan",1),o(2),c(" Power: ",(t=n==null?null:n.power)!==null&&t!==void 0?t:0," "),o(1),p("colspan",1),o(2),c(" Type: ",n==null||n.type==null?null:n.type.name," "),o(2),p("colspan",2),o(2),c(" Accurrancy: ",(r=n==null?null:n.accuracy)!==null&&r!==void 0?r:0,"% "),o(1),p("colspan",2),o(2),c(" Generation: ",n==null||n.generation==null?null:n.generation.name," "),o(5),d(n.effect_entries[0].short_effect)}}var ne=(()=>{let i=class i{constructor(e){this.movesService=e,this.LANGUAGE="en"}ngOnInit(){this.findMoves()}findMoves(){let e=this.pokemonMoves.map(t=>this.movesService.findMoveByUrl(t.move.url));f(e).subscribe({next:t=>{t.forEach(r=>{this.processMove(r)}),this.pokemonMovesList=t}})}processMove(e){let t=e.names.find(r=>r.language.name===this.LANGUAGE);e.capitalized_name=t?.name??"-",e.short_description=e.effect_entries[0].effect.length<200?e.effect_entries[0].effect:`${e.effect_entries[0].effect.substring(0,200)}...`}};i.\u0275fac=function(t){return new(t||i)(M(B))},i.\u0275cmp=h({type:i,selectors:[["app-pokemon-moves"]],inputs:{pokemonMoves:"pokemonMoves"},standalone:!0,features:[_([R]),C],decls:3,vars:0,consts:[[1,"evolutions-container"],[1,"example-card"],["cols","3","rowHeight","100px",1,"mat-grid-list-item"],["colspan","mat-grid-tile-item",3,"colspan"],["matTooltip","Power points. The number of times this move can be used."],["matTooltip","The base power of this move with a value of 0 if it does not have a base power."],["matTooltip","The elemental type of this move."],["cols","4","rowHeight","100px",1,"mat-grid-list-item"],["matTooltip","The percent value of how likely this move is to be successful."],["matTooltip","The generation in which this move was introduced."],[1,"move-description"],["class","example-card"]],template:function(t,r){t&1&&(l(0,"div",0),x(1,z,28,12,"mat-card",11,g),m()),t&2&&T(1,r.pokemonMovesList)},dependencies:[w,k,P,E,O,S,b,j,F,A,U,H,L,G,D],styles:["mat-card[_ngcontent-%COMP%]{margin:10px;border:green solid;width:fit-content;width:30%}mat-grid-list[_ngcontent-%COMP%]{height:40px!important}mat-grid-tile[_ngcontent-%COMP%]{height:40px!important}mat-divider[_ngcontent-%COMP%]{margin-top:5px}.move-description[_ngcontent-%COMP%]{margin:15px}.evolutions-container[_ngcontent-%COMP%]{margin:10px;display:flex;justify-content:center;flex-wrap:wrap;flex:0 0 30%}"]});let a=i;return a})();export{ne as PokemonMovesComponent};
